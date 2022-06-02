import React, {useEffect, useRef} from "react"
import ReactToPrint from "react-to-print";

import "./Patient.css"

function  PatientDetails(props){

    useEffect(()=>{

    },[]);

    const componentRef  = useRef(null);

    return (       
        <>
            <div className="container">
                
                
                {/* <div ref = {el =>(componentRef = el)} /> */}
                <div ref={componentRef} className="page">
                    <div className="something">
                        <div className="Heading">
                            <h1>PK Hospitals</h1>
                            <h2>Health Report</h2>
                        </div>
                        <div className="patientDetails">
                            <p><span className="details">Name</span>: {props.name} </p>
                            <p><span className="details">Date of Birth</span>: {props.dob}</p>
                            <p><span className="details">Phone Number</span>: {props.ph}</p>
                        </div>

                    </div>
                    <hr></hr>
                    <div className="Description">
                    <p>This is to certify that <span className="pop">{props.name}</span> has been admitted in this hospital from 01-January-2022 to         10-January-2022.  He was suffering from <span className="pop" > corona </span>. He was diagnoised by the Dr. xyz.
                        He was discharged from hospital on 11-January-2022
                    </p>
                    </div>
                    <p className="signature">Signature: .....</p>


                        
                    {/* <a >
                        <button>button</button>
                    </a> */}
                </div>

                <ReactToPrint
                    trigger = {()=>
                        <button className="button">Download Health Report</button>
                    }
                    content = {()=>componentRef.current}
                />
            </div>
           


        </>
    
    )
}


export default PatientDetails;