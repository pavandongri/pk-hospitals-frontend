import React, {useState} from 'react';
import {MenuItems} from "./DropDownTeamItems"
import {Link} from "react-router-dom"
import "./Dropdown.css"


function DropdownServices({setDropdownTeam}){

    const [click, setClick] = useState(false)
    const handleClick = () =>{
        setDropdownTeam(false);
        setClick(!click);
    }
    return(
        <>
            <ul onClick={handleClick} 
            className={click ? "drop-menu clicked" : "dropdown-menu"}>
                {MenuItems.map((item, index)=>{
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.path} onClick={()=>{handleClick()}}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default DropdownServices