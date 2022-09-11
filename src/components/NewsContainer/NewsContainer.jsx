import React ,{useState,useEffect}from 'react'
import './NewsContainer.scss'

import NewsItem from '../NewsItem/NewsItem'
import { useSelector,useDispatch } from 'react-redux'
import { fetchNews } from '../../Redux/news'
import Loading from '../Loading/Loading'
const NewsContainer = ({main}) => {

  const category = [
    'crypto',
    'bitcoin',
    'ethereum',
    'binance',
    'hex coin',
    'solana',
  ]
  
  const dispatch = useDispatch()
  const {news , loading , error } = useSelector(state=>state.news)

  const [selected , setSelected] = useState('crypto')

 
  const handleSelect = (e)=>{

    setSelected(e.target.value)
   }
  
  useEffect(()=>{
    dispatch(fetchNews(selected))
  },[selected])

if(loading) return <Loading/>
 
  const data = main ? news.value : news.value.slice(0,10)
  return (
    <div className='news_wrapper'>
      {
        main && <select className='news_select' value={selected} onChange={handleSelect}>
    
            {
              category.map((item)=><option value={item} key={item}>{item}</option>)
            }
        </select>
      }
      <div className="news_container">

        {
          data.map((item,idx)=>{

             const props = {
              name : item.name,
              url : item.url,
              imgUrl : item.image,
              desc : item.description,
              proName : item.provider[0].name,
              proImgUrl : item.provider[0].image,
              publishedAt : item.datePublished
            }
            return <NewsItem key={idx} {...props} />
          })
        }
      </div>
    </div>
  )
}

export default NewsContainer