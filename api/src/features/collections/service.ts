import * as Knex from 'knex';
import * as dotenv from 'dotenv';
dotenv.config();

const config = {
  client: 'postgres',
  connection: process.env.DATABASE_URL,
  searchPath: ['knex', 'public']
};
const pg = Knex(config);

export async function getCollection(id: string) {
  const collectionId = parseInt(id);
  const collection = await pg.raw('SELECT * from "collections" where id = ?', [collectionId]);
  return collection.rows;
}

export async function getUserCollections(userid: string) {
  const id = parseInt(userid);
  const collections = await pg.raw('SELECT * from "collections" where "userId" = ?', [id]);
  return collections.rows;
}

export async function createCollection(userId: number, title: string) {
  const newCollection = await pg.raw(
    'INSERT INTO "collections" ("userId", "title") VALUES ( :userId, :title) RETURNING *',
    { userId: userId, title: title }
  );

  return newCollection.rows;
}

export async function updateCollection(id: number, newTitle: string) {
  const updatedCollection = await pg.raw('UPDATE "collections" SET title = :title WHERE id = :id RETURNING *', {
    id: id,
    title: newTitle
  });
  return updatedCollection.rows;
}

export async function removeCollection(id: number) {
  const removeCollection = await pg.raw('DELETE FROM "collections" WHERE id = ? RETURNING *', [id]).finally(() => {
    pg.destroy();
  });
  return removeCollection;
}
