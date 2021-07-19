import { Router } from "express";

// import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { LoginUserController } from "../modules/accounts/useCases/loginUser/LoginUserController";

const userRoutes = Router();

// const createUserController = new CreateUserController();
const loginUserController = new LoginUserController();

userRoutes.post("/", loginUserController.handle);

export { userRoutes };
