import styled from "styled-components";
import SearchIcon from "@public/assets/search.svg";

type InputSearchProps = {
  inputOnChange: (value: string) => void;
  inputOnClick: () => void;
};

interface IProps_Input extends React.HTMLAttributes<HTMLDivElement> {}
export const InputWrapper = styled.div<IProps_Input>`
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
  & input[type="text"] {
    background: #ffffff;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 100px;
    width: 580px;
    height: 50px;
    padding: 0 45px 0 15px;
  }
  & svg {
    position: absolute;
    top: 16px;
    right: 16px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export default function InputSearch({
  inputOnChange,
  inputOnClick,
}: InputSearchProps) {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    inputOnChange(e.currentTarget.value);
  };
  const handleClick = () => {
    inputOnClick();
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      console.log("click down", e.key);
      handleClick();
    }
  };
  return (
    <InputWrapper>
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => handleKeyDown(e)}
      ></input>
      <SearchIcon onClick={() => handleClick()} />
    </InputWrapper>
  );
}
