import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreatePersonUseCase } from "./CreatePersonUseCase";

class CreatePersonController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            nome,
            sexo,
            email,
            dataNasc,
            naturalidade,
            nacionalidade,
            inactive,
            cpf,
        } = request.body;

        const createPersonUseCase = container.resolve(CreatePersonUseCase);
        await createPersonUseCase.execute({
            nome,
            sexo,
            email,
            dataNasc,
            naturalidade,
            nacionalidade,
            inactive,
            cpf,
        });
        return response.status(201).send();
    }
}

export { CreatePersonController };
