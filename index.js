import "dotenv/config";
import express from "express";
import cors from "cors";
import productsRouter from "./src/routes/products.router.js";
import authRouter from "./src/routes/auth.router.js";
import {
  errorHandler404,
  errorHandler500,
} from "./src/middlewares/errorHandler.middleware.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./src/docs/swagger.js";
import { auth } from "./src/middlewares/auth.middleware.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", authRouter);

app.use("/api", auth, productsRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.json({
    message: "Bienvenido a la API de Productos por Juan Cruz Vazquez",
  });
});

app.use(errorHandler404);

app.use(errorHandler500);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
