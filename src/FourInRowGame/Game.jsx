import "./Game.css";
import {useState} from "react";


function Game (){
    //3 המשתנים האלה זמניים אחכ אני צריכה לקבל props ולהפוך לדינאמי אני עושה כרגע בשביל הבדיקות שזה עובד
    const [players,setPlayers] = useState([{id:1,name:'kk',color:"red",playCount:"",winCount:0}
        ,{id:2,name:'',color:"green",playCount:"",winCount:0}])
    const [row ,setRow] = useState(null)
    const [col,setCol] = useState(null)


 // לא לשכוח בכל הלולאות שרצות לי בתוכנית איפה שיש 6 להחליף ל row ואיפה שיש לי 7 להחליף ל coll
 const creatBord = (rows,columns)=> {
      const newBord = [];
      for (let i = 0; i < 6;i++){
          const row = [];
          for (let j = 0; j < 7;j++){
              row.push({value:null,color:null})

          }
          newBord.push(row)

      }


      return newBord

 }

    const [board , setBoard] = useState(creatBord())

    // פה אני מרחיבה את האובייקט מהקומפננטה של ההגדרות ואני מוסיפה עליו את התוספות שמתאימות לקומפנננטה הזו לבדוק אם זה הרחבה נכונה
    // const fullPlayer = players.map(player=>({
    //     ...player,
    //     playCount:"",
    //     winCount:""
    //
    //
    // }));

    const [historyGame,setHistoryGame] = useState([
        {rowIndex:null,colIndex:null,color:null}
    ])
    const [currenPlayer,setCurrentPlayer] = useState(players[0])
    const [winner,setWinner] = useState(null)


    const gameMove = (rowIndex,colIndex)=>{
     if (winner!==null) return

        drowPlayer(rowIndex,colIndex)
        console.log("notError")
        // פה בהמשך יבוא הפונקצה הכללית שמזמנת את כל הפונקציות של הבדיקות
       if (checkWinner(rowIndex,colIndex)){
           setWinner(currenPlayer)
       }
       else {
           setCurrentPlayer(currenPlayer === players[0]?  players[1]: players[0])

           }




   }




   const drowPlayer =(rowIndex,colIndex)=>{
     const newBoard = [...board];
     if (newBoard[rowIndex][colIndex].value !== null)  return;

       for (let i = 5; i >= 0;i--){
         if (newBoard[i][colIndex].value === null){
             newBoard[i][colIndex].value = currenPlayer.color

             // אני אני אזמן פונקציה שמוסיפה 1 לשחקן ששיחק

             addToOunPlayer(rowIndex,colIndex)

             // מוסיפה להמערך של ההיסטוריה שישמור לי במקרה של undo
             historyGame.push(newBoard[i][colIndex].value)
             console.log("history" + historyGame)
             break

         }

     }
       setBoard(newBoard)



   }







    const checkWinner = (rowIndex,colIndex)=>{
        if (colVictoryCheck(colIndex)){
            addToOunWin()
        }
        if  (rowVictoryCheck(rowIndex)){
            addToOunWin()
        }
        if (checkRightDiagonal()){
            addToOunWin()

        }
        if (checkLeftDiagonal()){
            addToOunWin()

        }



    }

 const colVictoryCheck = (colIndex) => {
     let count = 0;
     for (let i = 0; i < 6; i++) {
         if (board[i][colIndex].value !== null ) {
             if (board[i][colIndex].value === currenPlayer.color){
                 count++;


             }
             else {
                 count =  0
             }

         }
         if ( count === 4){
             return true
             break;
         }

     }

 }



    const rowVictoryCheck = (rowIndex) => {
        let count = 0;
        for (let j = 0; j < 6; j++) {
            if (board[rowIndex][j].value !== null ) {
                if (board[rowIndex][j].value === currenPlayer.color){
                    count++;


                }
                else {
                    count =  0
                }
            }
            if ( count === 4){
                return true
                break

            }

        }
   }
    const checkRightDiagonal = () =>{
        let count = 0;
        for (let i = 0; i < 6;i++){
            for (let j = 0; j < 7;j++) {
                if (board[i][j].value ===currenPlayer.color){
                    count++;


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
        for (let i = 0; i < 6;i++){
            for (let j = 7; j <= 0;j--) {
                if (board[i][j].value ===currenPlayer.color){
                    count++;


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




    // לבדוק עם אביה אם צריך לשתמש פה בuseEffect
    const addToOunPlayer =(rowIndex,colIndex)=>{


        for (let i = 0 ; i < players.length;i++){

            if (players[i].id === currenPlayer.id){

                players[i].playCount++
                console.log(players[i])
                break




            }


        }
    }
    // כנ״ל
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
                <div onClick={resetBoard}>RESET</div>

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
            </div>

        </div>











    );

}
export default Game
