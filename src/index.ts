import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";
import smellRouter from "./routes/smell";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger";

dotenv.config();
    
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/smells", smellRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

mongoose.connect(process.env.MONGO_URI || "")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB", err);
    });

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});