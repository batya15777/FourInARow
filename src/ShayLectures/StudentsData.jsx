import Student from "./Student";
import student from "./Student";
// 19.11.25


function StudentsData(){
     const allStudents = [
   {
        name:"Batya",
        exam:100,
        exercise:100
    },

    {
             name:"lin",
             exam:70,
             exercise:80
    },

    {
             name: "darya",
             exam: 30,
    exercise:20
    }]




 return (
     <>
         {
        allStudents.map((item) =>{
         return(
            <div>
                <Student student = {item}/>
            </div>

             )


         })

         }




     </>


 ) ;


}
export default StudentsData