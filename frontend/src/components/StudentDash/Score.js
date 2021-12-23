import React from "react";
import styled from "styled-components";
import { IoStatsChart } from "react-icons/io5";
import { hoverEffect } from "./common";

function Score() {
  return (
    <ScoreCard>
      <CardContent>
        <Chart>
          <IoStatsChart />
        </Chart>
        <ScoreText>Score</ScoreText>
        <ScoreNumber>335</ScoreNumber>
        <ScoreCompare>+ 18% since last month</ScoreCompare>
      </CardContent>
    </ScoreCard>
  );
}

const ScoreCard = styled.div`
  height: 100%;
  width: 14rem;
  background-color: #7EB10A;
  padding: 1rem;
  border-radius: 1rem;
  color: white;
  transition: 0.4s ease-in-out;
  box-shadow: ${hoverEffect};

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
  }
`;

const CardContent = styled.div`
  margin: 1rem;
`;

const Chart = styled.div`
  display: flex;
  justify-content: center;
  svg {
    height: 4rem;
    width: 4rem;
  }
`;

const ScoreText = styled.h3`
  text-align: center;
  font-weight: normal;
  padding: 0.4rem 0;
`;

const ScoreNumber = styled.h2`
  text-align: center;
`;

const ScoreCompare = styled.h5`
  text-align: center;
  font-weight: normal;
  margin-top: 10px;
  padding: 0.5rem;
  border-radius: 1.8rem;
  background-color: #7EB10A;
`;

export default Score;
