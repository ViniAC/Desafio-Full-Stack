import { Router } from "express";

import { personsRoutes } from "./persons.routes";

const router = Router();

router.use("/users", personsRoutes);

export { router };
