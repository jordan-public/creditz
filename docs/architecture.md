# Creditz Architecture

Creditz has three layers:

1. World Mini App frontend in `apps/web`.
2. Backend verification routes under `apps/web/src/app/api`, with SQLite for users, invoices, and debug indexing.
3. Noir/ProveKit and Solidity targets under `circuits/` and `contracts/`.

## Demo Trust Model

The local app defaults to `NEXT_PUBLIC_DEMO_MODE=true`. In that mode, World ID produces a local demo proof when no World App ID is configured. Set `NEXT_PUBLIC_WORLD_APP_ID` and `NEXT_PUBLIC_DEMO_MODE=false` to require real IDKit results and server-side verification.

The spend flow has two proof modes:

- `demo-keccak`: browser computes note commitments and nullifiers with keccak for the UX demo.
- `provekit`: backend requires a structured proof envelope bound to the public inputs hash, then invokes an external verifier configured with `PROVEKIT_VERIFY_BIN`.

The Noir circuit documents the intended public/private statement. In this branch the API no longer treats an arbitrary proof blob as valid: ProveKit mode requires the envelope scheme `provekit-noir-credit-spend-v1`, circuit `credit_spend`, a matching public-input hash, and a successful external verifier process.

## Ledger Modes

The local demo defaults to `LEDGER_MODE=sqlite`. In that mode, commitments and spent nullifiers are written to SQLite so the Mini App can run without a chain.

Set `LEDGER_MODE=onchain` to route commitment existence checks, nullifier replay checks, reload recording, and spend settlement recording through `CreditRegistry.sol`. The backend still keeps users, invoices, merchants, and a debug/index cache in SQLite because the hackathon app does not yet include an event indexer.

On-chain mode requires:

- `RPC_URL`
- `PRIVATE_KEY`
- `CREDIT_REGISTRY_ADDRESS`
- `BACKEND_ATTESTER_PRIVATE_KEY` if the attester is not the transaction sender

In on-chain mode, `CreditRegistry` stores note commitments, spent nullifiers, issuer Credits issued totals, policy roots, approved merchants, and merchant settlement records keyed by invoice nonce.

## Nullifier Checks

Spend handling checks the public ledger before mutation:

- invoice exists, is unpaid, and is not expired,
- merchant, policy, asset, and amount match the invoice,
- old commitment exists for the spending user,
- old nullifier has not already been spent,
- new commitment does not already exist.

In SQLite mode, the database also keeps `spent_nullifiers.nullifier` as a primary key, so duplicate nullifiers are rejected even if two requests race. In on-chain mode, the contract's `spentNullifiers` mapping is the replay guard.

## Privacy Boundary

The browser stores `owner_secret`, nonce, and remaining balance in local storage for demo speed. The backend stores only users, commitments, spent nullifiers, approved merchants, and invoices. The debug page intentionally shows public ledger state only.
