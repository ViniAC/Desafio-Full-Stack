import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdatePersonUseCase } from "./UpdatePersonUseCase";

class UpdatePersonController {
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
        const updatePersonUseCase = container.resolve(UpdatePersonUseCase);
        console.log(dataNasc);
        const updated = await updatePersonUseCase.execute({
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
        return response.status(201).json(updated);
    }
}

export { UpdatePersonController };
