import React, { useEffect, useState } from "react";
import { Link, useParams,useHistory } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import DatePicker from 'react-date-picker';
import api from "../../services/api";
import { useToast } from '../../hooks/toast';
import {Container,MainContainer,RegisterText,InputContainer,ButtonContainer,Form,StyledInput,DatePickerContainer,ButtonBack}from './styles'





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
    inactive?: boolean;
  }
  const defaultPerson = {
    nome: '',
    sexo: '',
    email: '',
    dataNasc: '',
    naturalidade: '',
    nacionalidade: '',
    cpf: '',
    inactive: false
  }
function Register() {
    const history = useHistory();
    const [date, setDate] = useState<Date | null>(null);
    const [person, setPerson] = useState<Person>(defaultPerson);
    const { id }: Params = useParams();
    const { addToast } = useToast();

    useEffect( () => {
        async function fetchData() {
        try{
        if(id){
            console.log(id)
            await api.get(`/persons/${id}`).then((response):Person | void => {
            const newDate = response.data.dataNasc
            setPerson(response.data);
            setDate(new Date(newDate))
              });
        }
        }catch(err){
        history.push("/list");
        }
        }
            fetchData()
    },[id,history])

    useEffect(() => {console.log(date)},[date])
    const handleSubmitEdit = async (e: any)=> {
        e.preventDefault();
        const BPerson = person;
        try{
            if(date){
            setPerson({...person,dataNasc: date.toISOString()})
            const sendData = {
                ...person,dataNasc: date.toISOString()
            }

            await api.put("/persons", {...sendData}).then((json)=> {
                setPerson(json.data)
                    addToast({
                        type: 'success',
                        title: 'Sucesso',
                        description: 'Usuário alterado!',
                      });
                history.push('/list')
            });
        }
        }catch(err){
            setPerson(BPerson)
            addToast({
                type: 'error',
                title: 'Erro',
                description: err?.response?.data?.message,
              });
        }
    }
    const handleSubmit = async (e: any)=> {
        e.preventDefault();
        try{
            if(date){
            setPerson({...person,dataNasc: date.toISOString()})
            const sendData = {
                ...person,dataNasc: date.toISOString()
            }
            await api.post("/persons", {...sendData}).then((json)=> {
                setPerson(json.data)
                    addToast({
                        type: 'success',
                        title: 'Sucesso',
                        description: 'Usuário inserido!',
                      });
                history.push("/list");
            });
            }else {addToast({
                type: 'error',
                title: 'Erro',
                description: 'Data invalida!',
              });
            }
        }catch(err){
            console.log(err.response.data.message)
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
                <RegisterText>Register</RegisterText>
                <InputContainer>
                    <Form onSubmit={handleSubmit}>
                        <Input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {setPerson({...person,nome:e.target.value})}} value={person.nome}placeholder="Name" required />
                        <Input type="text" placeholder="Email" onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {setPerson({...person,email:e.target.value})}}value={person.email}/>

                        <DatePickerContainer>
                        <StyledInput type="text" placeholder="Sexo" onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {setPerson({...person,sexo:e.target.value})}}value={person.sexo}/>
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
                    <Button content={id ? "Salvar" :"Registrar"} onClick={(e: React.ChangeEvent<HTMLInputElement>)=> {id ? handleSubmitEdit(e): handleSubmit(e)}}></Button>
                </ButtonContainer>
        <ButtonBack onClick={() => history.push('/list')}>Voltar</ButtonBack>
            </MainContainer>
        </Container>
    );
}

export default Register;


