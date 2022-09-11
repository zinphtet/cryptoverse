
import React ,{useState}from 'react'
import './Sidebar.scss'
import logo from '../../logo1.jpg'
import {AiOutlineMenu,AiOutlineClose , AiOutlineHome} from 'react-icons/ai'
import {RiCurrencyLine}  from 'react-icons/ri'
import {FaExchangeAlt} from 'react-icons/fa'
import {BiNews} from 'react-icons/bi'
import { NavLink } from "react-router-dom";
const Sidebar = () => {

   const [showNav , setShowNav] = useState(false)

  return (

    <div className='side_bar'>
        <div className="brand">
               <img src={logo} alt="logo" />
              <p className='logo_name'>Cryptoverse</p>
        </div>
        <div className="hamber_menu" onClick={()=>setShowNav(prev=>!prev)}>
          {
            showNav ? <AiOutlineClose/> : <AiOutlineMenu/>
          }
            
        </div>
        <ul className={`nav ${showNav ? 'showNav':''}`}>
          <NavLink to={'/'} className={({ isActive }) => (isActive ? "active_link" : "not_active")}>
            <li className="nav_link">
            <AiOutlineHome/> <span>Home</span>
            </li>
            </NavLink>
            <NavLink to={'/currencies'} className={({ isActive }) => (isActive ? "active_link" : "not_active")}>
            <li className="nav_link">
            <RiCurrencyLine/> <span>Currencies</span>
            </li>
            </NavLink>
            <NavLink to={'/exchange'} className={({ isActive }) => (isActive ? "active_link" : "not_active")}>
            <li className="nav_link">
            <FaExchangeAlt/> <span>Exchange</span>
            </li>
            </NavLink>
            <NavLink to={'/news'} className={({ isActive }) => (isActive ? "active_link" : "not_active")}>
            <li className="nav_link">
            <BiNews/> <span>News</span>
            </li>
            </NavLink>
        </ul>
    </div>
    
  )
}

export default Sidebar