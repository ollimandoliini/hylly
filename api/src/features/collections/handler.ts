import * as Hapi from 'hapi';
import * as Joi from 'joi';
import { getCollection, getUserCollections, createCollection, updateCollection, deleteCollection } from './service';
import { NewCollectionRequest, UpdateCollectionRequest } from '../../interfaces/collectionrequest';

export async function serverHealthHandler(request: Hapi.Request, h: Hapi.ResponseToolkit) {
  return h.response({ status: 'ok' }).code(200);
}

export async function getUserCollectionsHandler(request: Hapi.Request, h: Hapi.ResponseToolkit) {
  const collectionId = request.params.id;
  const collection = await getUserCollections(collectionId);
  return h.response(collection).code(200);
}
export async function getCollectionHandler(request: Hapi.Request, h: Hapi.ResponseToolkit) {
  const collectionId = request.params.id;
  const collection = await getCollection(collectionId);
  return h.response(collection).code(200);
}
export async function createCollectionHandler(request: NewCollectionRequest, h: Hapi.ResponseToolkit) {
  const userId = request.payload.userId;
  const title = request.payload.title;
  const description = request.payload.description;

  const newCollection = await createCollection(userId, title, description);
  return h.response(newCollection).code(200);
}
export async function updateCollectionHandler(request: UpdateCollectionRequest, h: Hapi.ResponseToolkit) {
  const id = request.payload.id;
  const userId = request.payload.userId;
  const title = request.payload.title;
  const description = request.payload.description;

  const newCollection = await updateCollection(id, userId, title, description);
  return h.response(newCollection).code(200);
}
export async function deleteCollectionHandler(request: Hapi.Request, h: Hapi.ResponseToolkit) {
  const collectionId = request.params.id;
  const collection = await deleteCollection(collectionId);
  return h.response(collection).code(204);
}

export const newCollectionSchema = Joi.object({
  userId: Joi.number().required(),
  title: Joi.string().required(),
  description: Joi.string()
});

export const updateCollectionSchema = Joi.object({
  id: Joi.number().required(),
  userId: Joi.number().required(),
  title: Joi.string().required(),
  description: Joi.string()
});
