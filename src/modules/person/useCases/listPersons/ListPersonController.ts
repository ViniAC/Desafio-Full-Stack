import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListPersonsUseCase } from "./ListPersonUseCase";

class ListPersonController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listPersonsUseCase = container.resolve(ListPersonsUseCase);

        const all = await listPersonsUseCase.execute();
        return response.json(all);
    }
}

export { ListPersonController };
