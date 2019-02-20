import { logger } from 'src/logger'

export async function doHello(message: string) {
  logger.info('done: ' + message)
}
