import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import Input from "../../components/Input";
const Container = styled.div`
    display: flex;
    height: 98vh;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const MainContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 60vw;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8.5px);
    -webkit-backdrop-filter: blur(8.5px);
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
        height: 90vh;
    }
    @media only screen and (min-width: 1024px) {
        width: 70vw;
        height: 90vh;
    }
    @media only screen and (min-width: 1280px) {
        width: 70vw;
        height: 90vh;
    }
`;

const RegisterText = styled.h2`
    margin: 3rem 0 2rem 0;
    font-weight: bolder;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
  align-content:center;
  height: 70%;
  width: 80%;
`;

const ButtonContainer = styled.div`
    margin: 1rem 0 2rem 0;
    width: 100%;
    display: flex;
    align-items: baseline;
    justify-content: center;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;


function Register() {
    return (
        <Container>
            <MainContainer>
                <RegisterText>Register</RegisterText>
                <InputContainer>
                    <Form action="">
                        <Input type="text" placeholder="Name" required />
                        <Input type="text" placeholder="Email" />
                        <Input type="text" placeholder="Sexo" />
                        <Input
                            type="text"
                            placeholder="Data Nascimento"
                            required
                        />
                        <Input type="text" placeholder="Naturalidade" />
                        <Input type="text" placeholder="Nacionalidade" />
                        <Input type="text" placeholder="CPF" required />
                    </Form>
                </InputContainer>
                <ButtonContainer>
                    <Button content="Registrar" />
                </ButtonContainer>
            </MainContainer>
        </Container>
    );
}

export default Register;
