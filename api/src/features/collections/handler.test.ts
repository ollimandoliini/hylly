import { createServer } from '../..';
import * as dotenv from 'dotenv';
import * as Knex from 'knex';

dotenv.config();

const config = {
  client: 'postgres',
  connection: process.env.DATABASE_URL,
  searchPath: ['knex', 'public']
};
const pg = Knex(config);

async function migrateDownAndUp() {
  await pg.migrate.rollback();
  await pg.migrate.latest();
}

describe('POST /collection/', () => {
  let server: any;
  const testPayload = { userId: 1, title: 'test', description: 'test' };

  beforeEach(async () => {
    migrateDownAndUp();
    server = await createServer();
  });
  afterEach(async () => {
    migrateDownAndUp();
  });

  it('returns created collection if succesful', async () => {
    const res = await server.server.inject({
      method: 'POST',
      url: '/collections/',
      payload: testPayload
    });
    expect(res.statusCode).toBe(200);
    expect(res.result[0]).toMatchObject(testPayload);
  });
});

describe('GET /collection/', () => {
  let server: any;

  beforeEach(async () => {
    migrateDownAndUp();
    server = await createServer();
  });
  afterEach(async () => {
    migrateDownAndUp();
  });
  it('returns created collection if succesful', async () => {
    const res = await server.server.inject({
      method: 'GET',
      url: '/collections/1'
    });

    expect(res.statusCode).toBe(200);
    expect(res.result).toMatchObject({ id: 1, userId: 1, title: 'test', description: 'test' });
  });
});
