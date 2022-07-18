import React, {useState} from 'react'
import './navbar.css'

function Navbar() {
  const [shownav,setShownav]=useState("navlist")

 const  navtoggle = () => {
  shownav === 'navlist' ? setShownav('navlist nav__active') : setShownav("navlist")
  }
  return (
    <nav className='navbar'>
        <a href='/#' className='portname'>Portfolio</a>
        <ul className={shownav}>
            <li ><a href='/#' className='navitem'>Education</a></li>
            <li ><a href='/#' className='navitem'>Skills</a></li>
            <li ><a href='/#' className='navitem'>Projects</a></li>
            <li ><a href='/#' className='navitem'>Contact Me</a></li>
        </ul>
        <div onClick={navtoggle} className='navtoggler'>
                <div className='side1'></div>
                <div className='side2'></div>
                <div className='side3'></div>
        </div>

    </nav>
  )
}

export default Navbar
