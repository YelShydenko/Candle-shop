import React, { useEffect, useState } from 'react'
import { MdOutlinePersonOutline, MdOutlineShoppingCart  } from "react-icons/md";
import "./Navbar.scss"
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { HiMiniHeart, HiBars3, HiOutlineXMark   } from 'react-icons/hi2';


const Navbar = () => {

  const cart = useSelector(state => state.products.cart)
  const favourite = useSelector(state => state.products.favourite)
  const [isToggle, setIsToggle] = useState(false);

  const setActiveLink = ({isActive}) =>isActive ? "navbar-list__item navbar-list__item-active" : "navbar-list__item";

  return (
    <nav className='navbar'>
        <div className='container'>
            <div className="content">
                <Link to="/" className='navbar__logo'>
                  <img src="./logo.svg" alt="" />
                </Link>

                <div className="menu">
                  {
                    isToggle 
                    ? <HiOutlineXMark size={24} className='menu__icon' onClick={() => setIsToggle(!isToggle)}/>
                    : <HiBars3 size={24} className='menu__icon' onClick={() => setIsToggle(!isToggle)}/>
                  }
                 

                  <ul className={`navbar-list ${isToggle ? "navbar-list-active" : ""}`}>
                      <li><NavLink to="/" className={setActiveLink}>Home</NavLink></li>
                      <li><NavLink to="/products" className={setActiveLink}>Products</NavLink></li>
                      <li><NavLink to="/contact" className={setActiveLink}>Contact us</NavLink></li>
                  </ul>
                </div>

                <ul className='navbar-list'>
                    <li><NavLink to="/profile" className='navbar-list__item'><MdOutlinePersonOutline className='navbar-list__icon'/></NavLink></li>
                    <li><NavLink to="/favourite" className='navbar-list__item'><HiMiniHeart className='navbar-list__icon'/> <span className='count'>{favourite.length}</span></NavLink></li>
                    <li><NavLink to="/cart" className='navbar-list__item'><MdOutlineShoppingCart className='navbar-list__icon'/> <span className='count'>{cart.length}</span></NavLink></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar