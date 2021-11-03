import styled from "styled-components";
import { numberWithCommas } from "@utils/utils";

interface ResultsQuantityProps {
  quantity: number;
  isRepository: boolean;
}

const ResultsWrapper = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
  margin-bottom: 25px;
`;

export default function ResultsQuantity({
  quantity,
  isRepository,
}: ResultsQuantityProps) {
  return (
    <>
      <ResultsWrapper>
        {isRepository === true
          ? `${numberWithCommas(quantity)} repository results`
          : `${numberWithCommas(quantity)} users`}
      </ResultsWrapper>
    </>
  );
}
