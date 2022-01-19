import React, { useState } from "react";
import styled from "styled-components";
import { motion } from 'framer-motion';
import { LoginForm } from "./loginForm";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signupForm";

const BoxContainer = styled.div`
    width: 450px;
    min-height: 850px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0px 0px 10.7px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;
    margin-top: 30px;
`;

const TopContainer = styled.div`
    width: 100%;
    height: 420px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
    position: absolute;
    width: 160%;
    height: 850px;
    border-radius: 50%;
    transform: rotate(60deg);
    top: -460px;
    left: -120px;
    /* background-image: linear-gradient(to right top, #051937, #00456A, #007789, #00A88C, #7ED57B, #F9F871); */
    background-image: linear-gradient(
        to right top, #051937, #05162e, 
        #051224, #030d1b, #000712
    );
`;

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const HeaderText = styled.h2`
    font-size: 50px;
    font-weight: 600;
    line-height: 1.24;
    color: #fff;
    z-index: 10;
    margin: 0;
`;

const SmallText = styled.h5`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.24;
    color: #fff;
    z-index: 10;
    margin: 0;
    margin-top: 16px;
    margin-bottom: 120px;
`;

const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2em;
`;

const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30,
};

const backdropVariants = {
    expanded: {
        width: "233%",
        height: "1600px",
        borderRadius: "20%",
        transform: "rotate(60deg)",
    },
    collapsed: {
        width: "160%",
        height: "850px",
        borderRadius: "50%",
        transform: "rotate(60deg)",
    },
};


function AccountBox(props) {
    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState("signin");

    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);
        }, expandingTransition.duration * 1000 - 1500);
    };

    const switchActive = (active) => {
        setTimeout(() => setActive(active), 400);
    };

    const switchToSignup = () => {
        playExpandingAnimation();
        switchActive("signup");
    };

    const switchToSignin = () => {
        playExpandingAnimation();
        switchActive("signin");
    };

    const contextValue = {
        switchToSignup,
        switchToSignin,
    };

    return (
        <AccountContext.Provider value={contextValue}>
            <BoxContainer>
                <TopContainer>
                    <BackDrop
                        initial={false}
                        animate={isExpanded ? "expanded" : "collapsed"}
                        variants={backdropVariants}
                        transition={expandingTransition}
                    />
                    {active === "signin" && (
                        <>
                            <HeaderContainer>
                                <HeaderText>Welcome</HeaderText>
                            </HeaderContainer>
                            <SmallText>Please sign in to continue!</SmallText>
                        </>
                    )}
                    {active === "signup" && (
                        <>
                            <HeaderContainer>
                                <HeaderText>Create Account</HeaderText>
                            </HeaderContainer>
                            <SmallText>Please sign up to get started!</SmallText>
                        </>
                    )}
                </TopContainer>
                <InnerContainer>
                    {active === "signin" && <LoginForm />}
                    {active === "signup" && <SignupForm />}
                </InnerContainer>
            </BoxContainer>
        </AccountContext.Provider>
    );
}

export default AccountBox;