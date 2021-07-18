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
    console.log("teste");
    console.log(request.headers);
    const user = await auth(request);
    console.log(user);
    if (!user) {
        throw new AppError("Token missing", 401);
    }
    const usersRepository = new UsersRepository();
    const userBD = await usersRepository.findByName(user.name);
    const match = await compare(user.pass, userBD.senha);
    if (!match) {
        throw new AppError("Wrong credentials", 401);
    }

    next();
}
