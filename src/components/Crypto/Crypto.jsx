import millify from 'millify'
import React ,{ useEffect} from 'react'
import './Crypto.scss'
import {AiOutlineDollar , AiOutlineTrophy}  from 'react-icons/ai'
import {GiRank3} from 'react-icons/gi'
import {BsLightningCharge }  from 'react-icons/bs'
import {RiExchangeDollarFill} from 'react-icons/ri'
import {FcApproval} from 'react-icons/fc'
import {SiMarketo} from 'react-icons/si'
import { useSelector,useDispatch } from 'react-redux'
import { fetchCoin } from '../../Redux/coin'
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom'
import HistoryChart from '../Chart/HistoryChart'
import Loading from '../Loading/Loading'
import BrokenPage from '../BrokenPage/BrokenPage'
const Crypto = () => {
  const {id} = useParams()

   const dispatch = useDispatch();
    const {coin , loading , error} = useSelector(state =>state.coin)
    console.log({
      coin ,  loading , error
    })
    useEffect(()=>{
      dispatch(fetchCoin(id))
    },[id ])

  
    if(loading ) return <Loading/>
    if(coin.status ==='fail') return <BrokenPage/>
    const desCoin = coin.data.coin
    const {
      name,
      iconUrl,
       rank , 
       marketCap,
       price ,
       numberOfMarkets ,
       numberOfExchanges ,
        supply:{confirmed , circulating},
        allTimeHigh ,
        description,
        links 
      } 
    = desCoin

  return (
    <div className="crypto">
         <div className='icon_title'>
            <img src={iconUrl} alt="Icon img" />
            <p className="title">
               {name} 
            </p>
         </div>
         <p className='title_info'>
         {name} live price in US Dollar .View value statistics , market caps and supply
         </p>


         {/* //Here is Chart */}
          <div className="chart">
                  <div className="chart_info">
                     <p className='mytitle'> {name} Price Chart</p>
                     <div>
                        <p>change : 12.2 %</p>
                        <p>current  {name} price : $ {millify(467000)}</p>
                     </div>
                   </div>
                   <HistoryChart id={id}/>
          </div>

          {/* //Statistics and Info */}
          <div className="stat_info">
                <div className="coni_stat">
                  <p className="mytitle">
                  {name} Value Statistics
                  </p>
                  <p className='myoverview'>An overview showing the statistics of  {name}, such as the base and quote currency , the rank , and trading volume</p>
                   <div className="statss">
                      <div className="statss_item">
                         <div>
                            <AiOutlineDollar/>
                            <p>Price to USD</p>
                         </div>
                         <p className='value'>$ {millify(price)}</p>
                      </div>
                      <div className="statss_item">
                         <div>
                            <GiRank3/>
                            <p>Rank</p>
                         </div>
                         <p className='value'>{rank}</p>
                      </div>
                      <div className="statss_item">
                         <div>
                            <BsLightningCharge/>
                            <p>24h volume</p>
                         </div>
                         <p className='value'>$ {millify(desCoin['24hVolume']  )}</p>
                      </div>
                      <div className="statss_item">
                         <div>
                            <AiOutlineDollar/>
                            <p>Market Cap </p>
                         </div>
                         <p className='value'>$ {millify(marketCap)}</p>
                      </div>
                      <div className="statss_item">
                         <div>
                            <AiOutlineTrophy/>
                            <p>All-time-high (daily-avg)</p>
                         </div>
                         <p className='value'>$ {millify(allTimeHigh.price)}</p>
                      </div>
                   </div>
                </div>
                <div className="coin_info">
                <p className="mytitle">
                    Other Stats info
                  </p>
                  <p className='myoverview'>An overview showing the statistics of  {name}, such as the base and quote currency , the rank , and trading volume</p>
                   <div className="statss">
                      <div className="statss_item">
                         <div>
                            <SiMarketo/>
                            <p>Number of Market</p>
                         </div>
                         <p className='value'>{millify(numberOfMarkets)}</p>
                      </div>
                      <div className="statss_item">
                         <div>
                            <RiExchangeDollarFill/>
                            <p>Number of Exchange</p>
                         </div>
                         <p className='value'>{millify(numberOfExchanges)}</p>
                      </div>
                      <div className="statss_item">
                         <div>
                            <FcApproval/>
                            <p>Approved Supply</p>
                         </div>
                         <p className='value'>{confirmed ? 'true':'false'}</p>
                      </div>
                      <div className="statss_item">
                         <div>
                            <AiOutlineDollar/>
                            <p>Market Cap </p>
                         </div>
                         <p className='value'>$ {millify(marketCap)}</p>
                      </div>
                      <div className="statss_item">
                         <div>
                            <AiOutlineTrophy/>
                            <p>Circulating Supply</p>
                         </div>
                         <p className='value'>$ {millify(circulating)}</p>
                      </div>
                   </div>

                </div>
          </div>
          {/* end of Statics and Info */}

          <div className='history'>
             <div className="history_coin">
                  
                 {
                  parse(description)
                 }

             </div>
             <div className="links">
                  <p className="mytitle">
                  {name} Links
                  </p>
                  {
                     links.map(({name , url},idx)=>{
                        return (
                           <div className="link" key={idx}>
                               <p className="site">{name}</p>
                               <div className="add"> <a href={`${url}`} target='_blank'>{url}</a></div>
                            </div>
                        )
                     })
                  }
                  
             </div>
          </div>
    </div>
  )
}

export default Crypto