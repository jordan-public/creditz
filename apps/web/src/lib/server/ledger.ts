import type { Address } from "viem";
import { get, run } from "./db";
import type { SpendProof } from "./proof";
import { isOnchainLedger, onchainCommitmentExists, onchainEnsureMerchantApproved, onchainIssueCredit, onchainNullifierSpent, onchainRegisterHuman, onchainSpendPrivateCredits } from "./onchain";

export async function commitmentExists(commitment: string, userId?: string) {
  if (isOnchainLedger()) {
    return onchainCommitmentExists(commitment);
  }
  const row = get(
    `select commitment from commitments
     where commitment = @commitment and (@user_id is null or user_id = @user_id)`,
    {
      commitment,
      user_id: userId ?? null
    }
  );
  return Boolean(row);
}

export async function nullifierSpent(nullifier: string) {
  if (isOnchainLedger()) {
    return onchainNullifierSpent(nullifier);
  }
  return Boolean(get("select nullifier from spent_nullifiers where nullifier = @nullifier", { nullifier }));
}

export async function recordHumanRegistration(worldNullifierHash: string) {
  if (isOnchainLedger()) {
    await onchainRegisterHuman(worldNullifierHash);
  }
}

export async function recordReload(input: {
  commitment: string;
  userId: string;
  amount: string;
  asset: string;
  policyId: string;
}) {
  if (isOnchainLedger()) {
    await onchainIssueCredit(input.commitment, input.amount);
  }
  run(
    `insert into commitments(commitment, user_id, asset, policy_id, created_at)
     values (@commitment, @user_id, @asset, @policy_id, @created_at)`,
    {
      commitment: input.commitment,
      user_id: input.userId,
      asset: input.asset,
      policy_id: input.policyId,
      created_at: new Date().toISOString()
    }
  );
}

export async function recordSpend(input: {
  userId: string;
  proof: SpendProof;
  merchantAddress: string;
}) {
  if (isOnchainLedger()) {
    await onchainEnsureMerchantApproved(input.proof.policy_id, input.merchantAddress as Address);
    await onchainSpendPrivateCredits(input.proof, input.merchantAddress as Address);
  }

  const now = new Date().toISOString();
  run(
    `insert into spent_nullifiers(nullifier, invoice_nonce, spent_at)
     values (@nullifier, @invoice_nonce, @spent_at)`,
    {
      nullifier: input.proof.old_nullifier,
      invoice_nonce: input.proof.invoice_nonce,
      spent_at: now
    }
  );
  run(
    `insert into commitments(commitment, user_id, asset, policy_id, created_at)
     values (@commitment, @user_id, @asset, @policy_id, @created_at)`,
    {
      commitment: input.proof.new_commitment,
      user_id: input.userId,
      asset: input.proof.asset_id,
      policy_id: input.proof.policy_id,
      created_at: now
    }
  );
}
