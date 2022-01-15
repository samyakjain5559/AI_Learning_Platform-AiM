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
import { useContext, useState } from "react";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { useHistory } from "react-router";

export const SignUpPage = () => {

    const { switchToSignin } = useContext(AccountContext);
    const [errorMessage, setErrorMessage] = useState('');
    const [fullnameValue, setFullnameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
    const [accountTypeValue, setAccountTypeValue] = useState('');

    const history = useHistory();

    const onSignUpClicked = async () => {
        alert('Sign up not implemented yet');
    }
    return (
        <BoxContainer>
            {errorMessage && <div className="fail">{errorMessage}</div>}
            <FormContainer>
                <Input 
                    type="text" 
                    placeholder="Full Name" 
                    value={fullnameValue}
                    onChange = {e => setFullnameValue(e.target.value)}
                />
                <Input 
                    type="email" 
                    placeholder="Email" 
                    value={emailValue}
                    onChange = {e => setEmailValue(e.target.value)}
                />
                <Input 
                    type="password" 
                    placeholder="Password" 
                    value={passwordValue}
                    onChange = {e => setPasswordValue(e.target.value)}
                />
                <Input 
                    type="password" 
                    placeholder="Confirm Password" 
                    value={confirmPasswordValue}
                    onChange = {e => setConfirmPasswordValue(e.target.value)}
                />
                <div class="form-group">
                    <label for="pass"><i class="fa fa-user"></i> Choose an account:</label>
                    <br></br>
                    <label><input 
                        type="radio" 
                        name="studentCheckbox" 
                        value="student" 
                        id="student"  
                        onChange={e => setAccountTypeValue(e.target.value)}
                    /> Student</label>
                    <br></br>
                    <label><input 
                        type="radio" 
                        name="teacherCheckbox" 
                        value="teacher" 
                        id="teacher" 
                        onChange={e => setAccountTypeValue(e.target.value)} 
                    /> Teacher</label>
                </div>
            </FormContainer>
            <Marginer direction="vertical" margin="2em" />
            <SubmitButton 
                disabled={
                    !fullnameValue || !emailValue || !passwordValue ||
                    passwordValue !== confirmPasswordValue || 
                    !accountTypeValue
                }
                type="submit" 
                onClick={onSignUpClicked}>
                Sign Up
            </SubmitButton>
            <Marginer direction="vertical" margin={20} />
{/*             <StatusContainer>
                <StatusText>{signUpStatus}</StatusText>
            </StatusContainer> */}
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