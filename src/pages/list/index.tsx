import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from '../../services/api'
import {GoTrashcan} from 'react-icons/go'
import {FaRegEdit} from 'react-icons/fa'
import {Button,Container,Table, Thead, TableRow,TableHead,TableTd, Tbody,ButtonBack} from './styles'
import { useToast } from '../../hooks/toast';


interface User {
    id: string;
    nome: string;
    email: string;
    cpf: string;
    dataNasc:Date;
  }

const List = () => {
    const { addToast } = useToast();
    const history = useHistory();
    const [users, setUsers] = useState<User[]>();
    useEffect(() => {
        api.get("/persons").then((json) => {
        setUsers(json.data);
        });
    }, []);

    const handleDelete = async(e: React.MouseEvent<HTMLButtonElement, MouseEvent>,user:User)=> {
        e.preventDefault();
        try{
        await api.patch("/persons", {...user}).then((json)=> {
                addToast({
                    type: 'success',
                    title: 'Sucesso',
                    description: 'Usuário deletado com sucesso!',
                  });
                  const newUsers = users;
                  if(newUsers){
                  setUsers(newUsers.filter(item => item.id !== user.id));

                  }


        });
    }catch(err){
        addToast({
            type: 'error',
            title: 'Erro',
            description: err?.response?.data?.message,
          });
    }

    }
    const handleEdit = async(e: React.MouseEvent<HTMLButtonElement, MouseEvent>,user:User)=> {
        e.preventDefault();


    }

    return (
        <Container>
            <ButtonBack onClick={() => history.push('/register')}>Adicionar</ButtonBack>
            <Table>

                <Thead>
                    <TableRow>
                        <TableHead>Nome</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>CPF</TableHead>
                        <TableHead>Data de nascimento</TableHead>
                        <TableHead>Ações</TableHead>
                    </TableRow>
                </Thead>
                <Tbody>
                {users &&
                    users.map((user, index) => {
                    const date = new Date(user.dataNasc);
                    const day = date.getDate();
                    const month = date.getMonth() + 1;
                    const year = date.getFullYear();
                    const hour = date.getHours();
                    const minutes = date.getMinutes();
                    console.log(user)
                    return (
                    <TableRow key={index}>
                        {/* <td>{index + 1}</td> */}
                        <TableTd>{user.nome}</TableTd>
                        <TableTd>{user.email ? user.email : 'não possui'}</TableTd>
                        <TableTd>{user.cpf}</TableTd>
                        <TableTd>
                        {day <= 9 ? "0" + day : day}/
                        {month <= 9 ? "0" + month : month}/{year}{" "}
                        {hour <= 9 ? "0" + hour : hour}:
                        {minutes <= 9 ? "0" + minutes : minutes}
                        </TableTd>
                        <TableTd>
                            <Button onClick={(e)=> handleDelete(e,user)}>
                                <GoTrashcan/>
                            </Button>
                            <Button as={Link} to={`/register/${user.id}`}>
                                <FaRegEdit/>
                            </Button>
                        </TableTd>

                    </TableRow>
                );
            })}
                </Tbody>

            </Table>

        </Container>
    );
};

export default List;
