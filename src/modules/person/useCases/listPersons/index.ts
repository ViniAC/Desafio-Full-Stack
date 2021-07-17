import { PersonsRepository } from "../../repositories/implementations/PersonsRepository";
import { ListPersonController } from "./ListPersonController";
import { ListPersonsUseCase } from "./ListPersonUseCase";

export default (): ListPersonController => {
    const personsRepository = new PersonsRepository();
    const listPersonsUseCase = new ListPersonsUseCase(personsRepository);
    const listPersonController = new ListPersonController(listPersonsUseCase);

    return listPersonController;
};
