import React from "react";
import "../Home.css"


function Doctors(){
    
   

    return (
        <>
            <div className="division">
                <div className="para">
                     <h1>OUR DOCTORS TEAM</h1>
                     
                </div>
                <div className="para">
                    <img src={process.env.PUBLIC_URL+"images/doctors.jpg" } className="ambulance" alt="image"/>
                </div>
                <div className="para">
                    <p>
                       Dr. Chandu (Cardiologist)
                       <br/>
                       Dr. Narasimha (Neurologist)
                       <br/>
                       Dr. Nithin (Dentist)
                    </p>
                </div> 
            </div>
            
        </>
    )
}

export default Doctors;