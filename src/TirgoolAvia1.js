import './App.css';
import {useState} from "react";




export default function TirgoolAvia1(){

    const [UserName, setUserName] = useState("");
    const [Name, setName] = useState("");
    const [LName, setLName] = useState("");
    const [Phone, setPhone] = useState("");
    const [Email, setEmail] = useState("");
    const [City, setCity] = useState("");

    const [userNameError, setUserNameError] = useState("");
    const [nameError, setNameError] = useState("");
    const [lNameError, setLNameError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [cityError, setCityError] = useState("");

    function checkInput(){
        var x = true;
        if(UserName.length ==0 )
        {
            x=false;
            setUserNameError( "Please enter a name")

        }
        if(Name.length ==0 )
        {
            x=false;
            setNameError("Please enter a name");
        }
        if(LName.length ==0 )
        {
            x=false;
            setLNameError("Please enter a Last name");
        }
        if(Phone.length ==0 )
        {
            x=false;
            setPhoneError("Please enter a phone number");
        }
        if(Email.length ==0 )
        {
            x=false;
            setEmailError("Please enter a email");
        }
        if(City.length ==0 )
        {
            x=false;
            setCityError("Please enter a city");
        }
        if(x == true)
        {
            alert("success");
            console.log(UserName+" "+ Name+" "+LName+" "+Phone+""+Email+""+City);
        }

    }


    return (
        <div className="App">

            <input onChange={(e)=>setUserName(e.target.value)}placeholder="שם משתמש"
            />שם משתמש
            <br/>
            {userNameError && <label style={{ color: "red" }}>{userNameError}</label>}
            <br/>

            <input onChange={(e)=>setName(e.target.value)}placeholder="שם פרטי"
            />שם פרטי
            <br/>
            {nameError && <label style={{color: "red"}}>{nameError}</label> }
            <br/>
            
            <input onChange={(e)=>setLName(e.target.value)}/>  שם משפחה
            <br/>
            <input type="number" onChange={(e)=>setPhone(e.target.value)}/> מספר פלאפון
            <br/>
            <input onChange={(e)=>setEmail(e.target.value)}/> כתובת מייל
            <br/>
            <input onChange={(e)=>setCity(e.target.value)}/>  עיר מגורים
            <br/>


            <button onClick={checkInput}> שלח </button>


        </div>

    );
}