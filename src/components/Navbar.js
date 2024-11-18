import React, { useState } from "react";
import { Link } from 'react-scroll';
import '../styles/Navbar.css';
import data from '../data/db.json';


export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      {data?.navbar?.map((item, index) => (
        <div key={index}>
      <img src={item.src} alt="logo" className="logo" /></div>
      ))}
      <div className="navbarMenu">
        <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className="navbarMenuItem">Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className="navbarMenuItem">About</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500}className="navbarMenuItem">Projects</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}className="navbarMenuItem">Skills</Link>
      </div>
      <button className="navbarBtn" onClick={() => {
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
      }}>
        <img src="/assets/contactmelogo.jpg" alt="" className="navbarBtnImg"/>
         Contact me
      </button>
      <img src="/assets/menu3.png" alt="Menu" className="mobMenu" onClick={()=> setShowMenu(!showMenu)}/>
      <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
        <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className="menuItem" onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className="menuItem" onClick={() => setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500}className="menuItem" onClick={() => setShowMenu(false)}>Projects</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}className="menuItem" onClick={() => setShowMenu(false)}>Skills</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500}className="menuItem" onClick={() => setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;