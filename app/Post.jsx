"use client"

import { Plus_Jakarta_Sans } from '@next/font/google'

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: "700",
  subsets: ["latin"],
})

export default function Post({createdDate, deletePost, textContent, id}) {
  return (
    <div className="post-bubble">
      <div className="user-info">
        <img src="./anonymous.png" className="profile-pic" />
        <p className="profile-name">Anonymous</p>
        <p className="post-date">{createdDate}</p>
        <img className="delete-post" onClick={(event) => deletePost(event, id)} src="./icon-delete.png" />
      </div>
      <h4 className={`post-text-content ${plusJakartaSans.className}`}>{textContent}</h4>
    </div>
  )
}