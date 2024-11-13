import { useState } from 'react'
import { NavLink } from 'react-router-dom'

// Import icons
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const baseUrl = import.meta.env.VITE_WP_BASEURL

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [logoUrl, setLogoUrl] = useState('');


    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    };

    const closeMenu = () => {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
    };

  return (
    <header>
      <nav className={`navbar ${isOpen ? "menu-open" : ""}`}>
        <NavLink to="/" className="logo">
          <img src="public/big-buddy-logo.png" alt="logo" />
        </NavLink>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar bar1 ${isOpen ? "toggle" : ""}`}></div>
          <div className={`bar bar2 ${isOpen ? "toggle" : ""}`}></div>
          <div className={`bar bar3 ${isOpen ? "toggle" : ""}`}></div>
        </div>

        <div className='wrapper'>
          <div id='actionButtons'>
            <div className='social-icons'>
              <div className='icon'>
                <FaFacebookF />
              </div>

              <div className='icon'>
                <FaInstagram />
              </div>

              <div className='icon'>
                <FaLinkedinIn />
              </div>
            </div>

            <button id='bigBuddyButton'>
              <NavLink
                to="/become-a-big-buddy"
              >
                BECOME A BIG BUDDY
              </NavLink>
            </button>
            
            <button id='donateButton'>
              <NavLink
                to="/donate"
              >
                DONATE
              </NavLink>
            </button>
          </div>
          <ul className={`nav-links ${isOpen ? "active" : ""}`}>
            <li>
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/partners"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Partners
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/stories"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Stories
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/mentors"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Mentors
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}
    </header>
  );
}

export default Navbar
