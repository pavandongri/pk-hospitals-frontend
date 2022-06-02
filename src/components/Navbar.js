import React, { useState } from 'react';
import  Button  from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import DropdownServices from './DropdownServices';
import DropdownTechnology from './DropDownTechnology.js';
import DropdownTeam from "./DropDownTeam"

function Navbar() {
  const [click, setClick] = useState(false);

  const [dropdownService, setDropdownService] = useState(false);
  const [dropdownTeam, setDropdownTeam] = useState(false);
  const [dropdownTechnology, setDropdownTechnology] = useState(false);
  

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnterService = () => {
    setDropdownService(true);
  };

  const onMouseLeaveService = () => {
    setDropdownService(false);
  };
  const onMouseEnterTechnology = () => {
    setDropdownTechnology(true);
  };

  const onMouseLeaveTechology = () => {
    setDropdownTechnology(false);
  };

  const onMouseEnterTeam = () => {
    setDropdownTeam(true);
  };

  const onMouseLeaveTeam = () => {
    setDropdownTeam(false);
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          PK HOSPITALS
        </Link>

        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>


          <li //services
            className='nav-item'
            onMouseEnter={onMouseEnterService}
            onMouseLeave={onMouseLeaveService}
          >
            <div
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <i className='fas fa-caret-down' />
            </div>
            {dropdownService && <DropdownServices setDropdown={setDropdownService} />}
          </li>




          <li //technology
            className='nav-item'
            onMouseEnter={onMouseEnterTechnology}
            onMouseLeave={onMouseLeaveTechology}
          >
            <div
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Technologies <i className='fas fa-caret-down' />
            </div>
            {dropdownTechnology && <DropdownTechnology setDropdown={setDropdownTechnology} />}
          </li>

          <li //Team
            className='nav-item'
            onMouseEnter={onMouseEnterTeam}
            onMouseLeave={onMouseLeaveTeam}
          >
            <div
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Our Team <i className='fas fa-caret-down' />
            </div>
            {dropdownTeam && <DropdownTeam setDropdown={setDropdownTeam} />}
          </li>


          <li className='nav-item'>
            <Link
              to='/contactUs'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>




          <li>
            <Link
              to='/signUp'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Login In
            </Link>
          </li>

          
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;