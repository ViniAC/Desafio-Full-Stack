import { IPersonsRepository } from "../../repositories/IPersonsRepository";

interface IRequest {
    nome: string;
    sexo?: string;
    email?: string;
    dataNasc: Date;
    naturalidade?: string;
    nacionalidade?: string;
    cpf: string;
    inactive: boolean;
}

class CreatePersonUseCase {
    constructor(private personsRepository: IPersonsRepository) {}
    async execute({
        nome,
        sexo,
        email,
        dataNasc,
        naturalidade,
        nacionalidade,
        inactive,
        cpf,
    }: IRequest): Promise<void> {
        const personAlreadyExists = await this.personsRepository.findByData(
            cpf
        );
        if (personAlreadyExists) {
            throw new Error("Person already exists!");
        }
        this.personsRepository.create({
            nome,
            sexo,
            email,
            dataNasc,
            naturalidade,
            inactive,
            nacionalidade,
            cpf,
        });
    }
}

export { CreatePersonUseCase };
