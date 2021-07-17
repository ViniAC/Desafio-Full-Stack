import { Request, Response } from "express";

import { ListPersonsUseCase } from "./ListPersonUseCase";

class ListPersonController {
    constructor(private listPersonsUseCase: ListPersonsUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const all = await this.listPersonsUseCase.execute();
        return response.json(all);
    }
}

export { ListPersonController };
