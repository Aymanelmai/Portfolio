import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
// import { FaGithub,FaLinkedin,FaRegFilePdf } from "react-icons/fa";
// import { CgMail } from "react-icons/cg";
import './Navbar.css';


function Navbar() {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const aboutSection = document.getElementById('about');
      const workSection = document.getElementById('work');
      const contactSection = document.getElementById('contact');

      if (
        aboutSection && 
        scrollY >= aboutSection.offsetTop &&
        scrollY < aboutSection.offsetTop + aboutSection.offsetHeight
      ) {
        setActiveLink('about');
      } else if (
        workSection && 
        scrollY >= workSection.offsetTop &&
        scrollY < workSection.offsetTop + workSection.offsetHeight
      ) {
        setActiveLink('work');
      } else if (
        contactSection && 
        scrollY >= contactSection.offsetTop &&
        scrollY < contactSection.offsetTop + contactSection.offsetHeight
      ) {
        setActiveLink('contact');
      } else {
        setActiveLink('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
    <div className="Navbar_Elements">
      <div className="Navbar_Left_Elements"> <p className="Logo">aymane. </p></div>

      <div className="Navbar_Right_Elements">
        <div className='elementsCard'>

        <div className='pill'>
        <Link
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className={activeLink === 'about' ? 'active' : ''}
      >
        About
      </Link>
        </div>
        <div className='pill'>
        <Link
        to="work"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className={activeLink === 'work' ? 'active' : ''}
      >
        Work
      </Link>
        </div>
        <div className='pill'>
        <Link
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className={activeLink === 'contact' ? 'active' : ''}
      >
        Contact
      </Link>
        </div>
    
   
     
      </div>  
      </div>
      
    </div>
    <hr className="Navbar_Underline"/>
    </div>
  );
}

export default Navbar;
