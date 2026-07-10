import { href } from "react-router-dom"

function Example()
{
    const isLoggedIn=true
    // if(isLoggedIn)
    // {
    //   return  <h2>Welcome User!</h2>
    // }
    // else
    // {
    //   return  <h3>Please login</h3>
    // }


    //ternary
    return(
        <>

     //ternary
      {/* {isLoggedIn ? <h1>Welcome User!!</h1> : <h2>Please login</h2> }  */}

      //Logical
      {isLoggedIn && <h2>Welcome vikram</h2>}
        </>
    )
     
}

export default  Example