import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "..");
const appRequire = createRequire(resolve(repoRoot, "apps/web/package.json"));
const viem = await import(pathToFileURL(appRequire.resolve("viem")).href);
const accounts = await import(pathToFileURL(appRequire.resolve("viem/accounts")).href);

const {
  createPublicClient,
  createWalletClient,
  encodeFunctionData,
  http,
  parseAbi
} = viem;
const { mnemonicToAccount, privateKeyToAccount } = accounts;

const envPath = resolve(repoRoot, "apps/web/.env.local");
loadEnv(resolve(repoRoot, ".env"));
loadEnv(envPath);

const rpcUrl = required("RPC_URL");
const address = process.env.ADDRESS;
const account = process.env.PRIVATE_KEY
  ? privateKeyToAccount(normalizePrivateKey(process.env.PRIVATE_KEY))
  : mnemonicToAccount(required("PASSPHRASE"));

if (address && account.address.toLowerCase() !== address.toLowerCase()) {
  throw new Error(`ADDRESS ${address} does not match signer ${account.address}.`);
}

const registryArtifact = JSON.parse(readFileSync(resolve(repoRoot, "contracts/out/CreditRegistry.sol/CreditRegistry.json"), "utf8"));
const verifierArtifact = JSON.parse(readFileSync(resolve(repoRoot, "contracts/out/CreditSpendVerifier.sol/HonkVerifier.json"), "utf8"));
const transport = http(rpcUrl);
const publicClient = createPublicClient({ transport });
const walletClient = createWalletClient({ account, transport });
const chainId = await publicClient.getChainId();
const balance = await publicClient.getBalance({ address: account.address });
if (balance === 0n) throw new Error(`${account.address} has no ETH on chain ${chainId}.`);

let verifierAddress = process.env.CREDIT_SPEND_VERIFIER_ADDRESS;
if (verifierAddress) {
  console.log(`Using existing HonkVerifier: ${verifierAddress}`);
} else {
  const verifierSize = deployedSize(verifierArtifact);
  if (verifierSize > 24_576) {
    throw new Error(
      `Generated HonkVerifier is ${verifierSize} bytes, above the EVM 24,576 byte deployed-code limit. ` +
        "Use a split/optimized verifier and set CREDIT_SPEND_VERIFIER_ADDRESS before deploying CreditRegistry."
    );
  }

  console.log(`Deploying HonkVerifier from ${account.address} on chain ${chainId}.`);
  const verifierHash = await walletClient.deployContract({
    account,
    chain: null,
    abi: verifierArtifact.abi,
    bytecode: verifierArtifact.bytecode.object,
    args: []
  });
  console.log(`Verifier deployment transaction: ${verifierHash}`);
  const verifierReceipt = await publicClient.waitForTransactionReceipt({ hash: verifierHash });
  if (!verifierReceipt.contractAddress) throw new Error("Verifier deployment receipt did not include a contract address.");
  verifierAddress = verifierReceipt.contractAddress;
  console.log(`HonkVerifier deployed: ${verifierAddress}`);
}

console.log(`Deploying CreditRegistry from ${account.address} on chain ${chainId}.`);
const hash = await walletClient.deployContract({
  account,
  chain: null,
  abi: registryArtifact.abi,
  bytecode: registryArtifact.bytecode.object,
  args: [account.address, verifierAddress]
});
console.log(`Registry deployment transaction: ${hash}`);
const receipt = await publicClient.waitForTransactionReceipt({ hash });
if (!receipt.contractAddress) throw new Error("Deployment receipt did not include a contract address.");
console.log(`CreditRegistry deployed: ${receipt.contractAddress}`);

const policyId = bytes32(process.env.DEFAULT_POLICY_ID ?? "2001");
const merchant = process.env.DEFAULT_MERCHANT_ADDRESS ?? "0x00000000000000000000000000000000000cafe1";
const approveData = encodeFunctionData({
  abi: parseAbi(["function approveMerchant(bytes32 policyId, address merchant, bool approved)"]),
  functionName: "approveMerchant",
  args: [policyId, merchant, true]
});
const approveHash = await walletClient.sendTransaction({
  account,
  chain: null,
  to: receipt.contractAddress,
  data: approveData
});
console.log(`Merchant approval transaction: ${approveHash}`);
await publicClient.waitForTransactionReceipt({ hash: approveHash });

if (process.argv.includes("--write-env")) {
  upsertEnv(envPath, {
    LEDGER_MODE: "onchain",
    RPC_URL: rpcUrl,
    CREDIT_SPEND_VERIFIER_ADDRESS: verifierAddress,
    CREDIT_REGISTRY_ADDRESS: receipt.contractAddress,
    ADDRESS: account.address
  });
  console.log(`Updated ${envPath} with on-chain ledger settings.`);
}

function loadEnv(path) {
  if (!existsSync(path)) return;
  for (const line of readFileSync(path, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const match = trimmed.match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
    if (!match || process.env[match[1]] !== undefined) continue;
    process.env[match[1]] = unquote(match[2]);
  }
}

function upsertEnv(path, values) {
  const lines = existsSync(path) ? readFileSync(path, "utf8").split(/\r?\n/) : [];
  const seen = new Set();
  const next = lines.map((line) => {
    const match = line.match(/^([A-Za-z_][A-Za-z0-9_]*)=/);
    if (!match || !(match[1] in values)) return line;
    seen.add(match[1]);
    return `${match[1]}=${values[match[1]]}`;
  });
  for (const [key, value] of Object.entries(values)) {
    if (!seen.has(key)) next.push(`${key}=${value}`);
  }
  writeFileSync(path, `${next.filter((line, index) => line || index < next.length - 1).join("\n")}\n`);
}

function required(name) {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is required.`);
  return value;
}

function normalizePrivateKey(value) {
  return value.startsWith("0x") ? value : `0x${value}`;
}

function unquote(value) {
  const trimmed = value.trim();
  if ((trimmed.startsWith("\"") && trimmed.endsWith("\"")) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function bytes32(value) {
  const bigint = BigInt(value);
  return `0x${bigint.toString(16).padStart(64, "0")}`;
}

function deployedSize(artifact) {
  return artifact.deployedBytecode.object.replace(/^0x/, "").length / 2;
}
