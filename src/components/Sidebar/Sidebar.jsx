
import React from 'react'
import './Sidebar.scss'
import logo from '../../logo.png'
import {AiOutlineMenu} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {RiCurrencyLine}  from 'react-icons/ri'
import {FaExchangeAlt} from 'react-icons/fa'
import {BiNews} from 'react-icons/bi'
const Sidebar = () => {
  return (

    <div className='side_bar'>
        <div className="brand">
               <img src={logo} />
              <p className='logo_name'>Cryptoverse</p>
        </div>
        <div className="hamber_menu">
            <AiOutlineMenu/>
        </div>
        <ul className="nav">
            <li className="nav_link">
            <CgProfile/> <span>User</span>
            </li>
            <li className="nav_link">
            <RiCurrencyLine/> <span>Currencies</span>
            </li>
            <li className="nav_link">
            <FaExchangeAlt/> <span>Exchange</span>
            </li>
            <li className="nav_link">
            <BiNews/> <span>News</span>
            </li>
          
        </ul>
    </div>
    
  )
}

export default Sidebar