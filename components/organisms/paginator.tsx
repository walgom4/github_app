import { PaginatorWrapper } from "@components/atoms/paginatorWrapper";
import BtnNext from "@components/molecules/buttonNext";
import BtnPrevious from "@components/molecules/buttonPrevious";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@store/store";
import {
  setRepositorySearch,
  setUserSearch,
  setCurrentPage,
} from "@store/slice/searchSlice";
import {
  fetcherData,
  fetcherUsers,
  IDataRepository,
  IDataUsers,
} from "services/request";
import { getCursor } from "@utils/utils";

export default function Paginator() {
  const {
    keyword,
    isRepository,
    repositorySearch,
    userSearch,
    currentPage,
    first,
  }: {
    keyword: string;
    isRepository: boolean;
    repositorySearch: IDataRepository | any;
    userSearch: IDataUsers | any;
    currentPage: number;
    first: number;
  } = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();

  const { token } = useSelector((state: RootState) => state.login);

  // function to paginate
  const searchDataNext = () => {
    if (isRepository && repositorySearch.search.pageInfo.hasNextPage) {
      fetcherData(token, keyword, getCursor((currentPage + 1) * first)).then(
        (response) => {
          dispatch(setCurrentPage(currentPage + 1));
          dispatch(setRepositorySearch(response));
        }
      );
    } else if (
      isRepository === false &&
      userSearch.search.pageInfo.hasNextPage
    ) {
      fetcherUsers(token, keyword, getCursor((currentPage + 1) * first)).then(
        (response) => {
          dispatch(setCurrentPage(currentPage + 1));
          dispatch(setUserSearch(response));
        }
      );
    }
  };

  const searchDataPrevious = () => {
    if (isRepository) {
      fetcherData(token, keyword, getCursor((currentPage - 1) * first)).then(
        (response) => {
          dispatch(setCurrentPage(currentPage - 1));
          dispatch(setRepositorySearch(response));
        }
      );
    } else {
      fetcherUsers(token, keyword, getCursor((currentPage - 1) * first)).then(
        (response) => {
          dispatch(setCurrentPage(currentPage - 1));
          dispatch(setUserSearch(response));
        }
      );
    }
  };

  return (
    <PaginatorWrapper>
      <div className="firstElement">
        <BtnPrevious
          onClick={() => {
            console.log("prev");
            if (currentPage > 1) {
              searchDataPrevious();
            }
          }}
          disabled={currentPage === 1}
        />
      </div>
      <div>{currentPage}</div>
      <div className="lastElement">
        <BtnNext
          onClick={() => {
            console.log("next");
            searchDataNext();
          }}
          disabled={
            isRepository &&
            repositorySearch &&
            repositorySearch.search.pageInfo.hasNextPage
              ? false
              : isRepository === false &&
                userSearch &&
                userSearch.search.pageInfo.hasNextPage
              ? false
              : true
          }
        />
      </div>
    </PaginatorWrapper>
  );
}
