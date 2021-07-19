import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Container,MainContainer,LoginText,InputContainer,ButtonContainer}from './styles'
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useHistory } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { useToast } from '../../hooks/toast';



function Login() {
    const history = useHistory();
    const { addToast } = useToast();

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
      addToast({
        type: 'success',
        title: 'Sucesso',
        description: 'Login concluído',
      });
      history.push("/list");
    } catch (err) {
        addToast({
            type: 'error',
            title: 'Erro',
            description: err?.response?.data?.message,
          });
    }
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
