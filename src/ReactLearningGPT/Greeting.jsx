import {useState} from "react";

function Greeting(){

    const [name,setName] = useState("")
    const [age,setAge] = useState("")

   const clear = () => {
       setName("")
       setAge("")

   }
    return(
        <>
            <input value={name} onChange={event => setName(event.target.value)} placeholder={"Name"}/>
            <br/>
            <input type={"number"} value={age} onChange={event => setAge(event.target.value)}/>
            <br/>
            <h3>hello {name} , you are {age} years old</h3>

            <br/>
            <button onClick={clear}>CLEAR</button>

        </>
    );
}

export default Greeting