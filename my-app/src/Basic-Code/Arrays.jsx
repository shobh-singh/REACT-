function Arrays()
{
    const fruits=[
        "Apple", "Banana", "Orange"
    ]

    return(
        <>
        <ul>
            <h3>Fruits List</h3>
           {
            fruits.map((fruit, index)=>(
                <li>{index} - {fruit}</li>
            ))
           }
        </ul>
        </>
    )
}

export default Arrays