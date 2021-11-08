import PreviousIcon from "@public/previous.svg";
import { BtnWrapper } from "@components/atoms/btnWrapper";

interface BtnPreviousProps {
  onClick: () => void;
  disabled: boolean;
}

export default function BtnPrevious({ onClick, disabled }: BtnPreviousProps) {
  return (
    <BtnWrapper
      disabled={disabled}
      onClick={() => {
        onClick();
      }}
    >
      <PreviousIcon />
    </BtnWrapper>
  );
}
