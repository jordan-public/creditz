import { DatabaseSync, type SQLInputValue } from "node:sqlite";
import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";

type Row = Record<string, SQLInputValue>;

const dbPath = resolve(process.cwd(), process.env.DATABASE_URL?.replace("file:", "") ?? ".data/creditz.sqlite");
mkdirSync(dirname(dbPath), { recursive: true });

const db = new DatabaseSync(dbPath);
db.exec("pragma journal_mode = WAL");
db.exec("pragma foreign_keys = ON");

db.exec(`
  create table if not exists users(
    id text primary key,
    world_nullifier_hash text unique not null,
    deposit_public_key text,
    created_at text not null
  );

  create table if not exists commitments(
    commitment text primary key,
    user_id text,
    asset text not null,
    policy_id text not null,
    created_at text not null,
    foreign key(user_id) references users(id)
  );

  create table if not exists spent_nullifiers(
    nullifier text primary key,
    invoice_nonce text,
    spent_at text not null
  );

  create table if not exists merchants(
    merchant_id text primary key,
    merchant_address text not null,
    policy_id text not null,
    display_name text not null
  );

  create table if not exists invoices(
    invoice_nonce text primary key,
    merchant_id text not null,
    amount text not null,
    asset text not null,
    policy_id text not null,
    expires_at integer not null,
    paid_at text,
    foreign key(merchant_id) references merchants(merchant_id)
  );
`);

db.prepare(
  `insert or ignore into merchants(merchant_id, merchant_address, policy_id, display_name)
   values (@merchant_id, @merchant_address, @policy_id, @display_name)`
).run({
  merchant_id: "campus-cafe-1",
  merchant_address: "0x00000000000000000000000000000000000cafe1",
  policy_id: "campus-cafeteria-v1",
  display_name: "Campus Cafe"
});

export function all<T extends Row>(sql: string, params?: Row): T[] {
  const statement = db.prepare(sql);
  statement.setAllowUnknownNamedParameters(true);
  return statement.all(params ?? {}) as T[];
}

export function get<T extends Row>(sql: string, params?: Row): T | undefined {
  const statement = db.prepare(sql);
  statement.setAllowUnknownNamedParameters(true);
  return statement.get(params ?? {}) as T | undefined;
}

export function run(sql: string, params?: Row) {
  const statement = db.prepare(sql);
  statement.setAllowUnknownNamedParameters(true);
  return statement.run(params ?? {});
}

export function transaction<T>(fn: () => T): T {
  db.exec("begin immediate");
  try {
    const result = fn();
    db.exec("commit");
    return result;
  } catch (error) {
    db.exec("rollback");
    throw error;
  }
}
