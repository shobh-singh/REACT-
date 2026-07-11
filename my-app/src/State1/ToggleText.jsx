import React, { useState } from 'react'

const ToggleText = () => {

   const [isvisible , setIsVisible]= useState(false)

  return (
    <>
       <button onClick={()=> setIsVisible(!isvisible)}>
        {isvisible?"Hide" : "Show"} Text
       </button>

        {isvisible && <p>This is secret message</p>} 


    </>
  )
}

export default ToggleText