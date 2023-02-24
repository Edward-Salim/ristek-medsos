"use client"

import { useEffect, useState } from 'react'
import Post from "./Post"

export default function Home() {
  const [allPosts, setAllPosts] = useState([])
  //Nyimpan 1 post
  const [post, setPost] = useState({
    textContent: "",
  })

  // Mendapatkan data dari "/api" berupa "Array"
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setAllPosts(data.users))
  }, [])

  useEffect(() => {
    fetch("/api", {
      method: "POST",
      body: JSON.stringify(post)
    })
      .then((res) => res.json())
  }, [allPosts])

  //Klo textarea diedit nanti value "post" berubah sesuai props
  function handleChange(event) {
    const date = new Date()
    const { name, value } = event.target
    setPost(prevPost => ({
      ...prevPost,
      [name]: value, //Ubah textContent maksudnya ke value baru textarea
    }))
  }

  //Klo submit textarea / pencet tombol post
  function handlePost() {
    setAllPosts(prevAllPosts => [...prevAllPosts, post]);
    (document.querySelector(".textarea")).value = "";
  }
  
  function deletePost(postId) {
    // Fungsi ini kepanggil di component Post supaya tau id sendirinya apa aja
    setAllPosts(prevAllPosts => prevAllPosts.filter(post => postId !== post.id))
  }

  //Biar munculin post ke website sesuai dengan berapa banyak post
  const allPostsArr = [...allPosts]
  const timeline = allPostsArr.map(postObj => {
    return (
      <Post
        textContent={postObj.textContent}
        createdDate={postObj.createdDate}
        id={postObj.id}
        deletePost={deletePost}
      />
    )
  }).reverse() //Reverse biar selalu post baru ada diatas

  return (
    <>
      <h1 className="greetings">Welcome back, <br></br><span className="account-name">@Anonymous</span></h1>
      <div className="input-container">
        <textarea
          className="textarea"
          placeholder="What's happening?"
          onChange={handleChange}
          name="textContent"
        />
        <div className="btn-container">
          <button className="close-friends-btn">Edit Close Friends <img src="./icon-close-friends.png" /></button>
          <button className="post-btn" onClick={handlePost}>Post <img src="./icon-post.png" /></button>
        </div>
      </div>
      {timeline}
    </>
  )
}