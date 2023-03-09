import React from 'react'
import "./style/premium.css"
import Footer from "./footer"

const premium = () => {
  return (
    <div style={{backgroundColor:"#192854"}}>
       <div className="PrmiumBanner" >
          <img src="/img/EarnarsBanner16.png" className="AffliateBannertt" />
          </div>
        <div className="ApplyFor">
          <p className="unlock">Premium Subscription Unlocks All Predictions</p>
            <p className="pageRisk">If you subscribe to our premium expert predictions and  apply all our risk reward  ratio 
and don't turn profit at the end of the month, we will refund the subscription money you paid or 
your next month subscription becomes free. </p>
        </div>
        <div className="freeB">
            <div className="ButtonQ fff">$50/₦25,000</div>
            <div className="ButtonQ fff33">Subscribe Now</div>
        </div>
        <div>
            <div><p className="AFFORDABLE">PREMIUM PREDICTION ON ALL MARKETS </p></div>
            <div className="LIne"></div>
        </div>


        <div className="AY">
        <table className="TYPE" >
        <tr>
    <th>TYPE</th>
    <th>SUCCESS RATE</th>
    <th>GUIDED TRADES</th>
    <th>DAILY PREDICTION</th>
    <th>WEEKLY PREDICTION</th>
  </tr>
  <tr>
    <td>SPORT PREDICTION</td>
    <td>UPTO 95%</td>
    <td>YES</td>
    <td>YES</td>
    <td>YES</td>
  </tr>
  <tr>
    <td>FOREX PREDICTION</td>
    <td>UPTO 75%</td>
    <td>YES</td>
    <td>YES</td>
    <td>YES</td>
  </tr>
  <tr>
    <td>CRYPTOCURRENCY PREDICTION</td>
    <td>UPTO 85%</td>
    <td>YES</td>
    <td>YES</td>
    <td>YES</td>
  </tr>
  <tr>
    <td>BINARY PREDICTION</td>
    <td>UPTO 75%</td>
    <td>YES</td>
    <td>YES</td>
    <td>YES</td>
  </tr>
</table>
        </div>


        <Footer/>
    </div>
  )
}

export default premium