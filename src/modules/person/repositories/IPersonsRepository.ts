import Person from "../entities/Person";

interface ICreatePersonDTO {
    nome: string;
    sexo?: string;
    email?: string;
    dataNasc: Date;
    naturalidade?: string;
    nacionalidade?: string;
    cpf: string;
    inactive: boolean;
}
interface IPersonsRepository {
    findByData(cpf: string): Promise<Person>;
    findById(id: string): Promise<Person>;
    list(): Promise<Person[]>;
    delete(person: Person): Promise<Person>;
    create({
        nome,
        dataNasc,
        cpf,
        sexo,
        email,
        naturalidade,
        nacionalidade,
        inactive,
    }: ICreatePersonDTO): Promise<void>;
    save(person: Person): Promise<Person>;
}

export { IPersonsRepository, ICreatePersonDTO };
