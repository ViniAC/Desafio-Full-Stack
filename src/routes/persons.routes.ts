import { Router } from "express";

import { ensureAutenticated } from "../middlewares/ensureAutenticated";
import { CreatePersonController } from "../modules/person/useCases/createPerson/CreatePersonController";
import { DeletePersonController } from "../modules/person/useCases/deletePerson/DeletePersonController";
import { GetPersonController } from "../modules/person/useCases/getPerson/GetPersonController";
import { ListPersonController } from "../modules/person/useCases/listPersons/ListPersonController";
import { UpdatePersonController } from "../modules/person/useCases/updatePerson/UpdatePersonController";

const personsRoutes = Router();

const createPersonController = new CreatePersonController();
const deletePersonController = new DeletePersonController();
const listPersonController = new ListPersonController();
const updatePersonController = new UpdatePersonController();
const getPersonController = new GetPersonController();

personsRoutes.use(ensureAutenticated);

personsRoutes.post("/", createPersonController.handle);

personsRoutes.get("/", listPersonController.handle);
personsRoutes.get("/:id", getPersonController.handle);

personsRoutes.put("/", updatePersonController.handle);
personsRoutes.patch("/", deletePersonController.handle);

export { personsRoutes };
