import { cpf as CPF } from "cpf-cnpj-validator";
import * as EmailValidator from "email-validator";
import { Request, Response } from "express";
import { container } from "tsyringe";

import AppError from "../../../../errors/AppError";
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
        if (new Date(dataNasc) === undefined) {
            throw new AppError("Data invalida", 400);
        }
        if (!CPF.isValid(cpf)) {
            throw new AppError("Cpf invalido", 400);
        }
        if (nome === "") {
            throw new AppError("Nome invalido", 400);
        }
        if (!EmailValidator.validate(email) && email !== "") {
            throw new AppError("Email invalido", 400);
        }

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
