import React from "react";
import styled from "styled-components";
import { cardShadow, hoverEffect } from "./common";

function Projects() {
  return (
    <LessonsCard>
      <Lesson>
        <Detail>
          <Title>Calculus Intro</Title>
          <SubTitle>Uploaded 2 days ago</SubTitle>
        </Detail>
      </Lesson>
      <Lesson>
        <Detail>
          <Title>Intro to React</Title>
          <SubTitle>Uploaded 5 days ago</SubTitle>
        </Detail>
      </Lesson>
      <Lesson>
        <Detail>
          <Title>Python Bootcamp</Title>
          <SubTitle>Uploaded 5 days ago</SubTitle>
        </Detail>
      </Lesson>
      <Lesson>
        <Detail>
          <Title>Intro to AI</Title>
          <SubTitle>Uploaded 6 days ago</SubTitle>
        </Detail>
      </Lesson>
      <AllLessons>See all lessons</AllLessons>
    </LessonsCard>
  );
}

const LessonsCard = styled.div`
  height: 100%;
  background-color: white;
  margin: 0;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 75%;
    margin-top: 1rem;
  }
`;

const Lesson = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
`;

const Detail = styled.div`
  margin-left: 1rem;
`;

const Title = styled.h3`
  font-weight: 500;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
  }
`;

const SubTitle = styled.h5`
  font-weight: 300;
`;

const AllLessons = styled.h5`
  text-align: end;
  color: #7EB10A;
  cursor: pointer;
`;

export default Projects;
