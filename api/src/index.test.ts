import { createServer } from './index';

describe('Health check', () => {
  it('Returns 200 OK if server is working', async () => {
    const server = await createServer();

    const res = await server.server.inject({
      method: 'GET',
      url: '/'
    });

    expect(res.statusCode).toBe(200);
    expect(res.result).toEqual({ status: 'ok' });
  });
});
