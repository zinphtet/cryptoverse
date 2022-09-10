import React from 'react'
import './NewItem.scss'
import bitcoin from '../../bitcoin.png'
import {useNavigate} from 'react-router-dom'
import millify from 'millify'
const CoinItem = ({iconUrl , change ,  name , marketCap , price , rank ,uuid}) => {
  
  const router = useNavigate()
  return (
    <div className="new_item" onClick={()=>router(`/crypto/${uuid}`)}>
         <div className="coin">
            <p className="coin_name">
               {rank} . {name}
            </p>
            <img src={iconUrl} alt="crypto img" />
         </div>
         <div className="coin_stats">
            <p className="stat_item">
                Price :$ {millify(Number(price))}
            </p>
            <p className="stat_item">
                Market Cap :$ {millify(Number(marketCap))}
            </p>
            <p className="stat_item">
               Daily Change : {change} %
            </p>
         </div>
    </div>
  )
}

export default CoinItem