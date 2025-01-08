import React from 'react'
import { Link } from 'react-router-dom'; // Importing from react-scroll
import { useState } from 'react'
import './header.css'

//Importing icons and images for use
import logo from '../../Assets/UI ASS icons/Logo.svg'

import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';

export default function Header() {
  const [active, setActive] = useState('navBar');

  // Function to toggle navBar
  const showNav = () => {
    setActive('navBar activeNavbar');
  };

  // Function to close navBar
  const removeNav = () => {
    setActive('navBar');
  };

  // This is the code to add background color to the header
  const [transparent, setTransparent] = useState('header');
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent('header activeHeader');
    } else {
      setTransparent('header');
    }
  };
  window.addEventListener('scroll', addBg);
  return (
    <section className='navBarSection'>
      <div className={transparent}>
        <div className="logoDiv">
          <h1><img src={logo} alt="logo" className='icon'/></h1>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link to="" className='navLink'>Companies</Link>
            </li>
            <li className="navItem">
              <Link to="" className='navLink'>Candidates</Link>
            </li>
            <li className="navItem">
              <Link to="" className='navLink'>Assessment</Link>
            </li>
            <li className="navItem">
              <Link to="" className='navLink'>Post a Job</Link>
            </li>
            <li className="navItem">
              <Link to="" className='navLink'>Career Advice</Link>
            </li>

            <div className="headerBtns flex">
              <button className='btn'>
                <Link to="#" className='butt'>Log In</Link>
              </button>
              <button className='btn'>
                <Link to="#" className='butt'>Sign Up</Link>
              </button>
            </div>
          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className='icon' />
          </div>
        </div>

        <div onClick={showNav} className='toggleNavbar'>
          <TbGridDots className='icon' />
        </div>
      </div>
    </section>
  )
}
