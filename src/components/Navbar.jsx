import React from 'react'
import '../style/navbar.css'
import {ReactComponent as Cart} from '../media/cart.svg'

const Navbar = () => {
  return (
    <div id='navbar' className=''>
        <div id='nav-right'>
            <span id='shop-title'>Game Fest Shop</span>
            <ol id='link-list'>
                <a href=''>Home</a>
                <a href=''>Contact us</a>
            </ol>
        </div>
        <div id='nav-left'>
            <a id='cart' href=''><Cart style={{fill:'white' , width: "auto" , padding: "1vw"}}/></a>
        </div>
    </div>
  )
}

export default Navbar