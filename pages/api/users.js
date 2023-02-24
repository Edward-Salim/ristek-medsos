import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getAllPost() {
  try {
    const posts = await prisma.post.findMany()
    return { posts }
  } catch (error) {
    return { error }
  }
}

export async function createPost(thePost) {
  try {
    const postsFromDB = await prisma.post.create({data: thePost})
    return { post: postsFromDB }
  } catch (error) {
    return { error }
  }
}

// export async function deletePost(user) {
//   try {
//     const userFromDB = await prisma.user.delete()
//   } catch (error) {
//     return {error}
//   }
// }

// {
// 	"name": "ewod",
// 	"writtenPosts": [
// 			{"textContent": "maklo"}
// 		]
// }