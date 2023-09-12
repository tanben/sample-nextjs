"use client";

import { use } from "react";
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";

const defaultContext = {
  kind: "user",
  key: "user-key-123abc",
  name: "Sandy Smith",
};

export default function AsyncLDProvider({
  children,
  context = defaultContext,
  clientSideID,
}) {
  const LDDynaProvider = use(
    asyncWithLDProvider({
      clientSideID,
      context,
    })
  );
  return <LDDynaProvider>{children}</LDDynaProvider>;
}
