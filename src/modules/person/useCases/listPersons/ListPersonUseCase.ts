import Person from "../../entities/Person";
import { IPersonsRepository } from "../../repositories/IPersonsRepository";

class ListPersonsUseCase {
    constructor(private personsRepository: IPersonsRepository) {}
    async execute(): Promise<Person[]> {
        const persons = await this.personsRepository.list();
        return persons;
    }
}

export { ListPersonsUseCase };
