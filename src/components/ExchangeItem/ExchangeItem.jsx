
import React ,{useState}from 'react'
import './ExchangeItem.scss'
import millify from 'millify'
import binance from '../../binance.jpg'
import { motion } from 'framer-motion'
const ExchangeItem = () => {
    const [show , setShow  ] = useState(false)
  return (
    <motion.div className='item' layout >
    <motion.div className="exchange_item" onClick={()=>setShow(prev=>!prev)} layout>
        <div className="exchange">
          <p className="order">1 . </p>
           <img src={binance} alt="exchange img" />
           <p className="exchange_name">Binance</p>
        </div>
        <div className="trade_volume">
            {
                millify(1200000000)
            }
        </div>
        <div className="market">
          {
            millify(1200000)
          }
        </div>
        <div className="change">
           {
            millify(12.2,{
                units:['%']
            })
           }
        </div>
    </motion.div>
    {
      show && 
      <motion.div className={`exchange_item_info `} layout>
      <p>
         <span>Binance </span> is a blockchain ecosystem comprising a cryptocurrency exchange , startup incubator , and coin information provider. Binance is highly popular exchange and allow its users to trade hundreds of cryptocurrencies , including Dogecoin , Bitcoin , and Ethereum
      </p>
  </motion.div>
    }
    </motion.div>
  )
}

export default ExchangeItem