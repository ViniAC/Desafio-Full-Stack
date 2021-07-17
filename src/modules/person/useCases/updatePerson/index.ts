import { PersonsRepository } from "../../repositories/implementations/PersonsRepository";
import { UpdatePersonController } from "./UpdatePersonController";
import { UpdatePersonUseCase } from "./UpdatePersonUseCase";

export default (): UpdatePersonController => {
    const personsRepository = new PersonsRepository();
    const updatePersonsUseCase = new UpdatePersonUseCase(personsRepository);
    const updatePersonController = new UpdatePersonController(
        updatePersonsUseCase
    );

    return updatePersonController;
};
