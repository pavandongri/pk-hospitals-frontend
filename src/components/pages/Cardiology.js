import React from "react";
import "../Home.css"





function Cardiology(){
    
    console.log("Cardiology");

    return (
        <>
            <div className="division">
                <div className="para">
                     <h1>OUR TECHNOLOGY</h1>
                     
                </div>
                <div className="para">
                    <img src={process.env.PUBLIC_URL+"images/cardiology.jpg" } className="ambulance" alt=""/>
                </div>
                <div className="para">
                    <p>
                       we have ultimate cardiology testing technology with highly qualified cardiologists available any time...
                    </p>
                </div> 
            </div>
            
        </>
    )
}

export default Cardiology;