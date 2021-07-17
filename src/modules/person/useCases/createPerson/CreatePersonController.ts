import { Request, Response } from "express";

import { CreatePersonUseCase } from "./CreatePersonUseCase";

class CreatePersonController {
    constructor(private createPersonUseCase: CreatePersonUseCase) {}
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

        await this.createPersonUseCase.execute({
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
