import React, {useEffect, useState} from "react";


function CounterEx(props) {

    const [counter, setCounter] = useState(props.counter)
    const incrementCounter = (bool) => {
        // bool === true ? setCounter(counter +1) : setCounter(counter -1);

        if(bool === true){
            setCounter(counter+1);
            props.b();
        }
        else{
            setCounter(counter - 1);
            props.a();
        }

    }

    // useEffect(() => {
    //     // setTimeout(() => {
    //         setCounter((count) => count + 1);
    //     // }, 1000);
    // });




    return (
        <>
            <button onClick={()=>incrementCounter(true)}>increment</button>
            <h1>{counter}</h1>
            <button onClick={()=>incrementCounter(false)}>decrement</button>

        </>
    );
}
export default CounterEx