import Person from "../../entities/Person";
import { IPersonsRepository } from "../../repositories/IPersonsRepository";

interface IRequest {
    id: string;
}

class DeletePersonUseCase {
    constructor(private personsRepository: IPersonsRepository) {}
    async execute({ id }: IRequest): Promise<Person> {
        const person = await this.personsRepository.findById(id);
        if (!person) {
            throw new Error("Person not found!");
        }

        person.inactive = !person.inactive;

        const updated = await this.personsRepository.save(person);
        return updated;
    }
}

export { DeletePersonUseCase };
