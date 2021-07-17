import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    nome: string;
    senha: string;
}
@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository") private usersRepository: IUsersRepository
    ) {}
    async execute({ nome, senha }: IRequest): Promise<void> {
        const passwordHash = await hash(senha, 8);
        const userAlreadyExists = await this.usersRepository.findByName(nome);
        if (userAlreadyExists) {
            await this.usersRepository.create({
                nome,
                senha: passwordHash,
            });
        }
    }
}

export { CreateUserUseCase };
