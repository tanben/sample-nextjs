"use client";

import "./logo.css";
import Image from "next/image";
import { useFlags } from "launchdarkly-react-client-sdk";

function LogoHybridComponent(props) {
  const { srcTrue, defaultSrc, flagKey, defaultValue } = props;
  const flags = useFlags();

  // check if we are running on the server or the browser
  const flagValue = flags[flagKey] == undefined ? defaultValue : flags[flagKey];
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

export default LogoHybridComponent;
