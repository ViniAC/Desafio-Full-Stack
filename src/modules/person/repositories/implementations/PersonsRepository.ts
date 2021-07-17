import { getRepository, Repository } from "typeorm";

import Person from "../../entities/Person";
import { IPersonsRepository, ICreatePersonDTO } from "../IPersonsRepository";

class PersonsRepository implements IPersonsRepository {
    private repository: Repository<Person>;

    constructor() {
        this.repository = getRepository(Person);
    }
    async create({
        nome,
        sexo,
        email,
        dataNasc,
        naturalidade,
        nacionalidade,
        inactive,
        cpf,
    }: ICreatePersonDTO): Promise<void> {
        const person = this.repository.create({
            nome,
            sexo,
            email,
            dataNasc,
            naturalidade,
            nacionalidade,
            inactive,
            cpf,
        });
        await this.repository.save(person);
    }

    async list(): Promise<Person[]> {
        const users = await this.repository.find({
            where: { inactive: false },
        });
        return users;
    }
    async findByData(cpf): Promise<Person> {
        const person = await this.repository.findOne({ cpf });

        return person;
    }
    async findById(id): Promise<Person> {
        const person = await this.repository.findOne({ id });
        return person;
    }
    public async save(person: Person): Promise<Person> {
        return this.repository.save(person);
    }
    public async delete(person: Person): Promise<Person> {
        return this.repository.save(person);
    }
}

export { PersonsRepository };
