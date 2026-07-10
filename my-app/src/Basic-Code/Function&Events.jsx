function FunctionEvents()
{
     
    function getName(yourname)
    {
        return yourname;
    }

    function handle()
    {
        alert("Hii vikram")
    }

    const name="Vikram"

     return(
        <>
           <h2>Hello , {getName(name)}</h2>
           <button onClick={handle}>click me</button>
        
           //inline arrow function with Events

           <button onClick={()=>alert("hiiiii vikram")}>Say Hello</button>
        </>
     )
}

export default FunctionEvents