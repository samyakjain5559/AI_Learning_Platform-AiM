
import React, { useContext, useState } from "react";
import axios from 'axios';
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
    SubmitButton,
    StatusContainer,
    StatusText,
} from "./common";
import { useHistory } from "react-router";

export function SignupForm(props) {
    const { switchToSignin } = useContext(AccountContext);

    const [fullnameReg, setFullnameReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const [signUpStatus, setSignUpStatus] = useState("");

    const history = useHistory();

    function handleSignUpClick(e) {
        e.preventDefault();
        axios.post('http://localhost:4000/sign_up', {
            fullname: fullnameReg,
            email: emailReg,
            password: passwordReg,
        }).then((response) => {
            console.log(response);

            if (response.data.message) {
                setSignUpStatus(response.data.message);
            } else {
                setSignUpStatus("Success!");
            }
        });
    }

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="text" placeholder="Full Name" onChange={(e) => {
                    setFullnameReg(e.target.value)
                }}
                />
                <Input type="text" placeholder="Email" onChange={(e) => {
                    setEmailReg(e.target.value)
                }}
                />
                <Input type="text" placeholder="Password" onChange={(e) => {
                    setPasswordReg(e.target.value)
                }}
                />
            </FormContainer>
            <Marginer direction="vertical" margin="2em" />
            <SubmitButton onClick={handleSignUpClick}>Sign Up</SubmitButton>
            <Marginer direction="vertical" margin={20} />
            <StatusContainer>
                <StatusText>{signUpStatus}</StatusText>
            </StatusContainer>
            <Marginer direction="vertical" margin={115} />
            <MutedLink href="#">
                Already have an account?
                <BoldLink href="#" onClick={switchToSignin}>
                    Sign in
                </BoldLink>
            </MutedLink>
        </BoxContainer >
    );
}