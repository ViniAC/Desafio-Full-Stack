import cors from "cors";
import express from "express";

// import AppError from "./errors/AppError";
import { router } from "./routes";
import "./database";

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

app.listen(3333, () => {
    console.log("server listening on port:");
});
