import React from "react";
import "../Home.css"

function ContactUs(){
    return (
        <>
            <div className="division">
                <div className="para">
                     <h1>OUR CONTACTS</h1>
                     
                </div>
                <div className="para">
                    <img src={process.env.PUBLIC_URL+"images/telephone.png" } className="ambulance" alt=""/>
                </div>
                <div className="para">
                    <p>
                        Hospital Landline : 1234567
                        <br/>
                        Supervisor : 654321
                        <br/>
                        Gmail : pkhospitals@gmail.com
                    </p>
                </div> 
            </div>
        </>
    )
}

export default ContactUs;