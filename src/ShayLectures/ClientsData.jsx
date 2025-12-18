import { useState } from "react";
import Client121125 from "./Client121125";

// // 12.11.25

function  ClientsData(){

    const allClients = [
        {
            name : "Batya",
            phone : "0506597545",
            totalPurchases:"50"
        },
        {
            name : "Liv",
            phone : "0707070707",
            totalPurchases:"7"
        }
    ];




    return (

        <>



            {
                allClients == 0 ?

                    <div>
                        No clients Yet
                    </div>
                    :
                    <>
                        {
                            allClients.map((item,index) => {
                                return(
                                    <div key={index}>
                                        < Client121125 data = {item}/></div>
                                )


                            })



                        }
                    </>

            }


        </>
    );
}
export default ClientsData