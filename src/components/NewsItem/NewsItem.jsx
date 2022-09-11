import React from 'react'
import './NewsItem.scss'
import moment from 'moment'
import newsLogo from '../../newsdefault.jpg'
const NewsItem = (props) => {
 
  const {
    name ,
    imgUrl,
    url ,
    desc ,
    proName ,
    proImgUrl ,
    publishedAt 
  } = props

  return (
    <a href={url}   target="_blank"
    rel="noreferrer">
    <div className="news_item">
      <div className="news_title">
        <p className="title">
          {name}
        </p>
        {
          imgUrl?.thumbnail?.contentUrl &&
          <img src={imgUrl?.thumbnail?.contentUrl} alt="news img" />
        }
       
      </div>
      <p className="news_info">
        {desc.length >100 ? desc.slice(0,100) + ' ...' : desc}
      </p>
      <div className="news_channel">
         <div className="channel_logo">
             <img src={proImgUrl?.thumbnail?.contentUrl || newsLogo} alt="news logo " />
             <p> {proName}</p>
         </div>
         <p className="date"> {moment(publishedAt).fromNow()}</p>
      </div>
    </div>
    </a>
  )
}

export default NewsItem