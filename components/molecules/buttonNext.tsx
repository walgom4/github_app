import NextIcon from "@public/next.svg";
import { BtnWrapper } from "@components/atoms/btnWrapper";

interface BtnNextProps {
  onClick: () => void;
  disabled: boolean;
}

export default function BtnNext({ onClick, disabled }: BtnNextProps) {
  return (
    <BtnWrapper disabled={disabled} onClick={() => onClick()}>
      <NextIcon />
    </BtnWrapper>
  );
}
