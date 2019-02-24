import * as Hapi from 'hapi'
// import * as Joi from 'joi'
import { internal } from 'boom'
import getCollection from './service'

// export interface getCollectionPayload {
//   id: string
// }

export default async function getCollectionHandler(
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
) {
  const collectionId = request.params.id
  try {
    const collection = await getCollection(collectionId)
    return h.response({ message: 'moro', collection }).code(200)
  } catch (err) {
    return internal(err)
  }
}

// export const requestSchema = Joi.object({
//   message: Joi.string().required()
// })

// async function foo() {
//   const bar = await getCollection('2')
//   console.log(bar)
// }

// foo()
