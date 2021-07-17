import User from "../entities/User";

interface ICreateUserDTO {
    nome: string;
    senha: string;
}
interface IUsersRepository {
    create({ nome, senha }: ICreateUserDTO): Promise<void>;
    findByName(nome: string): Promise<User>;
}

export { IUsersRepository, ICreateUserDTO };
