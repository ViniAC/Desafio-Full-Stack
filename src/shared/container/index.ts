import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { PersonsRepository } from "../../modules/person/repositories/implementations/PersonsRepository";
import { IPersonsRepository } from "../../modules/person/repositories/IPersonsRepository";

container.registerSingleton<IPersonsRepository>(
    "PersonsRepository",
    PersonsRepository
);

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);
