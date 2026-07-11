import React, { useState } from 'react'

const UserProfile = () => {

  const [name , setName] = useState("Shobh")
  const [age , setAge] = useState(18)


  return (
    <>
      
      <h2>Name : {name}</h2>
      <h3>Age  : {age}</h3>

      <button onClick={()=>setName("Vikram")}>Change Name</button>
      <button onClick={()=>setAge(age+1)}>Change Age</button>

    </>
  )
}

export default UserProfile