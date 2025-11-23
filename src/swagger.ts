import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'SmellsShare API 👃',
      version: '1.0.0',
      description: 'API для обміну запахами між користувачами',
    },
    servers: [
      {
        url: 'https://smellsshare.onrender.com',
        description: 'Production',
      },
      {
        url: 'http://localhost:3000',
        description: 'Development',
      },
    ],
  },
  apis: ['./src/routes/*.ts'],
};

export const swaggerSpec = swaggerJsdoc(options);