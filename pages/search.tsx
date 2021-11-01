import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { ButtonSearch } from "@components/atoms/buttonSearch";
import GitHubLogo from "@components/atoms/githubLogo";
import InputSearch from "@components/atoms/inputSearch";
import Logo from "@public/logo.svg";
import { useState } from "react";

const Search: NextPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleClick = () => {
    console.log("click search", searchValue);
  };
  const handleInputClick = () => {
    console.log("click input search", searchValue);
  };
  const handleChange = (value: string) => {
    setSearchValue(value);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Github app</title>
        <meta name="description" content="Github app search" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <GitHubLogo />
        <InputSearch
          inputOnChange={(value: string) => handleChange(value)}
          inputOnClick={() => {
            handleInputClick();
          }}
        />
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
