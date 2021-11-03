import styled from "styled-components";
import { quantityFormater } from "@utils/utils";
import { ItemWrapper } from "../atoms/itemWrapper";

interface ItemRepositoryProps {
  nameWithOwner: string;
  description: string;
  details: string;
}

const ItemRepositoryWrapper = styled.div`
  & .contentRepository {
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
    & .nameWithOwner {
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 21px;
      color: #000000;
    }
    & .description {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 18px;
      color: #91929e;
    }
    & .details {
      padding-top: 15px;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;
      color: #91929e;
    }
  }
`;

export default function ItemRepository({
  nameWithOwner,
  description,
  details,
}: ItemRepositoryProps) {
  return (
    <ItemWrapper>
      <ItemRepositoryWrapper>
        <div className="contentRepository">
          <div className="nameWithOwner">{nameWithOwner}</div>
          <div className="description">{description}</div>
          <div className="details">{details}</div>
        </div>
      </ItemRepositoryWrapper>
    </ItemWrapper>
  );
}
