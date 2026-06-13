"use client";

import { keccak256, stringToBytes } from "viem";

export type LocalNote = {
  ownerSecret: string;
  balance: string;
  nonce: string;
  commitment: string;
  asset: string;
  policyId: string;
};

const key = "creditz.local-note.v1";

export function loadLocalNote(): LocalNote | null {
  const raw = window.localStorage.getItem(key);
  return raw ? (JSON.parse(raw) as LocalNote) : null;
}

export function saveLocalNote(note: LocalNote) {
  window.localStorage.setItem(key, JSON.stringify(note));
}

export function randomHex(bytes = 32) {
  const values = new Uint8Array(bytes);
  crypto.getRandomValues(values);
  return `0x${Array.from(values, (value) => value.toString(16).padStart(2, "0")).join("")}`;
}

export function hashFields(fields: Array<string | number | bigint>) {
  return keccak256(stringToBytes(fields.map(String).join("|")));
}

export function makeCommitment(ownerSecret: string, asset: string, balance: string, policyId: string, nonce: string) {
  return hashFields([ownerSecret, asset, balance, policyId, nonce]);
}

export function makeNullifier(ownerSecret: string, nonce: string) {
  return hashFields([ownerSecret, nonce]);
}
