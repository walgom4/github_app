import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { ButtonSearch } from "@components/atoms/buttonSearch";
import GitHubLogo from "@components/atoms/githubLogo";
import InputSearch from "@components/atoms/inputSearch";
import React, { Children, useEffect, useState } from "react";
import { RootState } from "@store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  Edge,
  fetcherData,
  fetcherUserInfo,
  fetcherUsers,
  IDataRepository,
  IDataUsers,
  SearchEdge,
} from "services/request";
import ProfileInfo from "@components/molecules/profileInfo";
import { setAvatar, setLogin, setName } from "@store/slice/loginSlice";
import {
  setCurrentPage,
  setIsRepository,
  setKeyword,
  setRepositorySearch,
  setUserSearch,
} from "@store/slice/searchSlice";
import { useRouter } from "next/router";
import styled from "styled-components";
import UsersRepositories from "@components/atoms/usersRepositories";
import ResultsQuantity from "@components/atoms/resultsQuantity";
import ItemUser from "@components/molecules/itemUser";
import ItemRepository from "@components/molecules/itemRepository";
import { detailsFormat } from "@utils/utils";
import Paginator from "@components/organisms/paginator";

const SearchBarWrapper = styled.div`
  position: relative;
  & .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 190px;
  }
  & .contentBar {
    background-color: #ffffff;
    width: 100%;
    height: 80px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    padding-left: 130px;
    padding-right: 130px;
    & .svgLogo {
      padding-top: 5px;
      padding-bottom: 5px;
    }
  }
`;

const SearchContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  & .searchContent {
    display: flex;
    padding-top: 30px;
    margin-top: 80px;
    width: 980px;
    & .col1 {
    }
    & .col2 {
      display: flex;
      flex-direction: column;
      padding-left: 20px;
    }
  }
`;

const Search: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { token, avatar, bio, login, name } = useSelector(
    (state: RootState) => state.login
  );
  const {
    keyword,
    isRepository,
    repositorySearch,
    userSearch,
  }: {
    keyword: string;
    isRepository: boolean;
    repositorySearch: IDataRepository | any;
    userSearch: IDataUsers | any;
  } = useSelector((state: RootState) => state.search);

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

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, [keyword, repositorySearch, userSearch]);

  const [searchValue, setSearchValue] = useState("");
  // searching users and repositories by keyword
  const searchData = (search: string) => {
    dispatch(setKeyword(search));
    dispatch(setCurrentPage(1));
    fetcherData(token, search).then((response) => {
      dispatch(setRepositorySearch(response));
    });
    fetcherUsers(token, search).then((response) => {
      dispatch(setUserSearch(response));
    });
  };
  const handleClick = () => {
    searchData(searchValue);
  };
  const handleInputClick = () => {
    searchData(searchValue);
  };
  const handleChange = (value: string) => {
    setSearchValue(value);
  };

  const isSearchBar = () => {
    return repositorySearch !== null;
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Github app</title>
        <meta name="description" content="Github app search" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SearchBarWrapper>
          <div className={`${isSearchBar() ? "contentBar" : "content"}`}>
            <GitHubLogo classStyle="svgLogo" />
            <InputSearch
              inputOnChange={(value: string) => handleChange(value)}
              inputOnClick={() => {
                handleInputClick();
              }}
            />
            {!isSearchBar() && (
              <ButtonSearch
                key="btnSearch"
                type="button"
                onClick={() => handleClick()}
              >
                Search Github
              </ButtonSearch>
            )}
            {avatar && login && isSearchBar() && (
              <ProfileInfo srcPhoto={avatar} name={name || login} />
            )}
          </div>
        </SearchBarWrapper>
        <SearchContentWrapper>
          <div className="searchContent">
            {repositorySearch !== null &&
              repositorySearch.search.repositoryCount && (
                <UsersRepositories
                  users={userSearch.search.userCount}
                  repositories={repositorySearch.search.repositoryCount}
                  isRepository={isRepository}
                  changeSelection={(selected) => {
                    dispatch(setIsRepository(selected));
                    dispatch(setCurrentPage(1));
                  }}
                />
              )}
            <div className="col2">
              {repositorySearch !== null &&
                repositorySearch.search.repositoryCount && (
                  <ResultsQuantity
                    quantity={repositorySearch.search.repositoryCount}
                    isRepository={true}
                  />
                )}
              {isRepository &&
                repositorySearch &&
                repositorySearch.search.edges.map(
                  (element: SearchEdge) =>
                    element.node?.id && (
                      <ItemRepository
                        key={element.node.id}
                        nameWithOwner={element.node.nameWithOwner}
                        description={element.node.description}
                        details={detailsFormat(
                          `${element.node.stargazerCount}`,
                          `${element.node.languages?.edges[0]?.node?.name}`,
                          `${element.node.licenseInfo?.name}`,
                          `${element.node.updatedAt}`
                        )}
                      />
                    )
                )}
              {isRepository === false &&
                userSearch &&
                userSearch.search.edges.map(
                  (element: Edge) =>
                    element.node?.id && (
                      <ItemUser
                        key={element.node.id}
                        login={element.node.login}
                        name={element.node.name}
                        bio={element.node.bio}
                      />
                    )
                )}
              {(repositorySearch || userSearch) && <Paginator />}
              {/* <ItemUser login="walgom" name="Walter" bio="software developer" />
              <ItemUser login="walgom" name="Walter" bio="software developer" />
              <ItemUser login="walgom" name="Walter" bio="software developer" /> */}
            </div>
          </div>
        </SearchContentWrapper>
      </main>
    </div>
  );
};

export default Search;
