import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  const handleClick = () => {
    sessionStorage.clear();
    // window.location.reload('/landingpage')
  }

 

  return (

    <header className='header text-white'>
      <div className='container'>
        <div className='header-cnt'>
          <div className='header-cnt-top fs-13 py-2 flex align-center justify-between'>
            <div className='header-cnt-top-l'></div>
            <div className='header-cnt-top-r'>
              <ul className='top-links flex align-center'>
                <li className='fw-7' style={{ marginTop: '-30px', marginRight: '20px' }}>
                  <Link to="/landingpage">
                    <span className='top-link-itm-txt' onClick={handleClick}><strong>Logout</strong></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='header-cnt-bottom'>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header