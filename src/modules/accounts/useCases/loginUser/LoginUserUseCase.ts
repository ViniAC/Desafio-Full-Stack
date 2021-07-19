import { compare } from "bcrypt";
import { inject, injectable } from "tsyringe";

import AppError from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    nome: string;
    senha: string;
}
@injectable()
class LoginUserUseCase {
    constructor(
        @inject("UsersRepository") private usersRepository: IUsersRepository
    ) {}
    async execute({ nome, senha }: IRequest): Promise<void> {
        const userBD = await this.usersRepository.findByName(nome);
        if (!userBD) {
            throw new AppError("Usuário não existe", 401);
        }
        const match = await compare(senha, userBD.senha);
        if (!match) {
            throw new AppError("Wrong credentials", 401);
        }
    }
}

export { LoginUserUseCase };
