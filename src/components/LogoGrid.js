import styles from "../app/page.module.css";
import LogoClientComponent from "@/components/LogoClientComponent";
import LogoHybridComponent from "@/components/LogoHybridComponent";
import LogoServerComponent from "@/components/LogoServerComponent";
import React, { Suspense } from "react";

const Loading = () => <h1 className={styles.center}>Loading...</h1>;

export default function LogoGrid({ 
  title, 
  bootstrapValue, 
  serverSideKey, 
  clientSideKey, 
  defaultLogoProps,
  showSuspense = true,
  children 
}) {
  const ClientCard = (
    <div className={styles.card}>
      <LogoClientComponent
        flagKey={clientSideKey}
        {...defaultLogoProps}
      />
      <div className={styles.description}>
        <p>Client Component</p>
      </div>
    </div>
  );

  const HybridCard = (
    <div className={styles.card}>
      <LogoHybridComponent
        defaultValue={bootstrapValue}
        flagKey={clientSideKey}
        {...defaultLogoProps}
      />
      <div className={styles.description}>
        <p>Hybrid Component</p>
        <p>Client Component w/ Server Bootstraped</p>
      </div>
    </div>
  );

  const ServerCard = (
    <div className={styles.card}>
      <LogoServerComponent
        flagKey={serverSideKey}
        {...defaultLogoProps}
      />
      <div className={styles.description}>
        <p>Server component</p>
      </div>
    </div>
  );

  const GridContent = children ? (
    <>
      {React.cloneElement(children, {}, [
        showSuspense ? (
          <Suspense key="client" fallback={<Loading />}>
            {ClientCard}
          </Suspense>
        ) : ClientCard,
        showSuspense ? (
          <Suspense key="hybrid" fallback={<Loading />}>
            {HybridCard}
          </Suspense>
        ) : HybridCard
      ])}
      {ServerCard}
    </>
  ) : (
    <>
      {showSuspense ? (
        <Suspense fallback={"Loading..."}>
          {ClientCard}
        </Suspense>
      ) : ClientCard}
      {showSuspense ? (
        <Suspense fallback={"Loading..."}>
          {HybridCard}
        </Suspense>
      ) : HybridCard}
      {ServerCard}
    </>
  );

  return (
    <>
      <h1 className={styles.center}>
        App Router: Server Rendering + Client hydration
      </h1>
      <h2 className={styles.center}>{title}</h2>
      <main className={styles.main}>
        <div className={styles.grid}>
          {GridContent}
        </div>
      </main>
    </>
  );
}