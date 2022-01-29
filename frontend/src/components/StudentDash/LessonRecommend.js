import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
import { cardShadow, hoverEffect } from "./common";

function LessonRecommend() {
  return (
    <RecommendLesson>
      <CardContent>
        <Badge content="Add recommended Course here." />
      </CardContent>
    </RecommendLesson>
  );
}

const RecommendLesson = styled.div`
  border-radius: 1rem;
  height: 100%;
  padding: 1rem;
  background-color: white;
  width: 27.5vw;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 80%;
    margin: 2rem 0;
  }
`;

const CardContent = styled.div`
  margin: 0.8rem;
`;

export default LessonRecommend;
