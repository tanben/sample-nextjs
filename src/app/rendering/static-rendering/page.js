import styles from "../../page.module.css";
import WithLDProviderContent from "@/components/WithLDProvider";
import LogoClientComponent from "@/components/LogoClientComponent";
import LogoHybridComponent from "@/components/LogoHybridComponent";
import LogoServerComponent from "@/components/LogoServerComponent";
import LDSDK from "@/lib/ldServer";

import React, { Suspense } from "react";
const defaultContext = {
  kind: "server-context",
  key: "nextjs-app-component",
};

export default async function page() {
  const bootstrapValue = await LDSDK.getVariation(
    "simple-toggle",
    defaultContext,
    false
  );

  const defaultLogoProps = {
    defaultSrc: "/next.svg",
    srcTrue: "/launchdarkly.svg",
  };

  return (
    <>
      <h1 className={styles.center}>App Router: Static Rendering </h1>

      <main className={styles.main}>
        <div className={styles.grid}>
          <WithLDProviderContent id={process.env.CLIENT_SIDE_ID}>
            <Suspense fallback={"Loading..."}>
              <div className={styles.card}>
                <LogoClientComponent
                  flagKey='simpleToggle'
                  {...defaultLogoProps}
                />

                <div className={styles.description}>
                  <p>Client Component</p>
                </div>
              </div>

              <div className={styles.card}>
                <LogoHybridComponent
                  defaultValue={bootstrapValue}
                  flagKey='simpleToggle'
                  {...defaultLogoProps}
                />

                <div className={styles.description}>
                  <p>Hybrid Component</p>
                  <p>Bootstraped Values</p>
                </div>
              </div>
            </Suspense>
          </WithLDProviderContent>
          <div className={styles.card}>
            <LogoServerComponent
              flagKey='simple-toggle'
              {...defaultLogoProps}
            />
            <div className={styles.description}>
              <p>Server component</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
