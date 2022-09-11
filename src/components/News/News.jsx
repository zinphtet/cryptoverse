import React,{useEffect} from 'react'
import './News.scss'
import NewsContainer from '../NewsContainer/NewsContainer'
const News = () => {
  useEffect(()=>{
       document.title = 'News for Cryptocurrencies'
  },[])
  return (
    <div className="news">

           <NewsContainer main={true} />
    </div>
  )
}

export default News