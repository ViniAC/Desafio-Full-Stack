import { Request, Response } from "express";

import { UpdatePersonUseCase } from "./UpdatePersonUseCase";

class UpdatePersonController {
    constructor(private updatePersonUseCase: UpdatePersonUseCase) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            id,
            nome,
            sexo,
            email,
            dataNasc,
            naturalidade,
            nacionalidade,
            inactive,
            cpf,
        } = request.body;

        await this.updatePersonUseCase.execute({
            id,
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

export { UpdatePersonController };
