import React ,{useEffect} from 'react'
import './Home.scss'
import millify from "millify";
import CoinContainer from '../CoinContainer/CoinContainer';
import NewsContainer from '../NewsContainer/NewsContainer';
import Title from '../Title/Title';
import { useSelector , useDispatch } from 'react-redux';
import { fetchAllCoins } from '../../Redux/allcoins';
import Loading from '../Loading/Loading';

const Home = () => {
 
   const dispatch = useDispatch()
   const {allcoins , loading , error} = useSelector(state=>state.allcoins)
   useEffect(()=>{
       dispatch(fetchAllCoins())
   },[])

//LOADING 
 if(loading) return <Loading/>


  const {totalCoins, totalExchanges ,totalMarkets , totalMarketCap,total24hVolume}  = allcoins?.data?.stats
  const slicedCoins = allcoins.data.coins.slice(0,10)


  return (
    <div className="home">
       <p className="home_title">
        Global Crypto Stats
       </p>
       <div className="stats_wrapper">
       <div className="stats">
          <div className="stat">
             <p className="stat_title">
                Total Currencies
             </p>
             <p className="stat_number">
             {
                millify(Number(totalCoins))
              }
             </p>
          </div>
          <div className="stat">
             <p className="stat_title">
                Total Exchange
             </p>
             <p className="stat_number">
             {
                millify(Number(totalExchanges))
              }
             </p>
          </div>
       </div>
       <div className="stats">
          <div className="stat">
             <p className="stat_title">
                Total Market Cap
             </p>
             <p className="stat_number">
             $ {
                millify(Number(totalMarketCap))
              }
             </p>
          </div>
          <div className="stat">
             <p className="stat_title">
                Total 24h Volume
             </p>
             <p className="stat_number">
            $ {
                millify(Number(total24hVolume))
              }
             </p>
          </div>
       </div>
       <div className="stats">
          <div className="stat">
             <p className="stat_title">
                Total Market
             </p>
             <p className="stat_number">
             {
                millify(Number(totalMarkets))
              }
             </p>
          </div>
          <div className="stat">
          </div>
       </div>
       </div>
       <div className="home_crypto">
           <Title title='Top 10 Crypto in the World' path='currencies'  />
           <CoinContainer data={slicedCoins}/>
         
       </div>
       <div className="home_news">
           <Title title='Latest Crypto News' path='news'  />
           <NewsContainer/>
       </div>
    </div>
  )
}

export default Home