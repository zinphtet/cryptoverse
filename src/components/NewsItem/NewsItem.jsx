import React from 'react'
import './NewsItem.scss'
import cryptoimg from '../../cryptonews.jpg'
import newsLogo from '../../newslogo.jpg'
const NewsItem = () => {
  const info = ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus sint aspernatur quas ipsam, veniam rerum.'
  return (
    <div className="news_item">
      <div className="news_title">
        <p className="title">
           Counterview : Why Crypto currency is a Cardashian ,Not Merly Streep 
        </p>
        <img src={cryptoimg} alt="news img" />
      </div>
      <p className="news_info">
        {info.length >100 ? info.slice(0,100) + ' ...' : info}
      </p>
      <div className="news_channel">
         <div className="channel_logo">
             <img src={newsLogo} alt="news logo " />
             <p> Department of News</p>
         </div>
         <p className="date"> 2 hours ago</p>
      </div>
    </div>
  )
}

export default NewsItem