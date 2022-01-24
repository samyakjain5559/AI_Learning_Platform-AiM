import React, { useContext, useState } from "react";
import axios from "axios";
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
export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [userType, setUserType] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const history = useHistory();
  function handleLoginClick(e) {
    e.preventDefault();
    axios
      .post("http://localhost:4000/login", {
        email: emailReg,
        password: passwordReg,
        type: userType,
      })
      .then((response) => {
        console.log(response);
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          if (userType == "teacher") {
            history.push("/addLessons"); // login successful => go to teacher page
          } else history.push("/studentdash"); // login successful => go to student page
        }
      });
  }
  return (
    <BoxContainer>
      <Marginer direction="vertical" margin={20} />
      <FormContainer>
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmailReg(e.target.value);
            setLoginStatus("");
          }}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPasswordReg(e.target.value);
            setLoginStatus("");
          }}
        />
      </FormContainer>
      <Marginer direction="vertical" margin={15} />
      <MutedLink href="#">Forgot Password?</MutedLink>
      <Marginer direction="vertical" margin="2em" />
      <SubmitButton type="submit" onClick={handleLoginClick}>
        Login
      </SubmitButton>
      <Marginer direction="vertical" margin={20} />
      <StatusContainer>
        <StatusText>{loginStatus}</StatusText>
      </StatusContainer>
      <Marginer direction="vertical" margin={100} />
      <MutedLink href="#">
        Don't have an account?
        <BoldLink href="#" onClick={switchToSignup}>
          Sign up
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
