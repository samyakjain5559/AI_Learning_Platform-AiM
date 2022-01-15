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
import { Marginer } from "../marginer";
import { useState, useContext } from 'react';
import { AccountContext } from "./accountContext";

import { useHistory } from 'react-router-dom';

export const LoginInPage = () => {
    const { switchToSignup } = useContext(AccountContext);
    const [errorMessage, setErrorMessage] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const history = useHistory();

    const onLogInClicked = async() => {
        alert('Login in not implemented yet');
    }

    return (
        < BoxContainer >
            <Marginer direction="vertical" margin={20} />
            {errorMessage && <div className="fail">{errorMessage}</div>}
            <FormContainer>
                <Input 
                    type="email" 
                    placeholder="Email"
                    value = {emailValue} 
                    onChange = {e => setEmailValue(e.target.value)}
                />
                <Input 
                    type="password" 
                    placeholder="Password" 
                    value = {passwordValue}
                    onChange = {e => setPasswordValue(e.target.value)}
                />
            </FormContainer>
            <Marginer direction="vertical" margin={15} />
            <MutedLink 
                href="#" 
                onClick={() => history.push('/forgot-password')}
            >
                Forgot Password?
            </MutedLink>
            <Marginer direction="vertical" margin="2em" />
            <SubmitButton 
                type="submit" 
                onClick={onLogInClicked}
                disabled={!emailValue || !passwordValue}
            >
                Login
            </SubmitButton>
            <Marginer direction="vertical" margin={20} />
{/*             <StatusContainer>
                <StatusText>{loginStatus}</StatusText>
            </StatusContainer> */}
            <Marginer direction="vertical" margin={100} />
            <MutedLink href="#">
                Don't have an account?
                <BoldLink href="#" onClick={switchToSignup}>
                    Sign up
                </BoldLink>
            </MutedLink>
        </BoxContainer >
    );
}