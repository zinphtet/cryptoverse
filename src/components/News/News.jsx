import React from 'react'
import './News.scss'
import NewsContainer from '../NewsContainer/NewsContainer'
const News = () => {
  return (
    <div className="news">
      <form >
        <select name="select" id="select">
            <option value="bitcoin">Bitcoin</option>
            <option value="etherum">Etherum</option>
            <option value="bitcoin">Bitcoin</option>
            <option value="bitcoin">Bitcoin</option>
        </select>
      </form>
           <NewsContainer/>
    </div>
  )
}

export default News