import { PersonsRepository } from "../../repositories/implementations/PersonsRepository";
import { DeletePersonController } from "./DeletePersonController";
import { DeletePersonUseCase } from "./DeletePersonUseCase";

export default (): DeletePersonController => {
    const personsRepository = new PersonsRepository();
    const deletePersonsUseCase = new DeletePersonUseCase(personsRepository);
    const deletePersonController = new DeletePersonController(
        deletePersonsUseCase
    );

    return deletePersonController;
};
