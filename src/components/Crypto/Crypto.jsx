import millify from 'millify'
import React from 'react'
import './Crypto.scss'
import {AiOutlineDollar , AiOutlineTrophy}  from 'react-icons/ai'
import {GiRank3} from 'react-icons/gi'
import {BsLightningCharge ,BsDashCircle}  from 'react-icons/bs'
import {RiExchangeDollarFill} from 'react-icons/ri'
import {FcApproval} from 'react-icons/fc'
import {SiMarketo} from 'react-icons/si'
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
const Crypto = () => {
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
        labels : ['jan','feb','mar','april','may','jun','july','aug'],
        datasets:[
            {
                label:'monthly expense',
                data:[100,200,80,250,150,300,180,220]
            }
        ]
    }
  return (
    <div className="crypto">
         <p className="title">
            Bitcoin ( bitcoin-btc) price
         </p>
         <p className='title_info'>
            Bitcoin live price in US Dollar .View value statistics , market caps and supply
         </p>
          <div className="chart">
            <select name="chart" className='chart_select' id="chart">
                <option value="7h">7h</option>
                <option value="3d">3d</option>
                <option value="1 w">1w</option>
                <option value="1 m">1m</option>
            </select>
            <div className="chart_info">
                 <p className='mytitle'>Bitcoin Price Chart</p>
                 <div>
                    <p>change : 12.2 %</p>
                    <p>current bitcoin price : $ {millify(467000)}</p>
                 </div>
            </div>
            <Line options={options}  data={data} />
          </div>

          {/* //Statistics and Info */}
          <div className="stat_info">
                <div className="coni_stat">
                  <p className="mytitle">
                    Bitcoin Value Statistics
                  </p>
                  <p className='myoverview'>An overview showing the statistics of Bitcoin, such as the base and quote currency , the rank , and trading volume</p>
                   <div className="statss">
                      <div className="statss_item">
                         <div>
                            <AiOutlineDollar/>
                            <p>Price to USD</p>
                         </div>
                         <p className='value'>$ {millify(129990)}</p>
                      </div>
                      <div className="statss_item">
                         <div>
                            <GiRank3/>
                            <p>Rank</p>
                         </div>
                         <p className='value'>1</p>
                      </div>
                      <div className="statss_item">
                         <div>
                            <BsLightningCharge/>
                            <p>24h volume</p>
                         </div>
                         <p className='value'>$ {millify(129990)}</p>
                      </div>
                      <div className="statss_item">
                         <div>
                            <AiOutlineDollar/>
                            <p>Market Cap </p>
                         </div>
                         <p className='value'>$ {millify(12000000)}</p>
                      </div>
                      <div className="statss_item">
                         <div>
                            <AiOutlineTrophy/>
                            <p>All-time-high (daily-avg)</p>
                         </div>
                         <p className='value'>$ {millify(6499990)}</p>
                      </div>
                   </div>
                </div>
                <div className="coin_info">
                <p className="mytitle">
                    Other Stats info
                  </p>
                  <p className='myoverview'>An overview showing the statistics of Bitcoin, such as the base and quote currency , the rank , and trading volume</p>
                   <div className="statss">
                      <div className="statss_item">
                         <div>
                            <SiMarketo/>
                            <p>Number of Market</p>
                         </div>
                         <p className='value'>{millify(1234)}</p>
                      </div>
                      <div className="statss_item">
                         <div>
                            <RiExchangeDollarFill/>
                            <p>Number of Exchange</p>
                         </div>
                         <p className='value'>135</p>
                      </div>
                      <div className="statss_item">
                         <div>
                            <FcApproval/>
                            <p>Approved Supply</p>
                         </div>
                         <p className='value'>{'true'}</p>
                      </div>
                      <div className="statss_item">
                         <div>
                            <AiOutlineDollar/>
                            <p>Market Cap </p>
                         </div>
                         <p className='value'>$ {millify(18000000)}</p>
                      </div>
                      <div className="statss_item">
                         <div>
                            <AiOutlineTrophy/>
                            <p>Circulating Supply</p>
                         </div>
                         <p className='value'>$ {millify(6499990)}</p>
                      </div>
                   </div>

                </div>
          </div>
          {/* end of Statics and Info */}

          <div className='history'>
             <div className="history_coin">
                <p className="mytitle">What is Bitcoin ? </p>
                <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis explicabo suscipit soluta impedit veritatis reprehenderit aperiam laborum nihil blanditiis obcaecati consequatur, laudantium doloribus, iste neque quidem quis ab ratione officia assumenda. Rem praesentium voluptatem vitae, repudiandae velit ab maiores. Odit saepe aliquam natus dolores hic doloribus nostrum eum reprehenderit libero.</p>

                <p className="sec_title">Why does Bitcoin have value ?</p>
                <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis explicabo suscipit soluta impedit veritatis reprehenderit aperiam laborum nihil blanditiis obcaecati consequatur, laudantium doloribus, iste neque quidem quis ab ratione officia assumenda. Rem praesentium voluptatem vitae, repudiandae velit ab maiores. Odit saepe aliquam natus dolores hic doloribus nostrum eum reprehenderit libero.</p>

                <p className="sec_title">Who Built Bitcoin ?</p>
                <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis explicabo suscipit soluta impedit veritatis reprehenderit aperiam laborum nihil blanditiis obcaecati consequatur, laudantium doloribus, iste neque quidem quis ab ratione officia assumenda. Rem praesentium voluptatem vitae, repudiandae velit ab maiores. Odit saepe aliquam natus dolores hic doloribus nostrum eum reprehenderit libero.</p>

                <p className="sec_title">The Technology of Bitcoin </p>
                <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis explicabo suscipit soluta impedit veritatis reprehenderit aperiam laborum nihil blanditiis obcaecati consequatur, laudantium doloribus, iste neque quidem quis ab ratione officia assumenda. Rem praesentium voluptatem vitae, repudiandae velit ab maiores. Odit saepe aliquam natus dolores hic doloribus nostrum eum reprehenderit libero.</p>

             </div>
             <div className="links">
                  <p className="mytitle">
                    Bitcoin Links
                  </p>
                  <div className="link">
                     <p className="site">Website</p>
                     <div className="add"> <a href="https://www.google.com" target='_blank'>www.bitcon.org</a></div>
                  </div>
                  <div className="link">
                     <p className="site">Website</p>
                     <div className="add">www.bitcon.org</div>
                  </div>
                  <div className="link">
                     <p className="site">Website</p>
                     <div className="add">www.bitcon.org</div>
                  </div>
                  <div className="link">
                     <p className="site">Website</p>
                     <div className="add">www.bitcon.org</div>
                  </div>
                  <div className="link">
                     <p className="site">Website</p>
                     <div className="add">www.bitcon.org</div>
                  </div>
                  <div className="link">
                     <p className="site">Website</p>
                     <div className="add">www.bitcon.org</div>
                  </div>
                  <div className="link">
                     <p className="site">Website</p>
                     <div className="add">www.bitcon.org</div>
                  </div>
                  <div className="link">
                     <p className="site">Website</p>
                     <div className="add">www.bitcon.org</div>
                  </div>
             </div>
          </div>
    </div>
  )
}

export default Crypto