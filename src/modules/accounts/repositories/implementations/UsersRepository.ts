import { getRepository, Repository } from "typeorm";

import User from "../../entities/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }
    async findByName(nome: string): Promise<User> {
        const user = await this.repository.findOne({ nome });

        return user;
    }

    async create({ nome, senha }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            nome,
            senha,
        });
        await this.repository.save(user);
    }
}

export { UsersRepository };
