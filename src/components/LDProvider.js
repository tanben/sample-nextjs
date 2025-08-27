"use client";

import { LDProvider, basicLogger } from "launchdarkly-react-client-sdk";

export default function LDProviderWrapper(props) {
  const { children, ...providerConfig } = props;

  providerConfig.options.logger = basicLogger({
    destination: (line) => console.log(line),
    level: "debug",
  });
  return <LDProvider {...providerConfig}>{children}</LDProvider>;
}
