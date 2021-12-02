import React from 'react'
import styled from 'styled-components';
import Sidebar from '../components/StudentDash/Sidebar';
import MainContent from '../components/StudentDash/MainContent';

const Container = styled.div`
  display: flex;
  height: 100vh;
  background: #7EB10A;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

const StudentDashPage = () => {
    return (
        <Container>
            <Sidebar />
            <MainContent />
        </Container>
    )
}

export default StudentDashPage;
