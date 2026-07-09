import React, { useState } from 'react'

function Form1() {
    const [name , setName]= useState("")
    const [email , setEmail]= useState("")
    const [password , setPassword]= useState("")

   const Handle=()=>{

    if(name==="" || email==="" || password==="")
    {
        alert("All Required")
        return;
    }

    if(!email.includes("@"))
    {
       alert("Invalid Email")
       return;
    }

    if(password.length<6)
    {
        alert("Please 6 Character")
        return;
    }

    alert("Login Succesfully ||")


   }

  return (
<>
     <h2>Form</h2>   <br />

     <input type="text"
     value={name}
     placeholder='Enter Name'
     onChange={(e)=>setName(e.target.value)} />
     <br /> <br />

     <input type="text"
     value={email}
     placeholder='Enter Email'
     onChange={(e)=>setEmail(e.target.value)} />
     <br /> <br />

     <input type="text"
     value={password}
     placeholder='Enter Password'
     onChange={(e)=>setPassword(e.target.value)} />
     <br /> <br />

     <button onClick={Handle}>Login</button>

</>  )
}

export default Form1