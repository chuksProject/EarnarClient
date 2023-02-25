import React,{useState,useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./style/sportPage.css"
import {  faPlus,faMinus} from '@fortawesome/free-solid-svg-icons'
import "./style/home.css";
import "./style/home2.css"
import { Link} from "react-router-dom";
import Footer from "./footer"
import { AuthContext } from './context/authContext';

const ForexPage = () => {


    const [show,setShow]= useState(false)
    const [show1,setShow1]= useState(false)
    const [show2,setShow2]= useState(false)
    const [show3,setShow3]= useState(false)
    const [show4,setShow4]= useState(false)
    const [show5,setShow5]= useState(false)
    const [show6,setShow6]= useState(false)
    const {currentUser} = useContext(AuthContext);
  return (
    <div style={{  backgroundColor:"#192854"}}>
        <div className="sportPa">
          {/* <div className="">
            <img src="/img/king.svg"  className="imghi"/>
          </div> */}
        <div className="MakingMoney">
        Making Money Daily on <span className="forexy">FOREX</span> trading is as easy as following our daily expert forecast.
        </div>
        {currentUser?"":
        <Link to="/login"><div className="NowUpSign">SIGN UP NOW</div></Link>
      }
        <p className="SportBetting">What Is FOREX Trading</p>
        <div className="outcomeBeen">
       <span className="forexy"> Forex </span>trading or FX trading (also known as foreign exchange) happens 
when you buy or sell one countries currencies against another 
(e.g GBP/USD) with the aim of making a profit from the changing 
value of the underlying asset. <span className="forexy">Forex</span> markets is the largest and most 
liquid asset markets in the world.   
        </div>
        <p className="WhyStart">Why Start Forex Trading</p>
        <div className="ifNi"></div>
        <div className="EasyTi">
            <div className="EasyTim">
                <p className="startedf">Low Barriers to Entry</p>
                <div className="everyDay">
                Getting Started with forex 
trading has one of the
 lowest barrier of entry. This 
means it wont cost you time 
and a tone of money to start 
trading forex. With as little as 
$10 dollars you can register 
an account with a broker start making money. There are several high powered 
knowledge available online 
to get you started. 
We are here to help you start 
making money online by just 
following our expert forecast.</div>
            </div>
            <div className="EasyTim">
                <p className="startedf">A 24-hours market</p>
                <div className="everyDay">There is no waiting for the 
opening bell. From the 
Monday morning opening in 
Australia to the Friday 
afternoon close in 
New York, the forex market 
never sleeps.
This is 
awesome for those who 
want to trade on a part-time 
basis because you can 
choose when you want to 
trade: morning, noon, night,
 during breakfast, or in your 
sleep.

</div>
            </div>
            <div className="EasyTim">
                <p className="startedf">Leverage</p>
                <div className="everyDay">Leverage means using 
small amount to control 
larger amount of money.If 
you deposit $50 on forex 
plaform you can decide to 
use that $50 and borrow 
$50,000 to trade the 
market inorder to make 
serious profit and at the 
same time you can decide 
to keep your risk capital to 
the bearist minimum.
While 
this is all attractive, we also like 
to remind you that leverage
 is a double-edged sword. 
Without proper risk 
management, this high degree
 of leverage can lead to large
 losses as well as gains.</div>
            </div>
        </div>

        <div className="AgenciesTy">Who  Are Forex Brokers</div>
        <div className="ifNi"></div>
        <p className="everyDay">A Forex brooker is finacial services company that provides traders access to  a platform for buying and selling foreign currrencies.</p>
        <div className="wemerYt">
            <div className="papaf"><img src="/img/oct.svg" className="papaf12" /></div>
            <div><img src="/img/fxtm.svg" className="papaf1" /></div>
            <div className="papaf"><img src="/img/ex.svg" className="papaf13" /></div>
            <div className="papaf"><img src="/img/apari.png" className="papaf1" /></div>
            <div className="papaf"><img src="/img/fbs.svg" className="papaf14" /></div>
            <div className="papaf"><img src="/img/hfm.svg" className="papaf15" /></div>
        </div>
        <div className="BettingTu">Forex Trading Tutorial Videos</div>
       
        <div className="firey">
            <div className="firey1"></div>
            <div className="firey1"></div>
            <div className="firey1"></div>
        </div>

        <div>
          <div id="Faqc" className="faqSportMa">
            <div className="firstTom faqSports">FAQ</div>
            <div>
              <div className="HowFarBro" onClick={() => setShow(!show)}>
                <span>
How do I register  with a broker?</span>{" "}
                <span>
                {show? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show ? (
                <p className="ILOVEK">
                  {" "}
                  To register with a forex broker,visit any forex broker of your choice and click on their signup button to register with them. You can register with more than one broker.{" "}
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="HowFarBro" onClick={() => setShow1(!show1)}>
                <span>I dont Know anything about Forex trading,What should i do?</span>
                <span>
                {show1? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show1 ? (
                <p className="ILOVEK">
                 Not knowing about Forex Trading doesnt stops you from making money from Forex Market. All you need to know is to know how to buy/sell using our expert forecast daily. Watch our tutorial video on how to Buy/Sell to give you the required knowledge you need to starttrading immediately.
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="HowFarBro" onClick={() => setShow2(!show2)}>
                <span>How can i fund my account? </span>
                <span>
                  {show2? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show2 ? (
                <p className="ILOVEK">
                 To fund your account on earnars.com after registeration, go to "My Wallet" section and click on deposit and enter the amount you want to fund your account with, This will redirect you to flutter wave secure payment channel that gives you various payment options. To fund your account with a sport betting book maker watch the tutorial video.
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="HowFarBro" onClick={() => setShow3(!show3)}>
                <span> Can your company Trade for me and pay me a percentage monthly? </span>
                <span>
                  {show3? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show3 ? (
                <p className="ILOVEK">
               We do not manage users funds or bet for any user, we only forecast wining trades. Users are responsible for for any amount of money they wish to stake with the trading platform they are registered with.
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="HowFarBro" onClick={() => setShow4(!show4)}>
                <span>How much do i stake in every trade? </span>
                <span>
                  {show4? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show4 ? (
                <p className="ILOVEK">
                Your are responsible for any amount you wish to stake on any trading portal but we advice users to risk between 1% to 5% of their capital on any trade forecasted.
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="HowFarBro" onClick={() => setShow5(!show5)}>
                <span>What is the guarantee am going to make money trading forex? </span>
                <span>
                  {show5? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show5 ? (
                <p className="ILOVEK">
                  We do not guarantee any trade forecast made by our experts, however we guarantee the refund of users subscription fees if at the end of any particular month they dont turn profit by following all our prediction. This refund policy is subject to our "Refund Policy Terms and Condition"
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
             
       
            </div>
          </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default ForexPage