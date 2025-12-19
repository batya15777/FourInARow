
import Game from "./FourInRowGame/Game";
import {useState} from "react";
import GameSettings from "./FourInRowGame/GameSettings";

export default function App() {
    const[startGame , setStartGame] = useState(false);

    const [players,setPlayers] = useState(
        [{id:1,name:'player1',color:"red",playCount:"",winCount:0}
                 ,{id:2,name:'player2',color:"yellow",playCount:"",winCount:0}])

    const [row ,setRow] = useState(6)
    const [col,setCol] = useState(7)





    return(

       <>

    <div>

        <div>
            {
                startGame ? <Game
                    players = {players} setPlayers = {setPlayers}
                    row = {row}
                    col ={col}
                    /> :<GameSettings
                    players = {players} setPlayers = {setPlayers}
                    row = {row} setRow = {setRow}
                    col = {col} setCol = {setCol}
                    setStartGame = {setStartGame}


                />

            }

        </div>

    </div>


      </>
)

}

