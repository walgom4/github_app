import styled from "styled-components";
import { quantityFormater } from "@utils/utils";

interface UsersRepositoriesProps {
  repositories: number;
  users: number;
  isRepository: boolean;
  changeSelection: (selected: boolean) => void;
}

const UserRepositoriesWrapper = styled.div`
  width: 280px;
  height: 140px;
  padding: 30px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  & .item {
    display: flex;
    justify-content: space-between;
    width: 220px;
    height: 40px;
    padding: 10px;
    cursor: pointer;
  }
  & .selected {
    background-color: #f7f7f8;
  }
  & .quantity {
    background-color: #dcdcdf;
    border-radius: 10px;
    padding: 2px 6px;
  }
`;

export default function UsersRepositories({
  repositories,
  users,
  isRepository,
  changeSelection,
}: UsersRepositoriesProps) {
  return (
    <>
      <UserRepositoriesWrapper>
        <div
          className={`item ${isRepository === true ? "selected" : ""}`}
          onClick={() => {
            changeSelection(true);
          }}
        >
          <div className="description">Repositories</div>
          <div className="quantity">{quantityFormater(repositories)}</div>
        </div>
        <div
          className={`item ${isRepository === false ? "selected" : ""}`}
          onClick={() => {
            changeSelection(false);
          }}
        >
          <div className="description">Users</div>
          <div className="quantity">{quantityFormater(users)}</div>
        </div>
      </UserRepositoriesWrapper>
    </>
  );
}
