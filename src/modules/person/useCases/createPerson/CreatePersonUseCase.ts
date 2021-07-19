import { inject, injectable } from "tsyringe";

import AppError from "../../../../errors/AppError";
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
@injectable()
class CreatePersonUseCase {
    constructor(
        @inject("PersonsRepository")
        private personsRepository: IPersonsRepository
    ) {}
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
            if (personAlreadyExists.inactive === false) {
                throw new AppError("Usuário já existe!");
            }
            if (personAlreadyExists.inactive === true) {
                personAlreadyExists.nome = nome;
                personAlreadyExists.sexo = sexo;
                personAlreadyExists.email = email;
                personAlreadyExists.dataNasc = dataNasc;
                personAlreadyExists.naturalidade = naturalidade;
                personAlreadyExists.nacionalidade = nacionalidade;
                personAlreadyExists.inactive = false;

                await this.personsRepository.save(personAlreadyExists);
            }
        } else {
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
}

export { CreatePersonUseCase };
