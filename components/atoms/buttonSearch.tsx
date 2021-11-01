import styled from "styled-components";

interface IProps_Button extends React.HTMLAttributes<HTMLButtonElement> {}
export const ButtonSearch = styled.button<IProps_Button>`
  width: auto;
  height: 40px;
  background: #5c5c5c;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  padding: 10px 34px;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
  }
`;
