function Example1(props)
{

    // Rule 2

    const {name , age}= props

    return(
        <>
          {/* Rule 1 */}
          {/* <h2>Name : {props.name}  -  Age: {props.age}</h2> */}

          {/* Rule 2 */}
          <h2>Hello, {name}</h2>
          <p>Age : {age}</p>
        </>
    )
}

export default Example1