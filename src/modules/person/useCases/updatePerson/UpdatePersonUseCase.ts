import Person from "../../entities/Person";
import { IPersonsRepository } from "../../repositories/IPersonsRepository";

interface IRequest {
    id: string;
    nome: string;
    sexo?: string;
    email?: string;
    dataNasc: Date;
    naturalidade?: string;
    nacionalidade?: string;
    cpf: string;
    inactive: boolean;
}

class UpdatePersonUseCase {
    constructor(private personsRepository: IPersonsRepository) {}
    async execute({
        id,
        nome,
        sexo,
        email,
        dataNasc,
        naturalidade,
        nacionalidade,
    }: IRequest): Promise<Person> {
        const person = await this.personsRepository.findById(id);
        if (!person) {
            throw new Error("Person not found!");
        }

        person.nome = nome;
        person.sexo = sexo;
        person.email = email;
        person.dataNasc = dataNasc;
        person.naturalidade = naturalidade;
        person.nacionalidade = nacionalidade;

        const updated = await this.personsRepository.save(person);
        return updated;
    }
}

export { UpdatePersonUseCase };
