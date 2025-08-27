import LogoGrid from "@/components/LogoGrid";
import LDProvider from "@/components/LDProvider";
import LDSDK from "@/lib/ldServer";


const defaultContext = {
  kind: "server-context",
  key: "nextjs-app-component",
};

const config = {
  clientSideID: "",
  context: {},
  timeout: 5,
  options: {
    sendEvents: true,
    diagnosticOptOut: false,
    fetchGoals: false,
  },
  reactOptions: {
    useCamelCaseFlagKeys: true,
  },
};
const context = {
    kind: "user",
    key: "user-key-123abc",
    name: "Sandy Smith",
 
};


export default async function page() {
  const serverSideKey = "simple-toggle";
  const clientSideKey = "simpleToggle";
  const bootstrapValue = await LDSDK.getVariation(
    serverSideKey,
    defaultContext,
    false
  );
  config.context = context;
  config.clientSideID = process.env.CLIENT_SIDE_ID;
  const defaultLogoProps = {
    defaultSrc: "/next.svg",
    srcTrue: "/launchdarkly.svg",
  };

  console.log("ldprovider bootstrapValue", bootstrapValue);
  return (
    <LogoGrid
      title="LDProvider example"

      bootstrapValue={bootstrapValue}
      serverSideKey={serverSideKey}
      clientSideKey={clientSideKey}
      defaultLogoProps={defaultLogoProps}
      showSuspense={true}
    >

      <LDProvider {...config} />
    </LogoGrid>
  );
}
