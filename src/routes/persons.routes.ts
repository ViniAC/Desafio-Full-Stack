import { Router } from "express";

import createPersonController from "../modules/person/useCases/createPerson";
import deletePersonController from "../modules/person/useCases/deletePerson";
import listPersonController from "../modules/person/useCases/listPersons";
import updatePersonController from "../modules/person/useCases/updatePerson";

const personsRoutes = Router();

personsRoutes.post("/", (request, response) => {
    return createPersonController().handle(request, response);
});

personsRoutes.get("/", (request, response) => {
    return listPersonController().handle(request, response);
});

personsRoutes.put("/", (request, response) => {
    return updatePersonController().handle(request, response);
});
personsRoutes.patch("/", (request, response) => {
    return deletePersonController().handle(request, response);
});

export { personsRoutes };
