"use client";
import { withLDProvider } from "launchdarkly-react-client-sdk";

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
  options: {},
};

function WithLDProviderContent({ id, children, context = defaultContext }) {
  config.clientSideID = id;
  config.context = context;
  const Provider = withLDProvider(config)(Content);
  return <Provider>{children}</Provider>;
}

export default WithLDProviderContent;
