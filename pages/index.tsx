import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import LoginGithub from "react-login-github";
import dynamic from "next/dynamic";
import type { LoginGithub as ComponentType } from "react-login-github";

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
        <h1 className={styles.title}>Login</h1>
        <Login />
      </main>

      <footer className={styles.footer}>footer</footer>
    </div>
  );
};

export default Home;
