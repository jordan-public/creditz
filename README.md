# Creditz

**Creditz** is a World Mini App concept for **human-bound, private, reloadable spending credits**.

The app lets an issuer load credits for a specific human, then lets that human spend those credits in person without revealing their remaining balance and without letting friends, bots, or resellers use the credit on their behalf.

The first target use case is a **student cafeteria card**:

- A university, parent, event organizer, or employer loads USDC-backed credits.
- The student spends at approved merchants by scanning a live merchant QR code.
- Spending requires World ID approval from the registered human.
- A Noir/ProveKit proof privately proves that the hidden balance is sufficient and updates the remaining balance.
- The merchant receives settlement, while the student’s remaining balance stays private.

## Why this exists

Normal gift cards and prepaid balances are transferable. A student can give a card, screenshot, private key, or login to a friend. Normal onchain wallets also expose balances and payment history.

Creditz is designed for credits that should be:

- **Reloadable**: issuers can add new credits later.
- **Private**: balances are hidden behind commitments.
- **Non-transferable in practice**: spending requires the registered human’s World ID proof.
- **In-person**: each payment is bound to a short-lived merchant QR invoice.
- **Programmable**: credits can be restricted to merchant groups, time windows, locations, or categories.

## Example use cases

### Student cafeteria credits

A college loads meal credits for a student. The student can spend at campus cafeterias, but cannot sell the meal balance or let a roommate spend it.

### Gym credits

An employer or insurer loads wellness credits. The user can spend only at approved gyms or wellness merchants. Credits are bound to the human, not to a transferable gift card code.

### Ski resort multi-day passes

A resort issues five day-passes or food credits to one verified person. The pass can be used across multiple days, but cannot be transferred to a friend after the first day.

### Conference food and merch vouchers

A conference issues credits to verified attendees. Attendees can spend privately at approved vendors. Organizers can prevent duplicate claiming and reduce resale.

### Grants, aid, and restricted benefits

An issuer can distribute food, transit, or education credits to humans while preserving privacy and limiting use to intended categories.

## Core protocol idea

Creditz combines two proof systems:

1. **World ID** proves that the spender is the registered unique human.
2. **Noir/ProveKit** proves private balance and spending rules.

World ID gives human-bound authorization. Noir gives private state transitions.

## Private credit note model

A credit note is represented by a commitment:

```text
commitment = H(owner_secret, asset, balance, policy_id, nonce)
nullifier  = H(owner_secret, nonce)
```

The commitment hides the owner secret and balance. The nullifier prevents double spending of an old note.

The contract stores:

```text
commitments[commitment] = true
spentNullifiers[nullifier] = true / false
registeredHuman[account_id] = world_nullifier_hash
approvedMerchants[policy_id][merchant_id] = true / false
```

## Main flows

### 1. Registration

The user registers a credit account inside the World Mini App.

Inputs:

- World ID proof for a registration action.
- User-generated `owner_secret` kept client-side.
- Optional wallet address or app account identifier.

Output:

- A stable app-scoped World ID nullifier is stored as the human binding.
- The app records that this human owns a Creditz account.

Important: the app should store only the World ID nullifier hash, not any real-world identity.

### 2. Issuer reloads credits

A third party can issue credits without the recipient being present, as long as it knows the recipient’s registered credit account or public deposit identifier.

Example:

```text
University deposits 100 USDC
policy_id = campus_cafeteria_policy
recipient_commitment = H(owner_secret_or_public_deposit_key, USDC, 100, policy_id, nonce)
```

The issuer deposits USDC into the Creditz contract and creates a new private note commitment for the recipient.

For the hackathon MVP, use a simpler recipient flow:

- User registers first.
- Backend stores a recipient public commitment key.
- Issuer selects the registered user and reloads credits.

### 3. In-person payment

The merchant POS shows a QR code containing:

```json
{
  "merchant_id": "campus-cafe-1",
  "merchant_address": "0x...",
  "amount": "1250000",
  "asset": "USDC",
  "invoice_nonce": "random-128-bit",
  "expires_at": 1760000000,
  "policy_id": "campus-cafeteria-v1"
}
```

The Mini App scans the QR and asks the user to approve the spend.

The app generates a Noir/ProveKit proof that:

```text
I know owner_secret, balance, policy_id, nonce.
old_commitment = H(owner_secret, USDC, balance, policy_id, nonce)
old_nullifier = H(owner_secret, nonce)
balance >= amount
new_balance = balance - amount
new_commitment = H(owner_secret, USDC, new_balance, policy_id, new_nonce)
merchant_id is approved for policy_id
invoice_nonce and expires_at are included in the public payment statement
```

The app also obtains a World ID proof for the payment action, proving that the same registered human authorizes the spend.

The contract or backend verifies both proofs, marks the old nullifier as spent, inserts the new commitment, and pays the merchant.

### 4. Remaining balance stays private

The public system sees that a valid note was spent and a new commitment was created. It does not learn the remaining balance.

If the MVP pays the merchant with public USDC, the merchant and chain see the payment amount. If a later version routes the merchant receipt into a private note, the amount and recipient flow can also be hidden.

## Why World ID is essential

Without World ID, this is just a private gift card. The user can sell or share the note secret.

With World ID, spending requires:

```text
private note secret + registered human approval
```

A friend with only a screenshot, QR code, or exported secret cannot spend unless they can also produce the registered human’s World ID proof.

## Why Noir/ProveKit is essential

Without Noir, the app would need to store the remaining balance publicly.

With Noir/ProveKit, the app proves:

- the old private balance was sufficient,
- the amount was deducted correctly,
- the merchant is allowed,
- the old note is nullified,
- the new hidden-balance commitment is valid.

## Hackathon MVP scope

Build the smallest demo that proves the product:

1. World Mini App frontend.
2. Registration with World ID.
3. Issuer reload screen that creates a USDC credit note.
4. Merchant POS page that generates a short-lived QR invoice.
5. Student spend screen that scans/pastes invoice, generates a Noir proof, requests World ID proof, and submits payment.
6. Contract or backend ledger that stores commitments and nullifiers.
7. Demo video showing:
   - register,
   - reload,
   - in-person QR payment,
   - remaining hidden balance update,
   - replay/double-spend rejection,
   - wrong human rejection if feasible.

## Suggested technical architecture

```text
World Mini App / Next.js
  ├── MiniKit initialization
  ├── IDKit / World ID verification
  ├── QR invoice scanner
  ├── Noir/ProveKit proof generation
  └── send transaction / backend submit

Backend API
  ├── verifies World ID proof server-side
  ├── verifies ProveKit proof, or forwards proof to verifier
  ├── stores used nullifiers in DB
  ├── stores commitments
  └── exposes issuer and merchant demo endpoints

Smart contracts on World Chain
  ├── CreditRegistry.sol
  ├── stores commitments and spent nullifiers
  ├── verifies proof or accepts backend attestation for MVP
  └── settles USDC to merchant
```

For a more complete onchain version, use a recursive verifier or Groth16 wrapper for the Noir proof.

## World Mini App notes

World Mini Apps use MiniKit inside World App. MiniKit commands include World ID, Pay, Wallet Authentication, Send Transaction, Sign Message, and other World App actions.

World’s FAQ says MiniKit is only a communication channel and sensitive operations should be verified server-side. Do not trust client-side payloads alone.

World’s docs also state that Mini App transaction testing is not supported by a simulator in the normal way; Mini Apps are developed on mainnet, with gas sponsored for World App users subject to restrictions. For local mobile testing, expose the local app with ngrok, zrok, or tunnelmole, configure the URL in the Developer Portal, and scan the app QR with a phone.

World docs do mention a World App simulator for staging World ID flows, but MiniKit commands that depend on World App and real transactions should be tested inside World App.

Useful links:

- World docs: https://docs.world.org
- Developer Portal: https://developer.worldcoin.org
- MiniKit repo: https://github.com/worldcoin/minikit-js
- Mini App testing: https://docs.world.org/mini-apps/quick-start/testing
- Mini App FAQ: https://docs.world.org/mini-apps/more/faq
- World App simulator: https://simulator.worldcoin.org
- ProveKit docs: https://docs.provekit.atheon.xyz
- ProveKit benchmarks: https://provekit.atheon.xyz/benchmarks
- ProveKit repo: https://github.com/worldfnd/provekit

## Prize alignment

### World Track B: World ID

The app breaks without World ID because non-transferability depends on human-bound spending authorization.

### World Track D: ProveKit

The app uses Noir/ProveKit to prove private balance transitions.

Target ProveKit requirements:

- compile Noir circuits to R1CS,
- generate WHIR or Groth16 proofs client-side,
- verify proofs in at least one target environment: CLI, browser, mobile, service, or on-chain.

### Optional sponsor overlap

- **Arc / Dynamic / Unlink**: private USDC payments or private nanopayments.
- **ENS**: merchant names such as `cafeteria.school.eth` and human-readable issuer identities.
- **Ledger**: higher-risk issuer admin operations or reload approvals secured by Ledger.
- **LI.FI / Uniswap**: reload credits from any token and settle as USDC.

## Security considerations

This is a hackathon prototype, not production software.

Open issues:

- Secure storage of `owner_secret` on mobile.
- Recovery if the user loses the device.
- Preventing coercion or voluntary sharing of the World App session.
- Strong merchant authentication for QR invoices.
- Replay protection and short invoice expiry.
- Server-side verification of World ID and MiniKit responses.
- Robust DB uniqueness constraints for all used nullifiers.
- Onchain verifier cost and proof-size tradeoffs.

## Repository

```bash
git clone git@github.com:jordan-public/creditz.git
cd creditz
```

## Current MVP

This repository now contains a runnable hackathon scaffold:

- `apps/web`: Next.js World Mini App with `/`, `/register`, `/issuer`, `/merchant`, `/spend`, and `/debug`.
- `apps/web/src/app/api`: server-side registration, reload, invoice, spend, World ID verification, and debug endpoints.
- `circuits/credit_spend`: Noir circuit target for the private balance transition.
- `contracts`: Foundry contract skeleton for commitments, nullifiers, and backend-attested spends.
- `docs/architecture.md`: architecture and MVP trust assumptions.

The local demo defaults to `NEXT_PUBLIC_DEMO_MODE=true`. That lets judges click through the flow before World Developer Portal credentials are configured. To require real World ID, set `NEXT_PUBLIC_WORLD_APP_ID`, keep the IDKit proof JSON intact, and set `NEXT_PUBLIC_DEMO_MODE=false`.

## Setup

```bash
cp .env.example .env
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

Useful checks:

```bash
pnpm test
pnpm build
pnpm test:contracts
pnpm check:circuit
```

For mobile Mini App testing, expose the Next.js dev server through ngrok, zrok, or tunnelmole, then configure that public URL in the World Developer Portal and open it in World App.

## GitHub Pages + Local Backend

GitHub Pages can serve only the static frontend. The Creditz backend must still run on this machine or another server.

To use GitHub Pages as the frontend:

1. Run the backend locally:

```bash
pnpm dev:backend:pages
```

2. Expose this machine with an HTTPS tunnel:

```bash
pnpm tunnel:backend
```

3. The Pages workflow currently publishes the static frontend to the `gh-pages` branch and defaults to the tunnel started for this demo:

```text
https://mrjtfd-ip-98-113-54-218.tunnelmole.net
```

If you restart `pnpm tunnel:backend`, Tunnelmole may print a new URL. Override the default by setting repository variable `PAGES_API_BASE_URL` to the new tunnel URL, or update `.github/workflows/pages.yml` and push again.

4. Push to `main`. The Pages workflow builds the static frontend at:

```text
https://jordan-public.github.io/creditz
```

If the tunnel URL changes, update `PAGES_API_BASE_URL` and rerun the Pages workflow.

## Demo Script

1. Go to `/register`, generate a deposit key, and verify/register with World ID or demo mode.
2. Go to `/issuer` and reload `25000000` minor units of USDC.
3. Go to `/merchant` and create a `6500000` minor-unit Campus Cafe QR invoice.
4. Copy the invoice payload into `/spend`, verify the human spend, and pay.
5. Open `/debug` to see the old nullifier spent, the invoice marked paid, and a new commitment created.
6. Submit the same invoice again and confirm replay fails.

## Proof Status

The Next.js demo currently uses `demo-keccak` commitments so the UX works end to end in a browser. The Noir target in `circuits/credit_spend` expresses the intended statement:

- old commitment is valid,
- old nullifier is derived from the old nonce,
- old balance is sufficient,
- new commitment deducts the amount,
- merchant and policy are allowed,
- invoice has not expired.

Run:

```bash
pnpm proof:demo
```

The `zk-proof` branch tightens `mode=provekit`: the backend requires a proof envelope with scheme `provekit-noir-credit-spend-v1`, circuit `credit_spend`, and a `public_inputs_hash` that matches the submitted spend statement. Set `PROVEKIT_VERIFY_BIN` to an external verifier executable to make the API call a real ProveKit verifier before accepting the spend. Without that verifier, ProveKit mode is rejected instead of accepting a placeholder proof.

To test the complete proof, verification, and nullification cycle with a real ProveKit proof, build the ProveKit CLI from the upstream `v1` branch, prepare keys for `circuits/credit_spend`, generate a proof from `circuits/credit_spend/Prover.toml.example`, and point the opt-in test at those artifacts:

```bash
PROVEKIT_VERIFY_BIN=node \
PROVEKIT_VERIFY_ARGS=/absolute/path/to/creditz/scripts/provekit-verify.mjs \
PROVEKIT_CLI=/absolute/path/to/provekit-cli \
PROVEKIT_PROVER_KEY=/absolute/path/to/credit_spend.pkp \
PROVEKIT_VERIFIER_KEY=/absolute/path/to/credit_spend.pkv \
PROVEKIT_PROOF_PATH=/absolute/path/to/credit_spend.proof.np \
pnpm test:provekit-cycle
```

That test submits the proof through `/api/spend`, checks that the new commitment is recorded, clears only the invoice paid marker, then confirms replay of the same proof fails because the old nullifier is already spent.

The Mini App spend screen uses the same verifier path. The issuer page creates a circuit-compatible local note, `/spend` asks `/api/provekit/prove` to generate a proof from that note and the merchant invoice, then submits the returned proof envelope to `/api/spend`. For a real phone demo, run the backend with `PROVEKIT_CLI`, `PROVEKIT_PROVER_KEY`, `PROVEKIT_VERIFIER_KEY`, `PROVEKIT_VERIFY_BIN=node`, and `PROVEKIT_VERIFY_ARGS=/absolute/path/to/scripts/provekit-verify.mjs` set. MVP limitation: proving currently happens on the backend, so the backend temporarily receives the private note witness. Verification and nullifier enforcement are real; client-side or delegated private proving is future work.

Spend nullifier checks are enforced before ledger mutation and backed by a DB primary key:

- old commitment must belong to the spending user,
- old nullifier must not already be spent,
- new commitment must not already exist,
- invoice amount, merchant, asset, policy, and expiry must match the proof statement.

## Contracts

`contracts/src/CreditRegistry.sol` implements the required entry points:

- `registerHuman(uint256 worldNullifierHash)`
- `depositCredit(bytes32 commitment, uint256 amount, address asset)`
- `spend(bytes32 oldNullifier, bytes32 newCommitment, address merchant, uint256 amount, bytes proof, bytes worldProofOrBackendAttestation)`

For the MVP, spend accepts a backend signer attestation instead of performing onchain recursive proof verification. This is explicitly a hackathon trust assumption.

## Limitations

- Local demo mode is not real World ID. Disable it for portal-backed testing.
- Local note secrets are stored in browser local storage for demo speed.
- The Noir circuit uses a simple placeholder hash; replace it with a SNARK-friendly hash before production.
- Onchain proof verification is represented by backend attestation in the Solidity skeleton.
- Merchant authentication is a seeded allowlist plus short-lived invoice nonces.
