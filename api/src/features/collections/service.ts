const db = process.env.DATABASE_URL
const pg = require('knex')({
  client: 'pg',
  connection: db,
  searchPath: ['knex', 'public']
})

export default async function getCollection(id: string) {
  try {
    const collectionId = parseInt(id)
    const collection = await pg
      .raw('SELECT * from "collections" where id = ?', [collectionId])
      .finally(() => {
        pg.destroy()
      })
    return collection.rows
  } catch (err) {
    return err
  }
}
// export async function getUserCollections(userid: string) {
//   try {
//     const id = parseInt(userid)
//     const collections = await pg
//       .raw('SELECT * from "collections" where "userId" = ?', [id])
//       .finally(() => {
//         pg.destroy()
//       })
//     return collections.rows
//   } catch (err) {
//     return err
//   }
// }

// async function foo() {
//   const bar = await getCollection('2')
//   console.log(bar)
// }
// foo()

// export async function createCollection(userId: number, title: string) {
//   try {
//     const newCollection = await pg
//       .raw(
//         'INSERT INTO "collections" ("userId", "title") VALUES ( :userId, :title) RETURNING *',
//         { userId: userId, title: title }
//       )
//       .finally(() => pg.destroy())
//     return newCollection.rows
//   } catch (error) {
//     internal(error)
//   }
// }

// export async function updateCollection(id: number, newTitle: string) {
//   try {
//     const updatedCollection = await pg
//       .raw(
//         'UPDATE "collections" SET title = :title WHERE id = :id RETURNING *',
//         {
//           id: id,
//           title: newTitle
//         }
//       )
//       .finally(() => {
//         pg.destroy()
//       })
//     return updatedCollection.rows
//   } catch (error) {
//     internal(error)
//   }
// }

// export async function removeCollection(id: number) {
//   try {
//     const removeCollection = await pg
//       .raw('DELETE FROM "collections" WHERE id = ? RETURNING *', [id])
//       .finally(() => {
//         pg.destroy()
//       })
//     return removeCollection
//   } catch (error) {
//     internal(error)
//   }
// }
