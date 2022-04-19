import React from 'react'
import styled from 'styled-components';
import Sidebar from '../components/StudentDash/Sidebar';
import Commentsection from "../components/StudentDash/commentsection"
import MainContent from '../components/StudentDash/MainContent';

const Container = styled.div`
  display: flex;
  height: 100vh;
  background: #7EB10A;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

const Container2 = styled.div`
  display: flex;
  height: 200vh;
  background: #7EB10A;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: center;
  }
`;

const Container3 = styled.div`
  display: flex;
  height: 100vh;
  background: #7EB10A;
  color: white;
  align-items: center;
  margin: 0.8rem 0 0.5rem 0;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: center;
  }
`;

const StudentDashPage = () => {
    return (
      <div>
        <Container>
            <Sidebar />
            <MainContent />   
            <Container3>
                <Commentsection />
            </Container3>
        </Container>
        <Container2>
           
        </Container2>
      </div>  
    )
}

export default StudentDashPage;
