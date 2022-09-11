
import React ,{useState}from 'react'
import './ExchangeItem.scss'
import millify from 'millify'
import { motion } from 'framer-motion'
const ExchangeItem = (props) => {
    const [show , setShow  ] = useState(false)
    const {name , iconUrl,numberOfMarkets,rank} = props.data
  return (
    <motion.div className='item' layout >
    <motion.div className="exchange_item" onClick={()=>setShow(prev=>!prev)} layout>
        <div className="exchange">
          {/* <p className="order">1 . </p> */}
           <img src={iconUrl} alt="exchange img" />
           <p className="exchange_name">{name}</p>
        </div>
        <div className="trade_volume">
            {
                millify(props.data['24hVolume'])
            }
        </div>
        <div className="market">
          {
            millify(numberOfMarkets)
          }
        </div>
        <div className="change">
           {rank}
        </div>
    </motion.div>
    {
      show && 
      <motion.div className={`exchange_item_info `} layout>
      <p>
         <span>{name} </span> is a blockchain ecosystem comprising a cryptocurrency exchange , startup incubator , and coin information provider. {name} is highly popular exchange and allow its users to trade hundreds of cryptocurrencies , including Dogecoin , Bitcoin , and Ethereum
      </p>
  </motion.div>
    }
    </motion.div>
  )
}

export default ExchangeItem