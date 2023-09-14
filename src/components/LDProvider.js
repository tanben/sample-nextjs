"use client";

import { LDProvider } from "launchdarkly-react-client-sdk";

export default function LDProviderWrapper(props) {
  const { children, ...providerConfig } = props;

  return <LDProvider {...providerConfig}>{children}</LDProvider>;
}
