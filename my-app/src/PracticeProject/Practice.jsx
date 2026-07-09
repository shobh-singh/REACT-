import React, { useState } from 'react'

function Practice() {
    const [task, Settask] = useState("")
    const [list, Setlist] =useState([])
    const addTask=()=>{
        Setlist([...list, task])
    }
  return (
    <>
      
      <div>To do app</div>
      <input type="text" 
      value={task}
      onChange={(e)=>Settask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {list.map((item, index)=>(
              <li key={index}>{item}</li>
        ))}
      </ul>
    
    </>
  )
}

export default Practice