import swaggerJSDoc from "swagger-jsdoc";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "API RESTFUL Products",
    version: "1.0.0",
    description: "Documentación de la API de productos",
  },
   servers: [
    {
      url: "http://localhost:3000/api",
      description: "Servidor local",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: [path.join(__dirname, "../routes/*.js")], 
};

export default swaggerJSDoc(options);