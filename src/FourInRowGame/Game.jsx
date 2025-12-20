import "./Game.css";
import {useState} from "react";
import counterEx from "../TirgulDaniel/CounterEx";


function Game ({players,setPlayers,row,col}){




 const creatBord = ()=> {
      const newBord = [];
      for (let i = 0; i < row;i++){
          const row = [];
          for (let j = 0; j < col;j++){
              row.push({value:null})

          }
          newBord.push(row)

      }


      return newBord

 }

    const [board , setBoard] = useState(creatBord())
    const [currenPlayer,setCurrentPlayer] = useState(players[0])
    const [winner,setWinner] = useState(null)




    const gameMove = (rowIndex,colIndex)=>{
        if (winner!==null) return

        const index = drawPlayer(rowIndex,colIndex)
        if (index === null) return;
        if (checkWinner(index,colIndex)){
           setWinner(currenPlayer.name)
        }
         else {
           setCurrentPlayer(currenPlayer === players[0]?  players[1]: players[0])

         }




   }




     const drawPlayer =(rowIndex,colIndex)=>{
     let index = null
     const newBoard = [...board];
     if (newBoard[rowIndex][colIndex].value !== null)  return null;


       for (let i = row -1; i >= 0;i--){
         if (newBoard[i][colIndex].value === null){
             newBoard[i][colIndex].value = currenPlayer.color
             index = i
             addToOnePlayer(rowIndex,colIndex)
             break

         }

     }
       setBoard(newBoard)
         console.log("index (landed row) =", index);

         return index


   }







    const checkWinner = (rowIndex,colIndex)=>{

        if (colVictoryCheck(colIndex)){
            addToOunWin()
            return true
        }

         else if  (rowVictoryCheck(rowIndex)){
             addToOunWin()
             return true
        }
        else if (checkRightDiagonal()){
            addToOunWin()
            return true

        }
        else if (checkLeftDiagonal()){
            addToOunWin()
            return true


        }

            return false


    }

 const colVictoryCheck = (colIndex) => {
     let count = 0;
     for (let i = 0; i < row; i++) {
         if (board[i][colIndex].value !== null ) {

             if (board[i][colIndex].value === currenPlayer.color){
                 count++;

             }
             else {
                 count =  0
             }

         }

         if ( count === 4){
             console.log("winCol")

             return true
             break;
         }

     }

 }



    const rowVictoryCheck = (rowIndex) => {
        let count = 0;

        for (let j = 0; j < col; j++) {

            if (board[rowIndex][j].value !== null) {
                if (board[rowIndex][j].value === currenPlayer.color){

                    count++;

                }
                else {
                    count =  0
                }
            }
            if ( count === 4){

                console.log("winRow")

                return true
                break

            }

        }
   }
    const checkRightDiagonal = () =>{


        let count = 0;
        for (let i = 0; i < row -1;i++){

            for (let j = 0; j < col;j++) {
                if (board[i][j].value === currenPlayer.color && board[i+1][j+1].value === currenPlayer.color) {
                    count++;


                }
                else {
                    count = 0
                }
            }
            if (count === 4){
                return true
                break

            }


        }



    }
    const checkLeftDiagonal = () =>{
        let count = 0;
        for (let i = 0; i < row;i++){
            for (let j = col; j <= 0;j--) {
                if (board[i][j].value === currenPlayer.color){
                    count++;
                }
                else {
                    count = 0
                }

            }
            if (count === 4){
                return true
                break
            }


        }



    }
    const resetBoard = () =>{

        setWinner(null)
        setBoard(creatBord())
        setCurrentPlayer(players[0])
        for (let  i =0; i<players.length;i++){
            players[i].playCount = ""
        }




    }
    const undo = () =>{




    }




    const addToOnePlayer =(rowIndex,colIndex)=>{


        for (let i = 0 ; i < players.length;i++){

            if (players[i].id === currenPlayer.id){

                players[i].playCount++
                console.log(players[i])
                break




            }


        }
    }
    const addToOunWin =()=>{
        for (let i = 0 ; i < players.length;i++){
            if (players[i].id === currenPlayer.id){
                players[i].winCount++
                console.log(players[i])

            }


        }
    }





    return(


        <div className="board-container">
            <h1>Four in a row game</h1>
            <div className="board-row">
                {/* Statistics */}
                <div className="stats-card">
                    <h2>Statistics</h2>

                    <table className="stats-table">
                        <thead>
                        <tr>
                            <th>Player</th>
                            <th>Moves</th>
                            <th>Wins</th>
                        </tr>
                        </thead>

                        <tbody>
                        {players.map(p => (
                            <tr key={p.id} className={p.id === currenPlayer.id ? "is-turn" : ""}>
                                <td>
                                    <span className="colorDot" style={{ background: p.color }} />
                                    {p.name || `Player ${p.id}`}
                                    {p.id === currenPlayer.id && <span style={{ marginLeft: 8 }} className="turnBadge">TURN</span>}
                                </td>
                                <td>{p.playCount || 0}</td>
                                <td>{p.winCount || 0}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                {/* Board */}
                <div
                    className="board-grid"
                    style={{ "--cols": board[0]?.length || 7 }}
                >
                    {board.map((row, r) =>
                        row.map((cell, c) => (
                            <div
                                key={r + "-" + c}
                                className="board-cell"
                                onClick={() => gameMove(r, c)}
                                style={{ ["--cell-color"]: cell.value ?? "#e5e7ff" }}
                            />
                        ))
                    )}
                </div>
                <button className="reset-button" onClick={resetBoard}>RESET</button>

            </div>
            {
                winner !== null &&
                <div className="winner-banner">
                    🏆 The winner is: <span>{winner}</span>
                </div>
            }

        </div>











    );

}
export default Game
