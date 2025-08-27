"use client";

import dynamic from "next/dynamic";

const LDAsyncPovider = dynamic(
  () => import("@/components/AsyncWithLDProvider"),
  {
    ssr: false,
    loading: () => <div>Loading LaunchDarkly...</div>
  }
);

export default function ClientAsyncLDProvider({ children, clientSideID }) {
  return (
    <LDAsyncPovider clientSideID={clientSideID}>
      {children}
    </LDAsyncPovider>
  );
}