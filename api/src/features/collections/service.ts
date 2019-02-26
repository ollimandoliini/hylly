import * as Knex from 'knex';
import * as dotenv from 'dotenv';
import * as humps from 'humps';
dotenv.config();

const config = {
  client: 'postgres',
  connection: process.env.DATABASE_URL,
  searchPath: ['knex', 'public']
};
const pg = Knex(config);

export async function getUserCollections(userid: string) {
  const id = parseInt(userid);
  const collections = await pg.raw('SELECT * from "collections" where "user_id" = ?', [id]);
  return collections.rows;
}
export async function getCollection(id: string) {
  const collectionId = parseInt(id);
  const collection = await pg.raw('SELECT * from "collections" where id = ?', [collectionId]);
  return humps.camelizeKeys(collection.rows[0]);
}

export async function createCollection(userId: number, title: string, description: string) {
  const newCollection = await pg.raw(
    'INSERT INTO "collections" ("user_id", "title", "description") VALUES ( :userId, :title, :description) RETURNING *',
    { userId: userId, title: title, description: description }
  );
  return humps.camelizeKeys(newCollection.rows);
}

export async function updateCollection(id: number, newUserId: number, newTitle: string, newDescription: string) {
  const updatedCollection = await pg.raw(
    'UPDATE "collections" SET "user_id" = :userId, "title" = :title, "description" = :description WHERE id = :id RETURNING *',
    {
      id: id,
      userId: newUserId,
      title: newTitle,
      description: newDescription
    }
  );
  return updatedCollection.rows;
}

export async function deleteCollection(id: string) {
  const collectionId = parseInt(id);
  const removeCollection = await pg.raw('DELETE FROM "collections" WHERE id = ? RETURNING *', [collectionId]);
  return removeCollection;
}
