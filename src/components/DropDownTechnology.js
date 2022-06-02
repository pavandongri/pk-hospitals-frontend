import React, {useState} from 'react';
import {MenuItems} from "./DropDownTechnologyItems.js"
import {Link} from "react-router-dom"
import "./Dropdown.css"


function DropdownTechnology({setDropdown}){


    const [click, setClick] = useState(false)
    const handleClick = () =>{
        setDropdown(false);
        setClick(!click);
    }
    return(
        <>
            <ul onClick={handleClick} 
            className={click ? "drop-menu clicked" : "dropdown-menu"}>
                {MenuItems.map((item, index)=>{
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.path} onClick={()=>{handleClick(false)}}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default DropdownTechnology