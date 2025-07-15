import "dotenv/config";
import express from "express";
import cors from "cors";
import productsRouter from "./src/routes/products.router.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./src/docs/swagger.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", productsRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.json({
    message: "Bienvenido a la API de Productos por Juan Cruz Vazquez",
  });
});

app.use((req, res, next) => {
  res.status(404).json({ error: "Recurso no encontrado" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Error interno del servidor" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
