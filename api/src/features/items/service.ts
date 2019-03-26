import * as Knex from 'knex';
import * as dotenv from 'dotenv';
// import * as humps from 'humps';
dotenv.config();

const config = {
  client: 'postgres',
  connection: process.env.DATABASE_URL,
  searchPath: ['knex', 'public']
};
const pg = Knex(config);

export async function getCollectionItems(collectionId: string) {
  const id = parseInt(collectionId);
  const items = await pg.raw('SELECT * from "items" where "collection_id" = ?', [id]);
  return items.rows;
}
