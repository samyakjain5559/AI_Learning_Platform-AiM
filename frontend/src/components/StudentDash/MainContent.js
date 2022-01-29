import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Lessons from "./Lessons";
import LessonRecommend from "./LessonRecommend";
import Score from "./Score";

function MainContent() {
  return (
    <Container>
      <Navbar />
      <SubContainer>
        <RowContainer>
          <ScoreContainer>
            <Score />
            <SuggestContainer>
              <LessonRecommend />
            </SuggestContainer>
          </ScoreContainer>
        </RowContainer>
        <RowContainer>
          <RecentContainer>
            <TitleText>Recent Courses</TitleText>
            <Lessons />
          </RecentContainer>
        </RowContainer>
      </SubContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  background-color: #7EB10A;
  margin: 1rem 8rem 1rem 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;

const SubContainer = styled.div`
  margin: 0.5rem 0;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
  }
`;
const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40%;
  gap: 2rem;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
`;
const ScoreContainer = styled.div`
  display: flex;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
`;

const RecentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    justify-content: center;
    align-items: center;
  }
`;

const TitleText = styled.h3`
  color: #fff;
  height: 20%;
`;

const SuggestContainer = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export default MainContent;
