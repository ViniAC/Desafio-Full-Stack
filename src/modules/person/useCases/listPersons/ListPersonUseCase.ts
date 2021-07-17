import { inject, injectable } from "tsyringe";

import Person from "../../entities/Person";
import { IPersonsRepository } from "../../repositories/IPersonsRepository";

@injectable()
class ListPersonsUseCase {
    constructor(
        @inject("PersonsRepository")
        private personsRepository: IPersonsRepository
    ) {}
    async execute(): Promise<Person[]> {
        const persons = await this.personsRepository.list();
        return persons;
    }
}

export { ListPersonsUseCase };
