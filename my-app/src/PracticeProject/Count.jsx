import React, { useState } from 'react'

function Count() {
    const [count, setCount] = useState(0)

    const Increment=()=>{
        setCount(count+1)
    }

    const Decrement=()=>{
        setCount(count-1)
    }

    const Reset=()=>{
        setCount(0)
    }
  return (
    <>
    <h2>{count}</h2>
    <button onClick={Increment}>+</button>
    <button onClick={Decrement}>-</button>
    <button onClick={Reset}>Reset</button>
    </>
  )
}

export default Count