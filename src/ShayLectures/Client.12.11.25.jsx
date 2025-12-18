import { useState } from "react";
import '../App.css';


// 12.11.25

function Client121125(props){
 const client = props.data

    return(


     <div style={{border:"1px solid blue"}}>

        <div>
         Name: {client.name}
        </div>

         <div>
         Phone: {client.phone}
         <div>

         </div>
          Total purchases: {client.totalPurchases}
         </div>

         {
             client.totalPurchases > 10 &&
             <div>
                 VIP Client
             </div>

         }

     </div>



    );
}
export default Client121125;