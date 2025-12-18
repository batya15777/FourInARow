import "./GameSettings.css";
import {useState} from "react";


const COLORS =[  "red","blue","yellow","green","orange","lightblue","pink","purple"]


function GameSettings(){


    const [players,setPlayers] = useState([{id:1,name:'',color:null}
                                                                             ,{id:2,name:'',color:null}])

    const [error,setError] = useState(null)
    const [row ,setRow] = useState(null)
    const [col,setCol] = useState(null)


    const nameChack = () => {

        let nameChack = true;
        for (let  i =0; i < players.length; i++){
            if (players[i].name.trim().length ===0){
                nameChack = false
            setError("Please enter name.")

            }



        }


        return nameChack

    }



    const chackPlayColor = () => {

        let chackColor = true;

            if (players[0].color === null || players[1].color === null){
                chackColor = false
             setError("Two players must choose a color")
                return chackColor
            }
             if (players[0].color === players[1].color){
                 chackColor = false
             setError("It is forbidden to choose the same color for two players.")
                 return chackColor

             }


              return chackColor
    }


    const validatePlayerDetails = () => {

      if (!nameChack()){

          return false

      }

      if (!chackPlayColor()){
          return false

      }
      if (!rowChack()){
          return false
      }
      if (!colChack()){
          return false
      }
      else {
          setError(null)
          return true
      }

    }
    const rowChack = () => {

        if (row >=4 && row <=10){

            return true

        }else {
            setError("A row cannot be less than 4 or greater than 10.")
        }


        return false


    }
    const colChack = () => {

        if (col >=4 && col <=10){

            return true

        }else {
            setError("A column cannot be less than 4 or greater than 10.")
        }


        return false


    }
     const copyPlayerName = (index,newName) => {
        const copyArray = [...players]
        const updatedPlayerName = {...copyArray[index]}
         updatedPlayerName.name = newName
        copyArray[index] = updatedPlayerName
        setPlayers(copyArray)

    }
    const copyPlayerColor = (index,newColor) => {
        const copyArray = [...players]
        const updatedPlayerColor = {...copyArray[index]}
        updatedPlayerColor.color = newColor
        copyArray[index] = updatedPlayerColor
        setPlayers(copyArray)

    }

    return (
        <div className="settings-wrapper">
            <div className="game-settings-card">

                <h2 className="settings-title">Game Settings</h2>

                {error && <div className="error-message">{error}</div>}

                <div className="players-table">
                    <div className="players-header">
                        <span>Player</span>
                        <span>Name</span>
                        <span>Color</span>
                    </div>

                    {players.map((player, index) => (
                        <div key={player.id} className="player-row">
                            <span className="player-label">Player {player.id}</span>

                            <input
                                className="player-name-input"
                                type="text"
                                placeholder="Enter name"
                                value={player.name}
                                onChange={(e) => copyPlayerName(index, e.target.value)}
                            />

                            <div className="color-choices">
                                {COLORS.map((color) => (
                                    <button
                                        type="button"
                                        key={color}
                                        className={
                                            "color-circle" +
                                            (player.color === color ? " selected" : "")
                                        }
                                        style={{ backgroundColor: color }}
                                        onClick={() => copyPlayerColor(index, color)}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>


                <div className="board-size-row">
                    <div className="board-input-box">
                        <label>Rows</label>
                        <input
                            type="number"
                            min={4}
                            max={10}
                            onChange={(e) => setRow(Number(e.target.value))}
                        />
                    </div>

                    <div className="board-input-box">
                        <label>Columns</label>
                        <input
                            type="number"
                            min={4}
                            max={10}
                            onChange={(e) => setCol(Number(e.target.value))}
                        />
                    </div>
                </div>

                <button className="start-button" onClick={validatePlayerDetails}>
                    Start Game
                </button>
            </div>
        </div>
    );

}
export default GameSettings