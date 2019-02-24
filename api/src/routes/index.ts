import { ServerRoute } from 'hapi'

// import { requestSchema } from 'src/features/hello/handler'
import getCollectionHandler from '../features/collections/handler' // requestSchema

const routes: ServerRoute[] = [
  {
    method: 'GET',
    path: '/collections/{id}',
    handler: getCollectionHandler,
    options: {
      tags: ['api'],
      description: 'Collections GET endpoint',
      // validate: {
      //   payload: requestSchema
      // },
      plugins: {
        'hapi-swagger': {
          responses: {
            200: { message: 'Collections ok' },
            400: { message: 'Bad request, check your request body' }
          }
        }
      }
    }
  }
]

export default routes
