import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { nome, senha } = request.body;
        const createUserUseCase = container.resolve(CreateUserUseCase);

        await createUserUseCase.execute({
            nome,
            senha,
        });
        return response.status(201).send();
    }
}

export { CreateUserController };
