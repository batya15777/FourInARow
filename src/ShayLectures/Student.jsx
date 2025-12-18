
function Student(props){
    const student = props.student
     // 19.11.25

     const calculateFinalGrade =()=>{
        return((student.exam + student.exercise)/2)
     }

     const getColorByGrade =()=>{
        const grade = calculateFinalGrade()
         if (grade > 90){
             return "green"
         }
         else if (grade > 60){
             return "black"
         }
         else {
             return "red"
         }
     }



    return(


       <divb style = {{
           border:"1px solid red" ,
           padding:"10px",
           display:"flex",
           gap:20,
           marginBottom:"10px",

       }}>


           <div>Name: {student.name}</div>
           <div>Exam: {student.exam}</div>
           <div>Exercise: {student.exercise} </div>
           <div style={{color:getColorByGrade()}}>Final Grade:{calculateFinalGrade()}</div>


       </divb>
    );
}
export default Student