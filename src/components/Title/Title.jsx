import React from 'react'
import { Link } from 'react-router-dom'
const Title = ({title , path}) => {
  return (
            <div className='title_div'>
               <p className="title">{title}</p>
               <Link to={`/${path}`} className='link'>Show more</Link>
           </div>
  )
}

export default Title