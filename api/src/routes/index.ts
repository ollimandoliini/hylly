import { ServerRoute } from 'hapi';

// import { requestSchema } from 'src/features/hello/handler'
import { getCollectionHandler, getUserCollectionsHandler } from '../features/collections/handler'; // requestSchema
require('dotenv');

const routes: ServerRoute[] = [
  {
    method: 'GET',
    path: '/collections/{id}',
    handler: getCollectionHandler,
    // options: {
    //   tags: ['api'],
    //   description: 'Collections GET endpoint',
    //   // validate: {
    //   //   payload: requestSchema
    //   // },
    //   plugins: {
    //     'hapi-swagger': {
    //       responses: {
    //         200: { message: 'Collections ok' },
    //         400: { message: 'Bad request, check your request body' }
    //       }
    //     }
    //   }
    // }
  },
  {
    method: 'GET',
    path: '/collections/user/{id}',
    handler: getUserCollectionsHandler,
  },
];

export default routes;
