import { useState } from "react";

function ColorButton() {
    const [color, setColor] = useState("red");

    const changeColor = () => {
        if (color === "red"){
            setColor("blue")
        }
        else {
            setColor("red")
        }



    };

    return (
        <button onClick={changeColor}


            style={{
                backgroundColor: color,
                color: "red",
                padding: "10px",
                borderRadius: "8px"
            }}
        >
            Change Color
        </button>
    );
}

export default ColorButton;
