import * as Hapi from 'hapi';
// import * as Joi from 'joi'
import { getCollection, getUserCollections } from './service';

// export interface getCollectionPayload {
//   id: string
// }

export async function getCollectionHandler(
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
) {
  const collectionId = request.params.id;
  const collection = await getCollection(collectionId);
  return h.response({ message: 'moro', collection }).code(200);
}
export async function getUserCollectionsHandler(
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
) {
  const collectionId = request.params.id;
  const collection = await getUserCollections(collectionId);
  return h.response({ message: 'moro', collection }).code(200);
}

// export const requestSchema = Joi.object({
//   message: Joi.string().required()
// })
