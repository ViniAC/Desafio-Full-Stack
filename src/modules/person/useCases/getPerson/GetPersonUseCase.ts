import { inject, injectable } from "tsyringe";

import Person from "../../entities/Person";
import { IPersonsRepository } from "../../repositories/IPersonsRepository";

interface IRequest {
    id: string;
}
@injectable()
class GetPersonUseCase {
    constructor(
        @inject("PersonsRepository")
        private personsRepository: IPersonsRepository
    ) {}
    async execute({ id }: IRequest): Promise<Person> {
        const person = await this.personsRepository.findById(id);
        return person;
    }
}

export { GetPersonUseCase };
