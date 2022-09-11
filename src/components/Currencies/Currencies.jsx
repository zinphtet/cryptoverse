
import React,{useState , useEffect} from 'react'
import './Currencies.scss'
import CoinContainer from '../CoinContainer/CoinContainer'
import { useSelector } from 'react-redux'
const Currencies = () => {
 
  const {allcoins}= useSelector(state=>state.allcoins)
  const data = allcoins.data.coins
  const [keyword , setKeyword] = useState('')
  const [myData , setMyData] = useState(data)
  
  const handleKeyword = (e)=>{
     setKeyword(e.target.value)

  }

  useEffect(()=>{
    document.title = 'Currencies'
  },[])

  useEffect(() => {
    const filter = data.filter((item)=>item.name.toLowerCase().includes(keyword.toLowerCase()))
    setMyData(filter)

  }, [keyword])
  
  
  return (
    <div className='currencies'>
       
           <input className='search_crypto' type="text" placeholder='enter your crypto' onChange={handleKeyword}/>
       
        <CoinContainer data={myData} main={true}/>
    </div>
  )
}

export default Currencies