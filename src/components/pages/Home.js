import React from "react";
import "../Home.css"

function Home(){
    
    console.log("Home");
    const year = new Date().getFullYear();

    return (
        <>
            
            <div className="division">
                <div className="para">
                     <h1>Welcome to PK Hospitals</h1>
                     <img src={process.env.PUBLIC_URL+"images/hospitalPic.jpg" } className="hospital" alt="image"/>
                </div>
                <div className="para">
                    <p>
                        PK hospitals is an independent diagnostic centre, situated at 41, Hazra Road (Unit I) and 53, Hazra Road (Unit II), that provides distinctly superior diagnostic facilities, using the latest technology and by highly trained and experienced individuals. Over the last 20 years, QMS has earned the reputation for providing high quality professional services, dedicated to the needs and comfort of the patients and to the satisfaction of medical practitioners.
                    </p>
                </div>
            </div>

           


        </>
    )
}

export default Home;