// zyra.js
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import routes from "./routes/api.routes.js"; // ✅ include .js
import { swaggerUi, swaggerSpec } from "./swagger/swagger.js";
// Load environment variables from .env file
dotenv.config();
// Create express app
const app = express();
//looger
app.use(morgan("dev"));
// Middleware
app.use(express.json());
//  Add Swagger UI route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// Routes
app.use("/api", routes);

//start the server
app.listen(process.env.PORT || 3000, () =>
  console.log(`🚀 Server running on port ${process.env.PORT || 3000}`)
);
