import { ServerRoute } from 'hapi';

import { newCollectionSchema, updateCollectionSchema } from 'src/features/collections/handler';
import {
  serverHealthHandler,
  getCollectionHandler,
  getUserCollectionsHandler,
  createCollectionHandler,
  updateCollectionHandler,
  deleteCollectionHandler
} from '../features/collections/handler'; // requestSchema
import { getCollectionItemsHandler } from 'src/features/items/handler';
// import { request } from 'https';
// import { HeapInfo } from 'v8';
require('dotenv');

const routes: ServerRoute[] = [
  {
    method: 'GET',
    path: '/',
    handler: serverHealthHandler
  },
  {
    method: 'GET',
    path: '/collections/user/{id}',
    handler: getUserCollectionsHandler
  },
  {
    method: 'GET',
    path: '/collections/{id}',
    handler: getCollectionHandler
  },
  {
    method: 'POST',
    path: '/collections/',
    handler: createCollectionHandler,
    options: {
      validate: {
        payload: newCollectionSchema
      }
    }
  },
  {
    method: 'PUT',
    path: '/collections/',
    handler: updateCollectionHandler,
    options: {
      validate: {
        payload: updateCollectionSchema
      }
    }
  },
  {
    method: 'DELETE',
    path: '/collections/{id}',
    handler: deleteCollectionHandler
  },
  { method: 'GET', path: '/items/{collectionId}', handler: getCollectionItemsHandler }
];

export default routes;
