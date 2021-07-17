import { Request, Response } from "express";

import { DeletePersonUseCase } from "./DeletePersonUseCase";

class DeletePersonController {
    constructor(private deletePersonUseCase: DeletePersonUseCase) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;

        await this.deletePersonUseCase.execute({
            id,
        });
        return response.status(201).send();
    }
}

export { DeletePersonController };
