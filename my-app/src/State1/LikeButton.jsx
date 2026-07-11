import React, { useState } from 'react'

const LikeButton = () => {

   const [liked , setLiked]= useState(false)

  return (
    <>
       <button onClick={()=> setLiked(!liked)}>
        {liked?"❤️ Liked" : "🤍 like"} Text
       </button>

 


    </>
  )
}

export default LikeButton