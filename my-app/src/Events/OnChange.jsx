function OnChange()
{

    function handleInput(event)
    {
        console.clear()
        console.log("value : ",event.target.value )
    }

    return(
        <>
        <input type="text" placeholder="Type Somthing" onChange={handleInput} />
        </>
    )
}

export default OnChange