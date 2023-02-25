import React,{useState,useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./style/sportPage.css"
import {  faPlus,faMinus} from '@fortawesome/free-solid-svg-icons'
import "./style/home.css";
import "./style/home2.css"
import "./style/sportsP.css"
import { Link} from "react-router-dom";
import Footer from "./footer"
import { AuthContext } from './context/authContext';

const SportsPage = () => {


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
        <div className="MakingMoney">
        Making Money Daily on <span className="forexy">SPORTS</span> trading is as easy as following our daily expert predictions
        </div>
        {currentUser?"":
        <Link to="/login" className="ifi"> <div className="NowUpSign">SIGN UP NOW</div></Link>}
        <p className="SportBetting">What Is Sport Betting</p>
        <div className="outcomeBeen">
         Sports betting is the activity of predicting sports results and placing a wager on the outcome. Sport betting is legally recognized across the world and has actually been an alternative source of income for millions of sport fans across the world.  
        </div>
        <p className="WhyStart">Why Start Sport Betting</p>
        <div className="ifNi"></div>
        <div className="EasyTi">
            <div className="EasyTim">
                <p className="startedf">Easy to Get Started</p>
                <div className="everyDay">
                Alot of money making 
sites require you to follow specific rules and may even require you to have high level skills or go through 
regorious learning to get 
started. This may lead to 
challenges if your schedule is too tight  or you lack 
the resources. The good 
thing with sports betting is 
that you won’t need any tool 
or financial commitment 
before you begin staking.
You only need like N500 naira to begin staking. You also have the chance to bet with the same amount from time to time.</div>
            </div>
            <div className="EasyTim">
                <p className="startedf">Alternative Source of Income</p>
                <div className="everyDay">Betting comes with the oppurtunity to make money when some cash is involved. Any amount you have can earn you some profit as long as you bet on wining games or follow our recommended wining games. Some people even quit their jobs to concentrate fully on betting as a means of their survival. when you structure your betting system with proper risk reward ratio you will definitely ,make a fortune from it.

</div>
            </div>
            <div className="EasyTim">
                <p className="startedf">Convinience & non stop</p>
                <div className="everyDay">Most games can’t be played
every day, maybe because 
they are too expensive or 
they are too tiring as such 
you cannot play them every 
day. But with sports betting, it is an affordable hobby that you can play or watch and enjoy every day. The sport betting industry never go to sleep,it functions 24hour a day and 365 days a year. 
You can also enjoy sports betting anywhere and anytime e.g from the comfort of your home or at any betting shop near you.</div>
            </div>
        </div>

        <div className="AgenciesTy">Sports Betting Agencies</div>
        <div className="ifNi"></div>
        <p className="everyDay">Any company that is providing sports betting services can be called a bookmaker, betting agency,sportsbook or bookie.</p>
        <div className="wemerYt">
            <div className=""><img src="/img/images.jpg" className="cap3" /></div>
            <div><img src="/img/betKing.svg" className="cap3" /></div>
            <div className=""><img src="/img/guma.png" className="cap5" /></div>
            <div className=""><img src="/img/bett.svg" className="cap3" /></div>
            <div className=""><img src="/img/Betway.png" className="cap3" /></div>
            <div className=""><img src="/img/kingk.png" className="cap4" /></div>
        </div>
        <div className="BettingTu">Sport Betting Tutorial Videos</div>
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
                <span>How do I register  with a broker?</span>{" "}
                <span>
                {show? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show ? (
                <p className="ILOVEK">
               To register with a sports betting broker,visit any sports bookmarker of your choice and click on their signup button to register with them. You can register
with more than one broker.
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="HowFarBro" onClick={() => setShow1(!show1)}>
                <span>I dont Know anything about betting,What should I do?</span>
                <span>
                {show1? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show1 ? (
                <p className="ILOVEK">
               Not knowing about sports bettng doesnt stops you from making money from sports betting. All you need to know is how to place bet using our coupon code for each prediction we make. Watch our tutorial video on how to bet to give you the required knowledge you need to place a bet.
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="HowFarBro" onClick={() => setShow2(!show2)}>
                <span> How can I fund my account?</span>
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
                <span> Can your company bet for me and pay me percentage monthly? </span>
                <span>
                  {show3? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show3 ? (
                <p className="ILOVEK">
              
We do not manage users funds or bet for any user, we only forecast/predicts games. Users are responsible for  any amount of money they wish to stake with the bookies they register with.
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="HowFarBro" onClick={() => setShow4(!show4)}>
                <span>How much do I bet in every game?</span>
                <span>
                  {show4? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show4 ? (
                <p className="ILOVEK">
                 Your are responsible for any amount you wish to bet on any bookmaker portal but we advice users to risk between 1% to 5% of their capital on any game.
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="HowFarBro" onClick={() => setShow5(!show5)}>
                <span> What is the guarantee am going to make money betting?</span>
                <span>
                  {show5? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show5 ? (
                <p className="ILOVEK">
              We do not guarantee any prediction made by our experts, how ever we guarantee the refund of users subscription fees if at the end of any particular month they dont turn profit by following all our prediction. This refund policy is subject to our "Refund Policy Terms and Condition"
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

export default SportsPage