import React from  "react";


function UserCard(props){



    return(

   <div>
       <p> Name: {props.FirstName}</p>
       <p>{props.LastName}</p>
       <p>{props.Live}</p>
   </div>




    );
}
 export default UserCard
