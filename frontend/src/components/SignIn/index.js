import React from 'react';
import AccountBox from '../accountBox';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
} from './SigninElements';

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>AiM</Icon>
          <FormContent>
            <Form>
              <AccountBox/>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
