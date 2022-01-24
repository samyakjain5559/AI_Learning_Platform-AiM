import React from "react";
import styled from "styled-components";
import { cardShadow, hoverEffect } from "./common";

function Projects() {
  return (
    <CoursesCard>
      <Course>
        <Detail>
          <Title>Course Name</Title>
          <SubTitle>Uploaded 2 days ago</SubTitle>
        </Detail>
      </Course>
      <Course>
        <Detail>
          <Title>Course Name</Title>
          <SubTitle>Uploaded 2 days ago</SubTitle>
        </Detail>
      </Course>
      <Course>
        <Detail>
          <Title>Course Name</Title>
          <SubTitle>Uploaded 2 days ago</SubTitle>
        </Detail>
      </Course>
      <Course>
        <Detail>
          <Title>Course Name</Title>
          <SubTitle>Uploaded 2 days ago</SubTitle>
        </Detail>
      </Course>
      <AllLessons>See all lessons</AllLessons>
    </CoursesCard>
  );
}

const CoursesCard = styled.div`
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

const Course = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  &:hover {
    background-color: rgba(0, 170, 0, 0.2);
  }
`;

const Detail = styled.div`
  margin-left: 1rem;
`;

const Title = styled.h4`
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
  color: #7eb10a;
  cursor: pointer;
`;

export default Projects;
