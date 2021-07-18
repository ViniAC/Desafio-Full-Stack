import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetPersonUseCase } from "./GetPersonUseCase";

class GetPersonController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const getPersonUseCase = container.resolve(GetPersonUseCase);

        const person = await getPersonUseCase.execute({
            id,
        });
        console.log(person);
        return response.json(person);
    }
}

export { GetPersonController };
