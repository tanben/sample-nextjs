import dynamic from "next/dynamic";
import styles from "../../page.module.css";
import Loading from "./loading";
// const Loading = () => <h1 className={styles.center}>Loading...</h1>;

const AsyncLDProvider = dynamic(
  () => import("@/components/AsyncWithLDProvider"),
  {
    loading: Loading,
    ssr: false,
  }
);
export default function layout({ children }) {
  return (
    <AsyncLDProvider clientSideID={process.env.CLIENT_SIDE_ID}>
      {children}
    </AsyncLDProvider>
  );
}
