
import React,{useState , useEffect} from 'react'
import './Currencies.scss'
import CoinContainer from '../CoinContainer/CoinContainer'
import { data } from '../../dummydata/dummydata'
const Currencies = () => {
  const allcoins = data.data.coins
  const [keyword , setKeyword] = useState('')
  const [myData , setMyData] = useState(allcoins)
  // const handleFilter = ()=>{
       
  // }
  const handleKeyword = (e)=>{
    console.log(e.target.value)
     setKeyword(e.target.value)
    //  console.log(keyword)
  }

  useEffect(() => {
    console.log("from useeffect", keyword)
    const filter = allcoins.filter((item)=>item.name.toLowerCase().includes(keyword))
    //  setMyData(filter)
    // console.log({filter})
    setMyData(filter)
  }, [keyword])
  return (
    <div className='currencies'>
        {/* <form > */}
           <input className='search_crypto' type="text" placeholder='enter your crypto' onChange={handleKeyword}/>
        {/* </form> */}
        <CoinContainer data={myData}/>
    </div>
  )
}

export default Currencies