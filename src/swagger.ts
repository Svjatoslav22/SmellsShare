export const swaggerSpec = {
  openapi: '3.0.0',
  info: {
    title: 'SmellsShare API 👃',
    version: '1.0.0',
    description: 'API для обміну запахами між користувачами',
  },
  servers: [
    {
      url: 'https://smellsshare.onrender.com',
      description: 'Production server',
    },
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
  paths: {
    '/smells': {
      post: {
        summary: 'Додати новий запах',
        tags: ['Smells'],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  smellType: { type: 'string', example: 'кавовий' }
                }
              }
            }
          }
        },
        responses: { '201': { description: 'Запах створено' } }
      },
      get: {
        summary: 'Отримати всі запахи',
        tags: ['Smells'],
        responses: { '200': { description: 'Список запахів' } }
      }
    },
    '/smells/random': {
      get: {
        summary: 'Випадковий запах',
        tags: ['Smells'],
        responses: { '200': { description: 'Випадковий запах' } }
      }
    },
    '/smells/react': {
      post: {
        summary: 'Додати реакцію',
        tags: ['Smells'],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  smellId: { type: 'string' },
                  reaction: { type: 'string' }
                }
              }
            }
          }
        },
        responses: { '200': { description: 'Реакцію додано' } }
      }
    },
    '/smells/popular': {
      get: {
        summary: 'Топ-10 популярних',
        tags: ['Smells'],
        responses: { '200': { description: 'Список популярних' } }
      }
    },
    '/smells/stats': {
      get: {
        summary: 'Статистика API',
        tags: ['Smells'],
        responses: { '200': { description: 'Статистика' } }
      }
    }
  }
};