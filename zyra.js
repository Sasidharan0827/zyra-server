// zyra.js
import express from "express"; //express
import dotenv from "dotenv"; //env files
import mongoose from "mongoose"; //db schema
import morgan from "morgan"; //logger
import routes from "./routes/api.routes.js"; // routes
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
app.use("/zyra", routes);

//  Connect to MongoDB Atlas
mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log(" MongoDB Atlas connected");
    //start the server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error(" MongoDB connection error:", err.message);
    process.exit(1);
  });
