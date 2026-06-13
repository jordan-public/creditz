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

