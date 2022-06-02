import React from "react";
import "../Home.css"

function Ambulance(){
    
    console.log("Ambulance");

    return (
        <>
            <div className="division">
                <div className="para">
                     <h1>OUR SERVICES</h1>
                     
                </div>
                <div className="para">
                    <img src={process.env.PUBLIC_URL+"images/ambulance.png" } className="ambulance" alt=""/>
                </div>
                <div className="para">
                    <p>
                       We have 24/7 ambulance service
                    </p>
                </div> 
            </div>
            

            
        </>
    )
}

export default Ambulance;