import express from "express";
import dotenv from "dotenv";

import App from "./app";

dotenv.config(); // run env var

const app = express();

new App(app, Number(process.env.port)); // run node server application
