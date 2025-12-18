import React, {useState} from "react";
import HelloUser from "../ReactLearningGPT/HelloUser";


const FirstPractice = ()=>{

const [name,setName] = useState('');
const [print, setPrint] = useState("")

    const showOnScreen = ()=>{
    setPrint(name)
    };

    const showArlet = ()=>{
       alert(name)
    };
    const showConsol = ()=>{
        console.log(name)
    };




   return(
<div>
    <h1> {name}</h1>
    <input value={name} onChange={(e)=>setName(e.target.value)}/>הקלד את השם שלך
    <br/>

    {/*<button onClick={showOnScreen}> הצג את השם על המסך </button>*/}
    <br/>
    <button onClick={showArlet}> הצג את השם בהודעה קופצת</button>
    <br/>

    <button onClick={showConsol}> הצג את השם על הקונסול </button>



</div>
);




}


export default FirstPractice;