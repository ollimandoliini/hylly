import { createServer } from '../..'

describe('helloHandler', () => {
  let server: any

  beforeEach(async () => {
    server = await createServer()
  })

  it('returns OK if the hello gets called', async () => {
    const res = await server.server.inject({
      method: 'POST',
      url: '/hello',
      payload: { message: 'hello world' }
    })

    expect(res.statusCode).toBe(200)
  })
})
