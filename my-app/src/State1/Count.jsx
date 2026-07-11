import React, { useState } from 'react'

const Count1 = () => {
    const[count, setCount]= useState(0)

    const Increment = () => {
      setCount(count+1)
    }

    const decrement = () => {
      setCount(count-1)
    }
    

  return (
    <>
       <button onClick={Increment}>+</button>
       <p>{count}</p>
       <button onClick={decrement}>-</button>
    </>
  )
}

export default Count1