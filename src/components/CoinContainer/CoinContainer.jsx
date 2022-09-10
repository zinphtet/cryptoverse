import React from 'react'
import './NewsContainer.scss'
import CoinItem from '../CoinItem/CoinItem'

const CoinContainer = ({data}) => {
  // console.log({data})
  return (
    <div className="coin_container">
      {
        data.map(({uuid ,name ,iconUrl ,marketCap , change , price ,rank},i)=>{
          const propsData  = {name ,iconUrl ,marketCap , change , price, rank ,uuid}
        return <CoinItem key={uuid} {...propsData} />
      }
        )
      }
        {/* <CoinItem/>
        <CoinItem/>
        <CoinItem/>
        <CoinItem/>
        <CoinItem/>
        <CoinItem/>
        <CoinItem/>
        <CoinItem/>
        <CoinItem/>
        <CoinItem/> */}
        
    </div>
  )
}

export default CoinContainer