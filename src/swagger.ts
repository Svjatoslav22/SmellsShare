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
    '/api/smells': {
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
      '/api/smells/{id}': {
        get: {
          summary: 'Отримати запах по id',
          tags: ['Smells'],
          parameters: [
            {
              name: 'id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
              description: 'ObjectId запаху'
            }
          ],
          responses: {
            '200': { description: 'Запах знайдено' },
            '404': { description: 'Запах не знайдено' },
            '400': { description: 'Некоректний id' }
          }
        }
    },
    '/api/smells/random': {
      get: {
        summary: 'Випадковий запах',
        tags: ['Smells'],
        responses: { '200': { description: 'Випадковий запах' } }
      }
    },
    '/api/smells/react': {
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
    '/api/smells/popular': {
      get: {
        summary: 'Топ-10 популярних',
        tags: ['Smells'],
        responses: { '200': { description: 'Список популярних' } }
      }
    },
    '/api/smells/stats': {
      get: {
        summary: 'Статистика API',
        tags: ['Smells'],
        responses: { '200': { description: 'Статистика' } }
      }
    }
  }
};