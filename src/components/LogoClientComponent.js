"use client";

import "./logo.css";
import Image from "next/image";
import { useFlags } from "launchdarkly-react-client-sdk";

function LogoClientComponent(props) {
  const { srcTrue, defaultSrc, flagKey } = props;
  const flags = useFlags();
  const flagValue = flags[flagKey] ? flags[flagKey] : false;
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

export default LogoClientComponent;
