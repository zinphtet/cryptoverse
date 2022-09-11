
import React , {useState, useEffect} from 'react'
import './Chart.scss'
import { fetchPriceHistory } from '../../Redux/priceHistory'
import { useSelector , useDispatch } from 'react-redux'
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import Loading from '../Loading/Loading';
const HistoryChart = ({id}) => {

    const [period , setPeriod ] = useState('1h')
    
    const dispatch = useDispatch()
    const priceObj = useSelector(state=>state.priceHistory)


    const handleSelect = (e)=>{
        console.log(e.target.value)
           setPeriod(e.target.value)
     }

     useEffect(()=>{
         dispatch(fetchPriceHistory({id,period}))
     },[id,period])

     if(priceObj.loading ) return <Loading/>

     const dataLabels = priceObj.priceHistory.data.history.map((item)=>item.timestamp)
const dataPrice = priceObj.priceHistory.data.history.map((item)=>Number(item.price))
console.log({dataLabels , dataPrice})


const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };


  const data = {
    labels :dataLabels,
    datasets:[
        {
            label:'price history',
            data:dataPrice,
            // borderColor : 'blue',
            borderWidth:2,
            backgroundColor : '#00b0ff'
        }
    ]
}


  return (
   
    <>
    <select name="chart" className='chart_select' id="chart" value={period} onChange={handleSelect}>
        <option value="1h">1h</option>
        <option value="3h">3h</option>
        <option value="12h">12h</option>
        <option value="24h">24h</option>
        <option value="7d">7d</option>
        <option value="30d">30d</option>
        <option value="3m">3m</option>
        <option value="1y">1y</option>
        <option value="3y">3y</option>
        <option value="5y">5y</option>
    </select>
   
    <Line options={options} className='line_chart'   data={data} />
  </>
  )
}

export default HistoryChart