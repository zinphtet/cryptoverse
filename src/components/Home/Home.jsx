import React from 'react'
import './Home.scss'
import millify from "millify";
import { Link } from 'react-router-dom';
import CoinContainer from '../CoinContainer/CoinContainer';
import NewsContainer from '../NewsContainer/NewsContainer';
import Title from '../Title/Title';
const Home = () => {
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
                millify(212225)
              }
             </p>
          </div>
          <div className="stat">
             <p className="stat_title">
                Total Exchange
             </p>
             <p className="stat_number">
             {
                millify(212225)
              }
             </p>
          </div>
       </div>
       <div className="stats">
          <div className="stat">
             <p className="stat_title">
                Total Currencies
             </p>
             <p className="stat_number">
              {
                millify(212225)
              }
             </p>
          </div>
          <div className="stat">
             <p className="stat_title">
                Total Exchange
             </p>
             <p className="stat_number">
             {
                millify(212225)
              }
             </p>
          </div>
       </div>
       <div className="stats">
          <div className="stat">
             <p className="stat_title">
                Total Currencies
             </p>
             <p className="stat_number">
             {
                millify(212225)
              }
             </p>
          </div>
          <div className="stat">
             <p className="stat_title">
                Total Exchange
             </p>
             <p className="stat_number">
             {
                millify(212225)
              }
             </p>
          </div>
       </div>
       </div>
       <div className="home_crypto">
           <Title title='Top 10 Crypto in the World' path='currencies'  />
           <CoinContainer/>
         
       </div>
       <div className="home_news">
           <Title title='Latest Crypto News' path='news'  />
           <NewsContainer/>
       </div>
    </div>
  )
}

export default Home