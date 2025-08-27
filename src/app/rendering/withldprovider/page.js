import LogoGrid from "@/components/LogoGrid";

import WithLDProviderContent from "@/components/WithLDProvider";
import LDSDK from "@/lib/ldServer";

const defaultContext = {
  kind: "server-context",
  key: "nextjs-app-component",
};


export default async function page() {
  const serverSideKey = "simple-toggle";
  const clientSideKey = "simpleToggle";
  const bootstrapValue = await LDSDK.getVariation(
    serverSideKey,
    defaultContext,
    false
  );

  const defaultLogoProps = {
    defaultSrc: "/next.svg",
    srcTrue: "/launchdarkly.svg",
  };
  console.log("withldprovider process.env.CLIENT_SIDE_ID", process.env.CLIENT_SIDE_ID);
  console.log("withldprovider bootstrapValue", bootstrapValue);

  return (

    <LogoGrid
      title="withLDProvider example"
      bootstrapValue={bootstrapValue}
      serverSideKey={serverSideKey}
      clientSideKey={clientSideKey}
      defaultLogoProps={defaultLogoProps}

      showSuspense={true}
    >
      <WithLDProviderContent id={process.env.CLIENT_SIDE_ID} />
    </LogoGrid>
  );
}
