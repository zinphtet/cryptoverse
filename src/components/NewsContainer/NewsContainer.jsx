import React from 'react'
import './NewsContainer.scss'

import NewsItem from '../NewsItem/NewsItem'

const NewsContainer = () => {
  return (
    <div className="news_container">
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
    </div>
  )
}

export default NewsContainer