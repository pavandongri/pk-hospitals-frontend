import React from "react";
import "../Home.css"




function Radiology(){
    
    console.log("Radiology");

    return (
        <>
            <div className="division">
                <div className="para">
                     <h1>OUR TECHNOLOGY</h1>
                     
                </div>
                <div className="para">
                    <img src={process.env.PUBLIC_URL+"images/radiology.jpg" } className="ambulance" alt=""/>
                </div>
                <div className="para">
                    <p>
                       we have high precision and high accuracy radiology technology...
                       24/7 service is available 
                    </p>
                </div> 
            </div>
            
        </>
    )
}

export default Radiology;