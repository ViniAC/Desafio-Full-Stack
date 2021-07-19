import { Request, Response } from "express";
import { container } from "tsyringe";

import { LoginUserUseCase } from "./LoginUserUseCase";

class LoginUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { nome, senha } = request.body;
        const loginUserUseCase = container.resolve(LoginUserUseCase);

        await loginUserUseCase.execute({
            nome,
            senha,
        });
        return response.status(201).send();
    }
}

export { LoginUserController };
