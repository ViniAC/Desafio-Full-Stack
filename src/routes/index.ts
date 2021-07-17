import { Router } from "express";

import { personsRoutes } from "./persons.routes";
import { userRoutes } from "./user.routes";

const router = Router();

router.use("/persons", personsRoutes);
router.use("/users", userRoutes);

export { router };
