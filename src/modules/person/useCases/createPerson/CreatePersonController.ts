import { cpf as CPF } from "cpf-cnpj-validator";
import * as EmailValidator from "email-validator";
import { Request, Response } from "express";
import { container } from "tsyringe";

import AppError from "../../../../errors/AppError";
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
        if (new Date(dataNasc) === undefined) {
            throw new AppError("Data de nascimento é obrigatória", 400);
        }
        if (nome === "") {
            throw new AppError("Nome invalido", 400);
        }
        if (!EmailValidator.validate(email) && email !== "") {
            throw new AppError("Email invalido", 400);
        }
        if (!CPF.isValid(cpf)) {
            throw new AppError("Cpf invalido", 400);
        }

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
        return response.json({ message: "Created" });
    }
}

export { CreatePersonController };
