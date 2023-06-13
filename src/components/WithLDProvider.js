"use client";
import { withLDProvider } from "launchdarkly-react-client-sdk";

function Content(props) {
  return <>{props.children}</>;
}

const defaultContext = {
  clientSideID: "",
  context: {
    kind: "user",
    anonymous: true,
  },
  options: {},
};

function WithLDProviderContent({ id, children, context = defaultContext }) {
  context.clientSideID = id;
  const Provider = withLDProvider(context)(Content);
  return <Provider>{children}</Provider>;
}

export default WithLDProviderContent;
