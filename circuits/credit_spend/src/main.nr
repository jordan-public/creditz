fn simple_hash(a: Field, b: Field, c: Field, d: Field, e: Field) -> Field {
    // MVP placeholder for ProveKit wiring. Replace with Poseidon/Pedersen before production.
    a * 1315423911 + b * 2654435761 + c * 97531 + d * 8191 + e
}

fn main(
    old_commitment: pub Field,
    old_nullifier: pub Field,
    new_commitment: pub Field,
    asset_id: pub Field,
    policy_id: pub Field,
    merchant_id: pub Field,
    amount: pub u64,
    invoice_nonce: pub Field,
    expires_at: pub u64,
    current_time_or_block_time: pub u64,
    owner_secret: Field,
    old_balance: u64,
    old_nonce: Field,
    new_nonce: Field,
    merchant_policy_witness: Field,
) {
    let computed_old = simple_hash(owner_secret, asset_id, old_balance as Field, policy_id, old_nonce);
    let computed_nullifier = simple_hash(owner_secret, old_nonce, invoice_nonce, 0, 0);
    let new_balance = old_balance - amount;
    let computed_new = simple_hash(owner_secret, asset_id, new_balance as Field, policy_id, new_nonce);

    assert(old_commitment == computed_old);
    assert(old_nullifier == computed_nullifier);
    assert(new_commitment == computed_new);
    assert(old_balance >= amount);
    assert(current_time_or_block_time <= expires_at);

    // MVP allowlist: campus-cafe-1 encoded as 3001 under campus-cafeteria-v1 encoded as 2001.
    assert(policy_id == 2001);
    assert(merchant_id == 3001);
    assert(merchant_policy_witness == 1);
}
