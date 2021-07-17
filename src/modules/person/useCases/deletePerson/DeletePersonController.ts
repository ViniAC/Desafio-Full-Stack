import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeletePersonUseCase } from "./DeletePersonUseCase";

class DeletePersonController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;
        const deletePersonUseCase = container.resolve(DeletePersonUseCase);

        await deletePersonUseCase.execute({
            id,
        });
        return response.status(201).send();
    }
}

export { DeletePersonController };
