import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { ButtonSearch } from "@components/atoms/buttonSearch";
import GitHubLogo from "@components/atoms/githubLogo";
import InputSearch from "@components/atoms/inputSearch";
import { useEffect, useState } from "react";
import { RootState } from "@store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetcherUserInfo } from "services/request";
import ProfileInfo from "@components/molecules/profileInfo";
import { setAvatar, setBio, setLogin, setName } from "@store/slice/loginSlice";

const Search: NextPage = () => {
  const dispatch = useDispatch();
  const { token, avatar, bio, login, name } = useSelector(
    (state: RootState) => state.login
  );

  useEffect(() => {
    if (token !== "") {
      fetcherUserInfo(token).then((response) => {
        if (response.viewer.login) dispatch(setLogin(response.viewer.login));
        if (response.viewer.name) dispatch(setName(response.viewer.name));
        if (response.viewer.avatarUrl)
          dispatch(setAvatar(response.viewer.avatarUrl));
      });
    }
  }, [dispatch, token]);

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
        {avatar && login && (
          <ProfileInfo srcPhoto={avatar} name={name || login} />
        )}
      </main>
    </div>
  );
};

export default Search;
