import React, { useState } from 'react'

const Student = () => {
 
    const [student,setStudent]=useState({
        name:"Vikram",
        grade:"A",
        city:"Barmer"
    })

    const changeCity =()=>{
        setStudent({...student, city: "Mumbai"})
    }

  return (
    <>
       <h2>Name : {student.name}</h2>
       <p>Grade : {student.grade}</p>
       <p>City  : {student.city}</p>

       <button onClick={changeCity}>Change City</button>
    </>
  )
}

export default Student