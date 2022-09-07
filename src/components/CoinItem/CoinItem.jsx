import React from 'react'
import './NewItem.scss'
import bitcoin from '../../bitcoin.png'
const CoinItem = () => {
  return (
    <div className="new_item">
         <div className="coin">
            <p className="coin_name">
                1 . Bitcoin
            </p>
            <img src={bitcoin} alt="crypto img" />
         </div>
         <div className="coin_stats">
            <p className="stat_item">
                Price : 12 k
            </p>
            <p className="stat_item">
                Market Cap : 12.2k
            </p>
            <p className="stat_item">
               Daily Change : 12.5%
            </p>
         </div>
    </div>
  )
}

export default CoinItem