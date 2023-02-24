import {createPost, getAllPost} from "pages/api/users.js"

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const {posts, error} = await getAllPost()
      if (error) throw new Error(error)
      return res.status(200).json({posts})
    } catch (error) {
      return res.status(500).json({error: error.message})
    }
  }

  if (req.method === "POST") {
    try {
      console.log(req.body)
      console.log(typeof(req.body))

      const data = req.body
      const {user, error} = await createPost(data)
      if (error) throw new Error(error)
      return res.status(200).json({user})
    } catch (error) {
      return res.status(500).json({error: error.message})
    }
  }

  // if (req.method == "DELETE") {
  //   try {
  //     const {user, error} = await deletePost(data)
  //     if (error) throw new Error(error)
  //     return res.status(200).json({user})
  //   } catch (error) {
  //     return res.status(500).json({error: error.message})
  //   }
  // }
  // Delete, update
}