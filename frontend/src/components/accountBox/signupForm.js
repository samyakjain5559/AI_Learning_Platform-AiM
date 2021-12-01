
import React, { useContext, useState } from "react";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    HiddenRadioButton,
    Input,
    MutedLink,
    RadioButton,
    RadioInput,
    RadioMark,
    SubmitButton,
} from "./common";

export function SignupForm(props) {
    const { switchToSignin } = useContext(AccountContext);

    return (
        <BoxContainer>
            <FormContainer>
                <Input placeholder="Full Name" />
                <Input placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Confirm Password" />
            </FormContainer>
            <Marginer direction="vertical" margin="2em" />
            <SubmitButton>Sign Up</SubmitButton>
            <Marginer direction="vertical" margin={50} />
            <MutedLink href="#">
                Already have an account?
                <BoldLink href="#" onClick={switchToSignin}>
                    Sign in
                </BoldLink>
            </MutedLink>
        </BoxContainer >
    );
}