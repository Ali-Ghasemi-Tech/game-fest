import React, { useState ,useEffect } from 'react'
import '../style/navbar.css'
import {ReactComponent as Cart} from '../media/cart.svg'

const Navbar = () => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const handleDocumentClick = (e) => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    const isDropdown = e.target.closest("[data-dropdown]");

    if (!isDropdownButton && isDropdown !== null) return;

    if (isDropdownButton) {
      setIsDropdownActive((prev) => !prev);
    } else {
      setIsDropdownActive(false);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);
  return (
    <div id='navbar' className=''>
        <div id='nav-right'>
            <span id='shop-title'>Game Fest Shop</span>
            <div id='link-list'>  
              <div data-dropdown className={`dropdown ${isDropdownActive ? 'active' : ''}`} >
                <button data-dropdown-button className='dropdown-button'>Gift cards</button>
                <div className='dropdown-menu'>
                  content
                </div>
              </div>
              <a href=''>Contact us</a>
            </div>
            
        </div>
        <div id='nav-left'>
            <a id='cart' href=''><Cart style={{fill:'white' , width: "auto", padding: '1vw' }}/></a>
        </div>
    </div>
  )
}

export default Navbar