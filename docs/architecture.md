# Creditz Architecture

Creditz has three layers:

1. World Mini App frontend in `apps/web`.
2. Backend ledger and verification routes under `apps/web/src/app/api`, backed by SQLite.
3. Noir/ProveKit and Solidity targets under `circuits/` and `contracts/`.

## Demo Trust Model

The local app defaults to `NEXT_PUBLIC_DEMO_MODE=true`. In that mode, World ID produces a local demo proof when no World App ID is configured. Set `NEXT_PUBLIC_WORLD_APP_ID` and `NEXT_PUBLIC_DEMO_MODE=false` to require real IDKit results and server-side verification.

The spend flow has two proof modes:

- `demo-keccak`: browser computes note commitments and nullifiers with keccak for the UX demo.
- `provekit`: backend requires a proof blob and is prepared for service verification.

The Noir circuit documents the intended public/private statement and should be wired to a real ProveKit verifier before production use.

## Privacy Boundary

The browser stores `owner_secret`, nonce, and remaining balance in local storage for demo speed. The backend stores only users, commitments, spent nullifiers, approved merchants, and invoices. The debug page intentionally shows public ledger state only.
