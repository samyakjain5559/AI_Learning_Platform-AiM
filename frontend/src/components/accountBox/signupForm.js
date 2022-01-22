
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

export function SignupForm(props) {
    const { switchToSignin } = useContext(AccountContext);

    const [fullnameReg, setFullnameReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [account_type_Reg, setaccount_type_Reg] = useState("");

    const [signUpStatus, setSignUpStatus] = useState("");

    function handleSignUpClick(e) {
        e.preventDefault();
        axios.post('http://localhost:4000/sign_up', {
            fullname: fullnameReg,
            email: emailReg,
            password: passwordReg,
            checkbox_type: account_type_Reg,
        }).then((response) => {
            console.log(response);

            if (response.data.message) {
                setSignUpStatus(response.data.message);
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
                <Input type="email" placeholder="Email" onChange={(e) => {
                    setEmailReg(e.target.value)
                }}
                />
                <Input type="password" placeholder="Password" onChange={(e) => {
                    setPasswordReg(e.target.value)
                }}
                />
                <div class="form-group">
                    <label for="pass"><i class="fa fa-user"></i> Choose an account:</label>
                    <br></br>
                    <label><input type="radio" name="signUp" name="checkbox" value="student" id="student"  onChange={(e) => {
                        setaccount_type_Reg(e.target.value)}} 
                    /> Student</label>
                    <br></br>
                    <label><input type="radio" name="signUp" name="checkbox" value="teacher" id="teacher" onChange={(e) => {
                        setaccount_type_Reg(e.target.value)}} 
                    /> Teacher</label>
                </div>
            </FormContainer>
            <Marginer direction="vertical" margin="1em" />
            <SubmitButton type="submit" onClick={(e) => {handleSignUpClick(e); switchToSignin()}}>Sign Up</SubmitButton>
            <Marginer direction="vertical" margin={20} />
            <StatusContainer>
                <StatusText>{signUpStatus}</StatusText>
            </StatusContainer>
            <Marginer direction="vertical" margin={20} />
            <MutedLink href="#">
                Already have an account ?
                <BoldLink href="#" onClick={switchToSignin}>
                    Sign in
                </BoldLink>
            </MutedLink>
        </BoxContainer >
    );
}