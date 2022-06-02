import React, {useState} from 'react';
import {MenuItems} from "./DropDownServiceItems"
import {Link} from "react-router-dom"
import "./Dropdown.css"


function DropdownServices({setDropdownService}){

    const [click, setClick] = useState(false)
    const handleClick = () =>{
        setDropdownService(false);
        setClick(!click);
    }
    return(
        <>
            <ul
            onMouseEnter={() => setDropdownService(true)}
            onMouseLeave={() => setDropdownService(false)}
            className={click ? "dropdown-menu clicked" : "dropdown-menu"}>
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