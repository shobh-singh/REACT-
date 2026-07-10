function OnMouseOver_OnDoubleClick()
{

    function handleMouseOver()
    {
        console.log("mouse is over text")
    }

    function handleDoubleClick()
    {
        console.log("Double Click")
    }

  return(
    <>
    <p onMouseOver={handleMouseOver}  onDoubleClick={handleDoubleClick}>nkjf fdjfjdhf dnkf</p>
    </>
  )
}

export default OnMouseOver_OnDoubleClick