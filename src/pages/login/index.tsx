import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useHistory } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

const Container = styled.div`
  display: flex;
  height: 98vh !important;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 10px;
  color: #4f4f4f;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const LoginText = styled.h2`
  margin: 3rem 0 2rem 0;
  font-weight: bolder;
  margin-bottom:150px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Login() {
const history = useHistory();

  const [username,setUsername] = useState<string>("");
  const [password,setPassword] = useState<string>("");
  const { signIn } = useAuth();

   async function handleSubmit (e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    try {
      await signIn({
        name:username,
        password:password
      });
      history.push("/list");
    } catch (err) {}
  }

  return (
    <Container>
      <MainContainer>
        <LoginText>Login</LoginText>
        <InputContainer>
          <Input value={username}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}type="text" placeholder="Email" />
          <Input value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}type="password" placeholder="Password" />
        </InputContainer>
        <ButtonContainer>
          <Button content="Sign In" onClick={handleSubmit} />
        </ButtonContainer>
        {/* <ForgotPassword>Forgot Password</ForgotPassword> */}
        {/* <ForgotPassword>
          <Link to="/register">Create Login</Link>
        </ForgotPassword> */}
      </MainContainer>
    </Container>
  );
}

export default Login;
