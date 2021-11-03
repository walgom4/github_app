import styled from "styled-components";
import { quantityFormater } from "@utils/utils";
import { ItemWrapper } from "../atoms/itemWrapper";

interface ItemUserProps {
  login: string;
  name: string;
  bio: string;
}

const ItemUserWrapper = styled.div`
  & .login {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    color: #000000;
  }
  & .contentItem {
    display: flex;
    align-items: flex-end;
    margin-bottom: 5px;
    & .name {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 18px;
      color: #91929e;
      margin-left: 10px;
    }
  }
  & .bio {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #91929e;
  }
`;

export default function ItemUser({ login, name, bio }: ItemUserProps) {
  return (
    <ItemWrapper>
      <ItemUserWrapper>
        <div className="contentItem">
          <div className="login">{login}</div>
          <div className="name">{name}</div>
        </div>
        <div className="bio">{bio}</div>
      </ItemUserWrapper>
    </ItemWrapper>
  );
}
