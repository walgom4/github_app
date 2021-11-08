import styled from "styled-components";
interface IBtnNextWrapper {
  disabled: boolean;
}

export const BtnWrapper = styled.div<IBtnNextWrapper>`
  display: flex;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: ${(props) => (props.disabled ? "#f3f3f3" : "#000000")};
  justify-content: center;
  align-content: center;
  cursor: pointer;
  & svg path {
    stroke: ${(props) => (props.disabled ? "#b0b7c3" : "#ffffff")};
  }
`;
