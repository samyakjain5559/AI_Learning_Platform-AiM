import React, { useContext } from "react";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
    SubmitButton,
} from "./common";

export function LoginForm(props) {
    const { switchToSignup } = useContext(AccountContext);

    return (
        < BoxContainer >
            <Marginer direction="vertical" margin={20} />
            <FormContainer>
                <Input placeholder="Email" />
                <Input type="password" placeholder="Password" />
            </FormContainer>
            <Marginer direction="vertical" margin={15} />
            <MutedLink href="#">Forgot Password?</MutedLink>
            <Marginer direction="vertical" margin="2em" />
            <SubmitButton>Login</SubmitButton>
            <Marginer direction="vertical" margin={140} />
            <MutedLink href="#">
                Don't have an account?
                <BoldLink href="#" onClick={switchToSignup}>
                    Sign up
                </BoldLink>
            </MutedLink>
        </BoxContainer >
    );
}