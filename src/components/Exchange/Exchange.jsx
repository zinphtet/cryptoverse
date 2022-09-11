import React ,{useEffect}from 'react'
import './Exchange.scss'
import ExchangeItem from '../ExchangeItem/ExchangeItem'
import { AnimateSharedLayout } from "framer-motion"
import Loading from '../Loading/Loading'
import { useSelector,useDispatch } from 'react-redux'
import { fetchExchanges } from '../../Redux/exchanges'
const Exchange = () => {
  const dispatch = useDispatch()
  const {exchanges , loading , error } = useSelector(state =>state.exchanges)
 
   useEffect(()=>{
    dispatch(fetchExchanges())
      document.title = 'Exchanges'
   },[])
 
  if(loading) return <Loading/>

  const data = exchanges.data.exchanges
  return (
    <div className="exchange_container">
      <div className="exchanges">
         <p>Exchanges</p>
         <p>24h Trade Volume</p>
         <p>Markets</p>
         <p>Rank</p>
      </div>
      <AnimateSharedLayout>
         { data.map((item,idx)=> <ExchangeItem key={idx} data={item} layout />)}
      </AnimateSharedLayout>
    </div>
  )
}

export default Exchange