
import React from 'react'
import './Currencies.scss'
import CoinContainer from '../CoinContainer/CoinContainer'
const Currencies = () => {
  return (
    <div className='currencies'>
        <form >
           <input className='search_crypto' type="text" placeholder='enter your crypto' />
        </form>
        <CoinContainer/>
    </div>
  )
}

export default Currencies