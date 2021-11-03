import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { RootState } from "@store/store";
import { useDispatch, useSelector } from "react-redux";
import UsersRepositories from "@components/atoms/usersRepositories";
import ResultsQuantity from "@components/atoms/resultsQuantity";
import ItemUser from "@components/molecules/itemUser";
import { IDataRepository } from "services/request";

const Search: NextPage = () => {
  const dispatch = useDispatch();
  const {
    keyword,
    repositorySearch,
  }: { keyword: string; repositorySearch: IDataRepository | any } = useSelector(
    (state: RootState) => state.search
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Github app</title>
        <meta name="description" content="Github app results" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>keyword:{keyword}</div>
        {repositorySearch !== null &&
          repositorySearch.search.repositoryCount && (
            <UsersRepositories
              users={100}
              repositories={repositorySearch.search.repositoryCount}
              isRepository={true}
            />
          )}
        {repositorySearch !== null &&
          repositorySearch.search.repositoryCount && (
            <ResultsQuantity
              quantity={repositorySearch.search.repositoryCount}
              isRepository={true}
            />
          )}
        <ItemUser login="walgom" name="Walter" bio="software developer" />
      </main>
    </div>
  );
};

export default Search;
