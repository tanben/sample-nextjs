// const Loading = () => <h1 className={styles.center}>Loading...</h1>;



import ClientAsyncLDProvider from "@/components/ClientAsyncLDProvider";

export default function Layout({ children }) {
  return (
    <ClientAsyncLDProvider clientSideID={process.env.CLIENT_SIDE_ID}>
      {children}
    </ClientAsyncLDProvider>
  );
}
