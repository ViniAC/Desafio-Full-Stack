import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import api from '../../services/api'
import {GoTrashcan} from 'react-icons/go'
import {FaRegEdit} from 'react-icons/fa'

  import { useToast } from '../../hooks/toast';
const Button = styled.button`
    /* Adapt The colors based on primary prop */
    background: palevioleTred;
    color: white;
    font-size: 1em;
    margin: 1em;
    padding: 0.15em 0.50em;
    border: 2px solid palevioleTred;
    border-radius: 3px;
    :hover{
        background-color:red;
        transition: 600ms;
    };
    :active {
        top:2px;
    }
`;

const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: Translate(-50%, -50%);
    color:white;
`;
const Th = styled.th`
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
    ext-align: left;
`;
const Td = styled.td`
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
`;
const Thead = styled.thead`
    ${`Th`} {
        background-color: #55608f;
    }
`;
const Tbody = styled.tbody`
    TableRow {
		&:hover {
			background-color: rgba(255,255,255,0.3);
		}
	}
	td {
		position: relative;
		&:hover {
			&:before {
				content: "";
				position: absolute;
				left: 0;
				right: 0;
				top: -9999px;
				bottom: -9999px;
				background-color: rgba(255,255,255,0.2);
				z-index: -1;
			}
		}
	}
`;
const Table = styled.table`
    width: 800px;
    border-collapse: collapse;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;
const TableRow = styled.tr``;
const TableHead = styled.th`
`;
const TableTd =styled.td`
padding-left:40px;`

interface User {
    id: string;
    nome: string;
    email: string;
    cpf: string;
    dataNasc:Date;
  }

const List = () => {
    const { addToast } = useToast();

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

        });
    }catch(err){
        addToast({
            type: 'error',
            title: 'Erro',
            description: "Usuário não encontrado",
          });
    }

    }
    const handleEdit = async(e: React.MouseEvent<HTMLButtonElement, MouseEvent>,user:User)=> {
        e.preventDefault();


    }

    return (
        <Container>
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
