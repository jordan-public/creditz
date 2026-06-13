"use client";

import { IDKitWidget, VerificationLevel, type ISuccessResult } from "@worldcoin/idkit";
import { BadgeCheck } from "lucide-react";

type Props = {
  action: string;
  signal?: string;
  label: string;
  onVerified: (proof: ISuccessResult) => Promise<void> | void;
};

export function WorldIdButton({ action, signal = "", label, onVerified }: Props) {
  const appId = process.env.NEXT_PUBLIC_WORLD_APP_ID;
  const demoMode = process.env.NEXT_PUBLIC_DEMO_MODE !== "false";

  if (!appId && demoMode) {
    return (
      <button
        className="primary"
        type="button"
        onClick={() =>
          onVerified({
            merkle_root: "0x0",
            nullifier_hash: `demo-${action}-${crypto.randomUUID()}`,
            proof: "0x0",
            verification_level: "device"
          } as ISuccessResult)
        }
      >
        <BadgeCheck size={18} /> {label}
      </button>
    );
  }

  if (!appId) {
    return (
      <button disabled type="button">
        Missing World App ID
      </button>
    );
  }

  return (
    <IDKitWidget
      app_id={appId as `app_${string}`}
      action={action}
      signal={signal}
      verification_level={VerificationLevel.Device}
      onSuccess={onVerified}
    >
      {({ open }) => (
        <button className="primary" type="button" onClick={open}>
          <BadgeCheck size={18} /> {label}
        </button>
      )}
    </IDKitWidget>
  );
}
