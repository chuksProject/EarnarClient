import React,{useContext} from 'react'
import "./style/premium.css"
import Footer from "./footer"

import { AuthContext } from './context/authContext';


const Premium = () => {

  const {currentUser,login,logout} = useContext(AuthContext);
  return (
    <div style={{ backgroundImage: "linear-gradient(to right, rgba(106, 116, 167, 0.34), rgba(119, 135, 182, 0.95))"
}}>
       <div className="PrmiumBanner" >
          <img src="/img/EarnarsBanner16.png" className="AffliateBannertt" alt=""/>
          </div>
        <div className="ApplyFor">
          <p className="unlock">Premium Subscription Unlocks All Predictions</p>
            <p className="pageRisk">If you subscribe to our premium expert predictions and  apply all our risk reward  ratio 
and don't turn profit at the end of the month, we will refund the subscription money you paid or 
your next month subscription becomes free. </p>
        </div>
        <div className="freeB">
            <div className="ButtonQ fff">$50/₦25,000</div>
            {currentUser?<a href="/wallet" className="yip"><div className="ButtonQ fff33">Subscribe Now</div></a>:<a href="/login" className="yip"><div className="ButtonQ fff33">Subscribe Now</div></a>}
            
        </div>
        <div>
            <div><p className="AFFORDABLE">PREMIUM PREDICTION ON ALL MARKETS </p></div>
            <div className="LIne"></div>
        </div>

        <div className="ShowUp">
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
        </div>


        <Footer/>
    </div>
  )
}

export default Premium