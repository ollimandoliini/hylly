import { ServerRoute } from 'hapi'

import helloHandler, { requestSchema } from 'src/features/hello/handler'

const routes: ServerRoute[] = [
  {
    method: 'GET',
    path: '/health',
    handler: (request, h) => {
      return h.response({ status: 'ok' }).code(200)
    },
    options: {
      tags: ['api'],
      description: 'Server status check',
      plugins: {
        'hapi-swagger': {
          responses: {
            200: { status: 'ok' }
          }
        }
      }
    }
  },
  {
    method: 'POST',
    path: '/hello',
    handler: helloHandler,
    options: {
      tags: ['api'],
      description: 'Placeholder API endpoint',
      validate: {
        payload: requestSchema
      },
      plugins: {
        'hapi-swagger': {
          responses: {
            200: { message: 'Hello ok' },
            400: { message: 'Bad request, check your request body' }
          }
        }
      }
    }
  }
]

export default routes
