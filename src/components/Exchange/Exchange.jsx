import React from 'react'
import './Exchange.scss'
import ExchangeItem from '../ExchangeItem/ExchangeItem'
import { AnimateSharedLayout } from "framer-motion"
const Exchange = () => {
  return (
    <div className="exchange_container">
      <div className="exchanges">
         <p>Exchanges</p>
         <p>24h Trade Volume</p>
         <p>Markets</p>
         <p>Change</p>
      </div>
      <AnimateSharedLayout>
         { [1,2,3,4,5,6,7,8,9,12,12,12,12].map((item,idx)=> <ExchangeItem key={idx} layout />)}
      </AnimateSharedLayout>
    </div>
  )
}

export default Exchange