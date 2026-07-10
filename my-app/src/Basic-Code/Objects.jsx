function Objects()
{
    const user ={
        "firstName": "Vikram",
        "lastName":  "Singh",
        "age"      :20
    }

    return(
        <>
        <h3>person details</h3>
        <p>First Name :{user.firstName}</p>
        <p>Last Name  :{user.lastName}</p>
        <p>Age        :{user.age}</p>
        </>
    )
}

export default Objects