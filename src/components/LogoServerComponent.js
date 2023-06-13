import "./logo.css";
import Image from "next/image";
import LDSDK from "@/lib/ldServer";

const serverContext = {
  kind: "server-context",
  key: "nextjs-app-component",
};

async function LogoServerComponent(props) {
  const { srcTrue, defaultSrc, flagKey } = props;
  let flagValue = await LDSDK.getVariation(flagKey, serverContext, false);
  const src = flagValue ? srcTrue : defaultSrc;

  return (
    <Image
      className={"App-logo"}
      alt='logo'
      src={src}
      width={180}
      height={140}
      priority
    />
  );
}

export default LogoServerComponent;
