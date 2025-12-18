
import './App.css';
import {useState} from "react";


export default function Ex1() {
    const [count, setCount] = useState(0);


    return (
        <div className="App">
            <h1> my first component </h1>
            <div> hello batya my counter is {count}</div>
            <button onClick={()=>setCount(count+1)} className="my-first-button"> counter++ </button>
            <button onClick={()=>setCount(count-1)} className="my-first-button"> counter-- </button>
        </div>
    );
}


