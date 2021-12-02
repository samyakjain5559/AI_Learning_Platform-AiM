import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
import ProfileImage from "../../images/svg-1.svg";
import { Link as LinkR } from 'react-router-dom';

function Sidebar() {
  return (
    <Container>
      <ProfileContainer>
        <Profile src={ProfileImage} />
        <Name>Full Name</Name>
        <LogoutBtnLink to='/'>Logout</LogoutBtnLink>
      </ProfileContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 20%;
  height: 100% !important;
  background: linear-gradient(
    to right top, #051937, #05162e, 
    #051224, #030d1b, #000712
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: max-content !important;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Profile = styled.img`
  height: 7rem;
  border-radius: 6rem;
  margin-top: 60%;
`;

const Name = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;

const LogoutBtnLink = styled(LinkR)`
  border-radius: 50px;
  background-color: #7EB10A;
  margin-top: 10px;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export default Sidebar;
