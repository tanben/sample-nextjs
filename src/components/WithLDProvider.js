"use client";
import { withLDProvider, basicLogger } from "launchdarkly-react-client-sdk";

function Content(props) {
  return <>{props.children}</>;
}

const defaultContext = {
  kind: "user",
  key: "user-key-123abc",
  name: "Sandy Smith",
};

const config = {
  clientSideID: "",
  context: {},
  timeout: 5,
  options: {
    sendEvents: true,
    diagnosticOptOut: false,
    fetchGoals: false,
    logger: basicLogger({
      destination: (line) => console.log(line),
      level: "debug",
    }),
  },
  reactOptions: {
    useCamelCaseFlagKeys: true,
  },
};

function WithLDProviderContent({ id, children, context = defaultContext }) {
  config.clientSideID = id;
  config.context = context;
  console.log("WithLDProviderContent config", config);
  const Provider = withLDProvider(config)(Content);
  return <Provider>{children}</Provider>;
}

export default WithLDProviderContent;
