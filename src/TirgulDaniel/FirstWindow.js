import React, {useEffect, useState} from "react";
import CounterEx from "./CounterEx";
import counterEx from "./CounterEx";



function FirstWindow() {
const [counter, setCounter] = useState(200);

    // useEffect(()=> {
    //     setCounter(counter);
    // },[counter]);


return (
    <div>
        <h1>my counter is {counter}</h1>
        <CounterEx a ={()=> setCounter(counter-1)}  b ={()=> setCounter(counter+1)} counter={counter}></CounterEx>
        <br/>

    </div>
);




}
export default FirstWindow;