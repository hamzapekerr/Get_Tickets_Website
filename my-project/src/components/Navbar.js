import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' style={{ textDecoration: "none", borderBottom: "none" }} className='navbar-logo' onClick={closeMobileMenu}>
            TUMBILET <i className="fas fa-ticket-alt"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' style={{ textDecoration: "none" }} className='nav-links' onClick={closeMobileMenu}>
                Anasayfa
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/ucak' style={{ textDecoration: "none" }} className='nav-links' onClick={closeMobileMenu}>
                Uçak
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/otobus' style={{ textDecoration: "none" }} className='nav-links' onClick={closeMobileMenu}>
                Otobüs
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/sinema' style={{ textDecoration: "none" }} className='nav-links' onClick={closeMobileMenu}>
                Sinema
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/tiyatro' style={{ textDecoration: "none" }} className='nav-links' onClick={closeMobileMenu}>
                Tiyatro
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/konser' style={{ textDecoration: "none" }} className='nav-links' onClick={closeMobileMenu}>
                Konser
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/sign-up' style={{ textDecoration: "none" }} className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav >
    </>
  )
}

export default Navbar