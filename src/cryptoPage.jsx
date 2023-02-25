import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./style/sportPage.css"
import {  faPlus,faMinus} from '@fortawesome/free-solid-svg-icons'
import "./style/home.css";
import "./style/home2.css"
import Footer from "./footer"

const CryptoPage = () => {


    const [show,setShow]= useState(false)
    const [show1,setShow1]= useState(false)
    const [show2,setShow2]= useState(false)
    const [show3,setShow3]= useState(false)
    const [show4,setShow4]= useState(false)
    const [show5,setShow5]= useState(false)
    const [show6,setShow6]= useState(false)
  return (
    <div style={{  backgroundColor:"#192854"}}>
        <div className="sportPa">
        <div className="MakingMoney">
        Making Money Daily on SPORTS trading is as easy as following our daily expert predictions
        </div>
        <div className="NowUpSign">SIGN UP NOW</div>
        <p className="SportBetting">What Is Cryptocurrency trading</p>
        <div className="outcomeBeen">
        Cryptocurrency trading happens when you buy or sell digital 
currencies with the aim of making a profit when their change in value 
of the underlying asset. There are two main ways to trade 
cryptocurrency online: through a specialized brokerage or via a 
dedicated cryptocurrency exchange.  
        </div>
        <p className="WhyStart">Why Start  Cryptocurreny Trading</p>
        <div className="ifNi"></div>
        <div className="EasyTi">
            <div className="EasyTim">
                <p className="startedf">High Volatility</p>
                <div className="everyDay">
                Cryptocurrencies volatility is 
part of what makes this market
so exciting. Rapid intraday 
price movements can provide a 
range of opportunities to 
traders to go long and short 
but also come with increased 
risk. So, if you decide to 
explore the cryptocurrency 
market, make sure that you have 
done your research and developed 
a risk management strategy.</div>
            </div>
            <div className="EasyTim">
                <p className="startedf">A 24-hour market</p>
                <div className="everyDay">There is no waiting for the 
opening bell. From the 
Monday morning to Sunday and year to year the market is open and available world wide for trading.
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
                <p className="startedf">Low Barriers to Entry</p>
                <div className="everyDay">Getting Started with crypto 
trading has one of the
 lowest barrier of entry. This 
means it wont cost you time 
and a tone of money to start 
trading cyrpto. With
$10 dollars you can register 
an account with an exchange and start trading. There are several high powered 
knowledge available online 
to get you started. 
We are here to help you start 
making money online by just 
following our expert prediction.</div>
            </div>
        </div>

        <div className="AgenciesTy">What Are Cryptocurrency Exchanges</div>
        <div className="ifNi"></div>
        <p className="everyDay">Crypto exchange is a platform on which you can buy and sell 
cryptocurrencies. You can also use exchanges to trade one crypto 
for another
</p>
        <div className="wemerYt">
            <div className=""><img src="/img/images.jpg" className="cap3" /></div>
            <div><img src="/img/betKing.svg" className="cap3" /></div>
            <div className=""><img src="/img/guma.png" className="cap5" /></div>
            <div className=""><img src="/img/bett.svg" className="cap3" /></div>
            <div className=""><img src="/img/Betway.png" className="cap3" /></div>
            <div className=""><img src="/img/kingk.png" className="cap4" /></div>
        </div>
        <div className="BettingTu">Crypto Trading Tutorial Videos</div>
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
                <span>How do resgister  with an Exchange?</span>{" "}
                <span>
                {show? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show ? (
                <p className="ILOVEK">
                  {" "}
                  To register with a Crypto Exchange,visit any Exchange of your choice and click on their signup button to register with them. You can register with more than one cryptocurrency exchamge.{" "}
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="HowFarBro" onClick={() => setShow1(!show1)}>
                <span>I dont Know anything about crypto trading,What should i do?</span>
                <span>
                {show1? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show1 ? (
                <p className="ILOVEK">
                 Not knowing about Crypto Trading doesnt stops you from making money from Crypto Market. All you need to know is to know how to buy/sell using our expert forecast daily. Watch our tutorial video on how to Buy/Sell to give you the required knowledge you need to starttrading immediately.
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
                 To fund your account on earnars.com after registeration, go to "My Wallet" section and click on deposit and enter the amount you want to fund your account with, This will redirect you to flutter wave secure payment channel that gives you various payment options. To fund your account with an exchange watch the tutorial video.
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
                <span> How much do i stake in every trade? </span>
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
                <span> What is the guarantee am going to make money trading Crypto?</span>
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

export default CryptoPage