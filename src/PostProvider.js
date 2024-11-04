import React, { createContext } from 'react'



const PostContext= createContext()
function PostProvider() {


  return (
    <div>PostProvider</div>
  )
}

export default PostProvider