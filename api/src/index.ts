// tslint:disable no-var-requires
require('app-module-path').addPath(require('path').join(__dirname, '../'))
require('dotenv').config({
  path: `${process.cwd()}/.env`
})
// tslint:enable no-var-requires

import * as Hapi from 'hapi'

import { HOST, PORT } from './constants'
import getPlugins from './config/plugins'
import routes from './routes'

export async function createServer() {
  const server = new Hapi.Server({
    host: HOST,
    port: PORT,
    routes: {
      cors: { origin: ['*'] }
    }
  })

  await server.register(getPlugins())

  async function stop() {
    await server.stop()
    server.log('info', 'Server stopped')
  }

  async function start() {
    await server.start()
    server.log('info', `Server started on ${HOST}:${PORT}`)
  }

  server.route(routes)

  return { server, start, stop }
}

if (require.main === module) {
  createServer().then(server => server.start())
}
