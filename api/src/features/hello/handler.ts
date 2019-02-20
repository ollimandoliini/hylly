import * as Hapi from 'hapi'
import * as Joi from 'joi'
import { internal } from 'boom'

import { doHello } from './service'

export interface HelloPayload {
  message: string
}

export default async function helloHandler(
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
) {
  const payload = request.payload as HelloPayload
  try {
    await doHello(payload.message)
  } catch (err) {
    return internal(err)
  }

  return h.response({ message: 'Hello ok' }).code(200)
}

export const requestSchema = Joi.object({
  message: Joi.string().required()
})
