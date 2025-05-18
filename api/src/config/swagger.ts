import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import path from "path";

const router = Router();
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "BE-6442",
      version: "1.0.0",
      description: "API documentation for my project",
    },
    servers: [
      {
        url: process.env.API_URL,
        description: "Development server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: [path.join(__dirname, "../modules/**/router.ts")],
};
const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Swagger UI serve ve setup
router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default router;
