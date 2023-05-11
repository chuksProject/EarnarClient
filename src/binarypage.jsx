import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./style/sportPage.css"
import {  faPlus,faMinus} from '@fortawesome/free-solid-svg-icons'
import "./style/home.css";
import "./style/home2.css"
import Footer from "./footer"
import { Link} from "react-router-dom";

const BinaryPage = () => {


    const [show,setShow]= useState(false)
    const [show1,setShow1]= useState(false)
    const [show2,setShow2]= useState(false)
    const [show3,setShow3]= useState(false)
    const [show4,setShow4]= useState(false)
    const [show5,setShow5]= useState(false)
    const [show6,setShow6]= useState(false)

    

     const dropping =()=>{
      setShow(!show)
      setShow1(false)
      setShow2(false)
      setShow3(false)
      setShow4(false)
      setShow5(false)
    }

    const dropping1 =()=>{
      setShow(false)
      setShow1(!show1)
      setShow2(false)
      setShow3(false)
      setShow4(false)
      setShow5(false)

    }

    const dropping2 =()=>{
      setShow(false)
      setShow1(false)
      setShow2(!show2)
      setShow3(false)
      setShow4(false)
      setShow5(false)
       
    }
    const dropping3 =()=>{
      setShow(false)
      setShow1(false)
      setShow2(false)
      setShow3(!show3)
      setShow4(false)
      setShow5(false)
       
    }
    const dropping4 =()=>{
      setShow(false)
      setShow1(false)
      setShow2(false)
      setShow3(false)
      setShow4(!show4)
      setShow5(false)
       
    }
    const dropping5 =()=>{

      setShow(false)
      setShow1(false)
      setShow2(false)
      setShow3(false)
      setShow4(false)
      setShow5(!show5)
       
    }

  return (
    <div style={{backgroundColor:"#2a2c42"}}>
        <div className="sportPa">
        <div>
          <img src="/img/earnarsBanners3.png" className="AffliateBanner" alt=""/>
          </div>
        <div className="MakingMoney">
        Making Money Daily on <span className="forexy">Binary </span>trading is as easy as following our daily expert predictions
        </div>
        <div className="NowUpSign"><Link to="/login" className="ifi">SIGN UP NOW</Link></div>
        <p className="SportBetting">What Is Binary trading</p>
        <div className="outcomeBeen1">
        <div className="outcomeBeen">
        A <span className="forexy">Binary</span> option is a type of option with a fixed payout in which you 
predict the outcome from two possible results. If your prediction is 
correct, you receive the agreed payout. If not, you lose your initial 
stake, and nothing more. It's called 'binary' because there can be 
only two outcomes – win or lose. 
        </div>
        </div>
        <p className="WhyStart">Why Start Binary Trading</p>
        <div className="ifNi"></div>
        <div className="EasyTi">
            <div className="EasyTim">
            <div className="onV">
            <img src="/img/icinC1.svg" alt="every source of fund" className="everyday"/>
                <p className="startedf">Easy To Trade</p>
                </div>
                <div className="everyDay">
                Binary option trading allows 
traders/investors who have 
little experience trading to 
kick start their journey and 
start making money on the 
go.You also only have to 
make a prediction correct 
out of two possible outcomes. 
You do not have to worry with 
stop losses, leverage and 
magnitude of price movement 
when binary trading.</div>
            </div>
            <div className="EasyTim">
            <div className="onV">
            <img src="/img/icinC1.svg" alt="every source of fund" className="everyday"/>
                <p className="startedf">High  R.O.I  Potential</p>
                </div>
                <div className="everyDay">Due to the higher risk nature 
of binary options, typically 
the returns on your investment 
are also higher. Average returns 
are typically between 60-90%. 
This compares to a FOREX trader 
who would typically realize 
returns of approximately 10%.

</div>
            </div>
            <div className="EasyTim">
            <div className="onV">
            <img src="/img/icinC1.svg" alt="every source of fund" className="everyday"/>
                <p className="startedf"> Known Risk And Reward </p>
                </div>
                <div className="everyDay">You know right up front exactly 
how much you are risking and 
exactly how much you will profit 
if you win the trade. There is no 
risk of leverage costing your 
more than the amount you risked 
on the trade. Only your chosen 
amount to risk on any particular 
trade is at risk on that trade. 
You know exactly how much money 
you can possibly lose and how 
much exactly you can possibly 
make if you win.</div>
            </div>
        </div>

        <div className="AgenciesTy">What Are Binary Option Broker</div>
        <div className="ifNi"></div>
        <p className="everyDay Dayword">Binary Brokers are platforms that sell binary options at a fixed price (e.g., $100) 
and offer some fixed percentage return in case of in-the-money settlement.</p>
       
<div className="SportsImg1">
   <div className="SportsImg">
   <img src="/img/images.jpg" alt="" title="" className="marqueelogo" style={{width: "160px", maxWidth:"none"}}/>
   <img src="/img/bett.svg" alt=""  title="" className="marqueelogo" style={{width: "160px", maxWidth:"none"}}/>
   <img src="/img/Betway.png" alt=""  title="" className="marqueelogo" style={{width: "160px", maxWidth:"none"}}/>
   <img src="/img/kingk.png" alt=""  title="" className="marqueelogo" style={{width: "110px", maxWidth:"none"}}/>
   <img src="/img/betKing.svg" alt=""  title="" className="marqueelogo" style={{width: "160px", maxWidth:"none"}}/>
   <img src="/img/images.jpg" alt=""  title="" className="marqueelogo" style={{width: "160px", maxWidth:"none"}}/>
   </div>
</div>

        <div className="BettingTu">Binary Option Tutorial Videos</div>
        <div className="firey">
            <div className="firey1">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/zBlvE9pX-IQ" title="How to Register and Verify Pocket Option Account" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="firey1">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/7dGSYzLpY7I" title="POCKET OPTIONS TUTORIAL - FUNDING YOUR BROKER TO MAKE MONEY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="firey1">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Z5e1CbNbxdU" title="How To WITHDRAW Money From Pocket Option - 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>

        <div>
          <div id="Faqc" className="faqSportMa">
            <div className="firstTom faqSports">FAQ</div>
            <div>
              <div className="HowFarBro" onClick={dropping}>
                <span>How do resgister  with a Binary Option Broker?</span>{" "}
                <span>
                {show? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show ? (
                <p className="ILOVEK">
                  {" "}
                  To register with a Binary Option Borker,visit any broker of your choice and click on their signup button to register with them. You can register with more than one broker{" "}
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="HowFarBro" onClick={dropping1}>
                <span>I dont Know anything about Binary trading,What should i do?</span>
                <span>
                {show1? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show1 ? (
                <p className="ILOVEK">
                  Not knowing about Bianry Trading doesnt stops you from making money from trading the Market. All you need to know is to know how to buy/sell using our expert forecast daily. Watch our tutorial video on how to Buy/Sell to give you the required knowledge you need to starttrading immediately.
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="HowFarBro" onClick={dropping2}>
                <span> How can i fund my account? </span>
                <span>
                  {show2? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show2 ? (
                <p className="ILOVEK">
                  To fund your account on earnars.com after registeration, go to "My Wallet" section and click on deposit and enter the amount you want to fund your account with, This will redirect you to flutter wave secure payment channel that gives you various payment options. To fund your account with a Broker watch the tutorial video
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="HowFarBro" onClick={dropping3}>
                <span> Can your company Trade for me and pay me a percentage monthly?</span>
                <span>
                  {show3? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show3 ? (
                <p className="ILOVEK">
                  We do not manage users funds or bet for any user, we only forecast wining trades. Users are responsible for  any amount of money they wish to stake with the trading platform they are registered with.
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="HowFarBro" onClick={dropping4}>
                <span>How much do i stake in every trade?</span>
                <span>
                  {show4? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show4 ? (
                <p className="ILOVEK">
                You are responsible for any amount you wish to stake on any trading portal but we advice users to risk between 1% to 5% of their capital on any trade forecasted.
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="HowFarBro" onClick={dropping5}>
                <span> What is the guarantee am going to make money on Binary trading?</span>
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
           
          </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default BinaryPage;