import React from "react";
import "../Home.css"

function Managers(){
    
    console.log("Managers");

    return (
        <>
            <div className="division">
                <div className="para">
                     <h1>Our Managers</h1>
                     
                </div>
                <div className="para">
                    <img src={process.env.PUBLIC_URL+"images/managers.jpg" } className="ambulance" alt="image"/>
                </div>
                <div className="para">
                    <p>
                       We have kind management authority
                       <br/>
                       Pavan (Dean)
                       <br/>
                       Dongri (Chancellor)
                    </p>
                </div> 
            </div>
            
        </>
    )
}

export default Managers;