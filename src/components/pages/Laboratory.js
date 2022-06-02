import React from "react";
import "../Home.css"

function Laboratory(){
    
    
    return (
        <>
           <div className="division">
                <div className="para">
                     <h1>OUR SERVICES</h1>
                     
                </div>
                <div className="para">
                    <img src={process.env.PUBLIC_URL+"images/lab.jpg" } className="ambulance" alt="image"/>
                </div>
                <div className="para">
                    <p>
                       We have very sophisticated lab equipments
                    </p>
                </div> 
            </div>
            
        </>
    )
}

export default Laboratory;