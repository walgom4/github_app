import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";

const Home: NextPage = () => {
  const Login = dynamic(() => import("../components/organisms/login"), {
    loading: () => <p>loading....</p>,
    ssr: false,
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Github app</title>
        <meta name="description" content="Github app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Login />
      </main>
    </div>
  );
};

export default Home;
