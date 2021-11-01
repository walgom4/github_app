import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import { ButtonSearch } from "../components/atoms/buttonSearch";

const Search: NextPage = () => {
  const handleClick = () => {
    console.log("click search");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Github app</title>
        <meta name="description" content="Github app search" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>logo git</h1>
        <h1>input search</h1>
        <ButtonSearch
          key="btnSearch"
          type="button"
          onClick={() => handleClick()}
        >
          Search Github
        </ButtonSearch>
      </main>
    </div>
  );
};

export default Search;
