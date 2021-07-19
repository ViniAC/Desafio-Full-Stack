import auth from "basic-auth";
import { compare } from "bcrypt";
import { NextFunction, Request, Response } from "express";

import AppError from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

export async function ensureAutenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const user = await auth(request);
    if (!user) {
        throw new AppError("Token missing", 401);
    }
    const usersRepository = new UsersRepository();
    const userBD = await usersRepository.findByName(user.name);
    if (!userBD) {
        throw new AppError("Usuário não encontrado", 401);
    }
    const match = await compare(user.pass, userBD.senha);
    if (!match) {
        throw new AppError("Credenciais incorretas", 401);
    }

    next();
}
