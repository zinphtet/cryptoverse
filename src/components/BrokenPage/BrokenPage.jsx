

import React from 'react'
import './BrokenPage.scss'
import {GiBrokenAxe}  from 'react-icons/gi'
const BrokenPage = () => {
  return (
   <div className="broken_page">
    <div>
       <GiBrokenAxe/>
       <p>Ohh! Crashed .</p>
    </div>
   </div>
  )
}

export default BrokenPage