
import LogoGrid from "@/components/LogoGrid";
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

  console.log("asyncldprovider bootstrapValue", bootstrapValue);
  return (
    <LogoGrid

      title="asyncLDProvider example"
      bootstrapValue={bootstrapValue}
      serverSideKey={serverSideKey}

      clientSideKey={clientSideKey}
      defaultLogoProps={defaultLogoProps}
      showSuspense={false} // This one uses simple loading text
            />
  );
}
