import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Button from "../../components/Button";
import Input from "../../components/Input";
import DatePicker from 'react-date-picker';
import api from "../../services/api";
import { useToast } from '../../hooks/toast';

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
const DatePickerContainer = styled.div`
    display: flex;
    width: 82%;

    .react-date-picker__wrapper {
        margin-left: 6px;
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        border-radius: 2rem;
        border: 1px;
        outline: none;
        color: #3c354e;
        background-color:white;
        border-color: rgba(31, 38, 135, 0.37);
        margin-bottom: 4px;
  }

`;



interface Params {
    id: string;
  }

  interface Person {
    nome: string;
    sexo?: string;
    email?: string;
    dataNasc: string;
    naturalidade?: string;
    nacionalidade?: string;
    cpf: string;
  }
  const defaultPerson = {
    nome: '',
    sexo: '',
    email: '',
    dataNasc: '',
    naturalidade: '',
    nacionalidade: '',
    cpf: '',
  }
function Register() {
    const [date, setDate] = useState(new Date());
    const [person, setPerson] = useState<Person>(defaultPerson);
    const { id }: Params = useParams();
    const { addToast } = useToast();
    useEffect( () => {
        async function fetchData() {
        console.log(id)
        if(id){
            await api.get(`/persons/${id}`).then((response):Person | void => {
            const newDate = response.data.dataNasc
            response.data.dataNasc = new Date(newDate);
            setPerson(response.data);
            setDate(new Date(newDate))
              });
        }
    }
        fetchData()
    },[id])

    const handleSubmit = async (e: any)=> {
        e.preventDefault();

        try{
            console.log(date)
            setPerson({...person,dataNasc: date.toISOString()})
            const sendData = {
                ...person,dataNasc: date.toISOString()
            }
            await api.put("/persons", {...sendData}).then((json)=> {
                    addToast({
                        type: 'success',
                        title: 'Sucesso',
                        description: 'Usuário alterado!',
                      });
            });
        }catch(err){
            addToast({
                type: 'error',
                title: 'Erro',
                description: "Erro ao alterar usuário",
              });
        }
    }
    return (
        <Container>
            <MainContainer>
                <RegisterText>Register</RegisterText>
                <InputContainer>
                    <Form onSubmit={handleSubmit}>
                        <Input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {setPerson({...person,nome:e.target.value})}} value={person.nome}placeholder="Name" required />
                        <Input type="text" placeholder="Email" onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {setPerson({...person,email:e.target.value})}}value={person.email}/>

                        <DatePickerContainer>
                        <Input type="text" placeholder="Sexo" onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {setPerson({...person,sexo:e.target.value})}}value={person.sexo}/>
                        <DatePicker
                            className="datePicker"
                            onChange={setDate}
                            value={date}
                            format="dd-MM-yyyy"
                        />
                       </DatePickerContainer>
                        <Input type="text" placeholder="Naturalidade"onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {setPerson({...person,naturalidade:e.target.value})}}value={person.naturalidade} />
                        <Input type="text" placeholder="Nacionalidade" onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {setPerson({...person,nacionalidade:e.target.value})}}value={person.nacionalidade}/>
                        <Input type="text" placeholder="CPF" required onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {setPerson({...person,cpf:e.target.value})}}value={person.cpf}/>
                    </Form>
                </InputContainer>
                <ButtonContainer>
                    <Button content={id ? "Salvar" :"Registrar"} onClick={(e: React.ChangeEvent<HTMLInputElement>)=> handleSubmit(e)}></Button>
                </ButtonContainer>
            </MainContainer>
        </Container>
    );
}

export default Register;


