# AGENTS.md — Codex Instructions for Creditz

You are building **Creditz**, a World Mini App for human-bound, private, reloadable credits.

The repository is:

```bash
git@github.com:jordan-public/creditz.git
```

## Product summary

Build a hackathon MVP for a **private, non-transferable gift-card / meal-card system**:

- A user registers with World ID in a World Mini App.
- An issuer reloads Credits for that user.
- A merchant generates a short-lived in-person QR invoice.
- The user spends by proving:
  - they are the registered World ID human,
  - they own a private credit note,
  - the hidden balance is sufficient,
  - the merchant is allowed,
  - the new hidden balance is computed correctly.
- The app prevents replay and double-spend with nullifiers.

## Hard requirements

1. Use a World Mini App frontend.
2. Use World ID meaningfully; the app should break without proof-of-human.
3. Use Noir/ProveKit for a private balance-transition proof.
4. Provide a working demo path even if some proof verification is initially CLI/backend-based.
5. Keep all secrets out of Git.
6. Do not hard-code proof payloads, World ID results, or transaction IDs in the final demo.
7. Public README must explain architecture, setup, and limitations.

## Important docs

Use these docs while building:

- World docs: https://docs.world.org
- Developer Portal: https://developer.worldcoin.org
- MiniKit repo: https://github.com/worldcoin/minikit-js
- Mini App testing: https://docs.world.org/mini-apps/quick-start/testing
- Mini App FAQ: https://docs.world.org/mini-apps/more/faq
- World App simulator: https://simulator.worldcoin.org
- ProveKit docs: https://docs.provekit.atheon.xyz
- ProveKit repo: https://github.com/worldfnd/provekit
- ProveKit benchmarks: https://provekit.atheon.xyz/benchmarks

The screenshot from the World workshop listed:

- docs.world.org
- developer.worldcoin.org
- docs.world.org/agents
- agentbook.world
- toolrouter.world
- github.com/worldcoin/minikit-js
- docs.provekit.atheon.xyz
- provekit.atheon.xyz/benchmarks

## Testing reality check

World docs state that MiniKit only works inside World App. For mobile Mini App testing, expose local Next.js using ngrok, zrok, or tunnelmole and configure the resulting URL in the Developer Portal.

The FAQ says Mini App transaction testing is not supported by simulator in the usual way; Mini Apps are developed on mainnet and gas may be covered in World App for verified users subject to restrictions. Use test contracts before production contracts.

World docs also reference `https://simulator.worldcoin.org` for staging World ID flows. Use it only for World ID staging flows if it works for the app mode; do not assume it can test all MiniKit transaction behavior.

## Recommended stack

Prefer:

- Next.js + TypeScript
- `@worldcoin/minikit-js`
- IDKit / World ID verification according to current docs
- viem or wagmi for EVM calls
- Foundry for contracts
- SQLite or Postgres for hackathon backend state
- Noir circuits under `circuits/`
- ProveKit CLI or library for proof generation/verification

## Suggested repository structure

```text
creditz/
  apps/
    web/                 # Next.js Mini App frontend
  contracts/
    src/
      CreditRegistry.sol
    test/
  circuits/
    credit_spend/
      src/main.nr
      Prover.toml.example
      Nargo.toml
  server/
    src/
      world.ts           # World ID verification
      provekit.ts        # proof verification wrapper
      db.ts              # commitments/nullifiers
      routes.ts
  docs/
    architecture.md
  README.md
  AGENTS.md
```

If time is short, a monorepo is optional. Prioritize a working demo over perfect structure.

## MVP screens

Build these screens:

1. `/` — landing page with product explanation and buttons.
2. `/register` — user registers with World ID.
3. `/issuer` — issuer reloads credits for a registered user.
4. `/merchant` — merchant creates QR invoice.
5. `/spend` — user scans/pastes QR invoice and spends.
6. `/debug` — shows commitments, spent nullifiers, and demo state without exposing private secrets.

## Core data model

Use this conceptual model:

```text
commitment = H(owner_secret, asset, balance, policy_id, nonce)
nullifier  = H(owner_secret, nonce)
```

For the MVP, if ProveKit hash support is difficult, use a hash supported by the circuit and clearly document the choice. Prefer a SNARK-friendly hash if available.

Tables:

```sql
users(
  id text primary key,
  world_nullifier_hash text unique not null,
  deposit_public_key text,
  created_at timestamp not null
)

commitments(
  commitment text primary key,
  user_id text,
  asset text not null,
  policy_id text not null,
  created_at timestamp not null
)

spent_nullifiers(
  nullifier text primary key,
  invoice_nonce text,
  spent_at timestamp not null
)

merchants(
  merchant_id text primary key,
  merchant_address text not null,
  policy_id text not null,
  display_name text not null
)

invoices(
  invoice_nonce text primary key,
  merchant_id text not null,
  amount text not null,
  asset text not null,
  policy_id text not null,
  expires_at timestamp not null,
  paid_at timestamp
)
```

For nullifiers, enforce DB-level uniqueness. Do not rely on an in-memory Set.

## Noir circuit target

Implement a Noir circuit that proves:

Public inputs:

```text
old_commitment
old_nullifier
new_commitment
asset_id
policy_id
merchant_id
amount
invoice_nonce
expires_at
current_time_or_block_time
```

Private inputs:

```text
owner_secret
old_balance
old_nonce
new_nonce
merchant_allowlist_witness or simplified merchant policy witness
```

Constraints:

```text
old_commitment == H(owner_secret, asset_id, old_balance, policy_id, old_nonce)
old_nullifier == H(owner_secret, old_nonce)
old_balance >= amount
new_balance == old_balance - amount
new_commitment == H(owner_secret, asset_id, new_balance, policy_id, new_nonce)
merchant is allowed under policy_id
invoice has not expired
```

If merchant allowlist inclusion is too much for MVP, hard-code a small allowlist inside the circuit or verify merchant policy in the backend and document that this is an MVP limitation.

## World ID integration

Implement World ID verification server-side. Client-side results are not enough.

Registration action suggestion:

```text
creditz-register-v1
```

Spend action suggestion:

```text
creditz-spend-v1
```

For recovery / same-human semantics, determine from current World docs and mentor guidance whether the same app-scoped nullifier can be reproduced across sessions for the required action scope. If World ID returns different nullifiers per action, store separate nullifiers and document the binding model.

Do not mutate the World ID proof JSON before forwarding it to the verification endpoint. Preserve fields exactly as returned by the client.

## Contracts

Implement `CreditRegistry.sol` with at least:

```solidity
function registerHuman(uint256 worldNullifierHash) external;
function issueCredit(bytes32 commitment, uint256 amount) external;
function spend(
    bytes32 oldNullifier,
    bytes32 newCommitment,
    address merchant,
    uint256 amount,
    bytes calldata proof,
    bytes calldata worldProofOrBackendAttestation
) external;
```

For MVP, proof verification may be backend-mediated if onchain recursive verification is too time-consuming. If so, make the contract accept a backend signer attestation and clearly mark it as an MVP trust assumption.

For this MVP, Credits are the issued and spent unit. Do not require an ERC-20 backing token for issuance or merchant settlement records.

## In-person QR invoice

Merchant QR payload:

```json
{
  "merchant_id": "campus-cafe-1",
  "merchant_address": "0x...",
  "amount": "1250000",
  "asset": "Credits",
  "invoice_nonce": "random-128-bit",
  "expires_at": 1760000000,
  "policy_id": "campus-cafeteria-v1"
}
```

Validate:

- invoice nonce is unique,
- invoice is not expired,
- merchant is approved,
- amount is positive,
- replayed invoice cannot be paid twice.

## Demo script to support

Make sure the final app can demonstrate:

1. User registers with World ID.
2. Issuer reloads 25 cafeteria Credits.
3. Merchant creates QR invoice for 6.50 Credits.
4. User pays in the Mini App.
5. Debug page shows old nullifier spent and new commitment created.
6. Replaying the same proof or invoice fails.
7. Remaining balance is not publicly displayed onchain or in backend public endpoints.

## Environment variables

Create `.env.example` but never commit `.env`.

Include placeholders:

```bash
NEXT_PUBLIC_WORLD_APP_ID=
NEXT_PUBLIC_WORLD_ACTION_REGISTER=creditz-register-v1
NEXT_PUBLIC_WORLD_ACTION_SPEND=creditz-spend-v1
WORLD_ID_VERIFY_ENDPOINT=
WORLD_ID_RP_ID=
RP_SIGNING_KEY=
DATABASE_URL=
RPC_URL=
PRIVATE_KEY=
CREDIT_REGISTRY_ADDRESS=
BACKEND_ATTESTER_PRIVATE_KEY=
```

## Build order

Follow this order:

1. Initialize repo and app skeleton.
2. Add README and `.env.example`.
3. Build local mock flow without World/Noir using fake proof objects.
4. Add real World ID registration verification.
5. Add Noir circuit and CLI proof generation.
6. Add proof verification endpoint.
7. Add contracts and local tests.
8. Wire spend flow end-to-end.
9. Add MiniKit transaction/send flow.
10. Add demo polish and video script.

Do not block the whole project on onchain proof verification. A service verifier plus clear README is acceptable for the hackathon MVP if ProveKit proof generation and verification are real.

## Definition of done

The project is ready when:

- `pnpm install` works.
- `pnpm dev` starts the web app.
- Contract tests pass or demo scripts run.
- Noir/ProveKit proof can be generated and verified in at least one environment.
- World ID registration is integrated and verified server-side.
- QR payment demo works end-to-end.
- README explains the MVP trust assumptions.
- No secrets are committed.
- Demo video can be recorded in under 3 minutes.
