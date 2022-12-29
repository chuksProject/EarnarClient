import React ,{useState,useEffect}from "react";
import { Link} from "react-router-dom";
import "./style/home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Footer from "./footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlus} from '@fortawesome/free-solid-svg-icons'
import Came from "./addcarousel"
import AOS from 'aos';


const Car=() =>{

  const [show,setShow]= useState(false)
  const [show1,setShow1]= useState(false)
  const [show2,setShow2]= useState(false)

  const [register,setRegister] = useState(false)

  useEffect(()=>{
    AOS.init();
  },[])
  

    return (
      <div >
      <div className="Home_Bg_Bg" >
        <div className="Header_Div_New_Bg">
          <div className="header">
            <div>
              <div>
                <Link to="/" className="logoM">
                  LOGO
                </Link>
              </div>
            </div>
            <div>
              <ul className="header_list">
                <li className="Prediction_dropDown">
                  <a href="#">prediction </a>
                  <div className="OverTime_View">
                    <div className="DoubleChancert">
                      <a className="cover_Div"></a>
                      <a>Double Chance</a>
                      <a>Both Teams to Score</a>
                      <a>Under/Over 1.5</a>
                      <a>Under/Over 2.5</a>
                      <a>Over 0.5 Half time</a>
                      <a>Full Time 1x2</a>
                      <a>Draws</a>
                      <a>Draw No Bet</a>
                    </div>
                  </div>
                </li>
                <li className="Premium_Bet">
                  <a href="#">Premium Bets</a>
                  <ul className="OverTime_View AddMeUp">
                    <div className="DoubleChancert">
                      <a className="cover_Div"></a>
                      <a>Silver Pack - 1Week</a>
                      <a>Diamond Pack - 1Month</a>
                      <a>Gold Pack - 3Months</a>
                    </div>
                  </ul>
                </li>
                <li className="Affliate_Bet">
                  <Link to="/affliate">Affliate program</Link>
                </li>
                <li className="Contact_Bet">
                  <Link to="/Odd">5 ODD Millionaire</Link>
                </li>
                <li className="Contact_Bet">
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li className="FAQ_Bet">
                  <a href="#Faqc">FAQ</a>
                </li>
              </ul>
            </div>
            <div>
              {register ? (
                <Link to="/register">
                  <button className="Login">Login/Register</button>
                </Link>
              ) : (
                <div>
                  <ul>
                    <li className="pauling">
                      <a>Paul</a>
                      <ul className="paulFr">
                          <li className="padup_Guide"></li>
                          <li className="paulmy_man">Anyanwu Paul </li>
                          <li className="Email_Like">Anyanwupaul@gmail.com</li>
                          <li className="paulmy_man">ID:0000001</li>
                          <Link to="/wallet" className="FeedDiv"><li className="LogOutDiv_UN">My Wallet</li></Link>
                          <Link to="/profile" className="FeedDiv"><li className="LogOutDiv_UN">My Profile</li></Link>
                          <Link to="" className="FeedDiv"> <li className="LogOutDiv_UN">My Subscription</li></Link>
                          <Link to ="/tip" className="FeedDiv"><li className="LogOutDiv_UN">My Tips(Premium)</li></Link>
                          <Link to="/Vcal" className="FeedDiv"> <li className="LogOutDiv_UN">Virtual Leaque CalCalculator</li></Link>
                          <Link to="" className="FeedDiv"><li className="LogOutDiv_UN AMKING">Logout</li></Link>
                      </ul>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

       
        {/*======  mobile header ========*/} 


       {/* <div className="feere">
  
           <label>
<input type="checkbox"/>
<span className="menu"> <span className="hamburger"></span> </span>
<ul>
  <li> <a href="#">Home</a> </li>
  <li> <a href="#">About</a> </li>
  <li> <a href="#">Contact</a> </li>
</ul>
</label>
       </div> */}
        

        {/*======  section2 ========*/}

        <div className="CarouseDivDiv ">
          <Carousel
            autoplay={true}
            intervals={1000}
            showArrows={true}
            infiniteLoop={true}
          >
            <div className="carousel_Div">
              <img src="/img/bet.jpg" className="ImgDiv" />
            </div>
            <div className="carousel_Div">
              <img src="/img/emeka.jpg" className="ImgDiv" />
            </div>
            <div className="carousel_Div">
              <img src="/img/bet2.jpg" className="ImgDiv" />
            </div>
          </Carousel>
        </div>

        {/*======  section3========*/}

        <div className="FREE1">
          <div className="Free">
            <div>
              <p className="Free_ExportTT">Free Expert Prediction</p>
            </div>
            <div>
              <p className="header_Date">
                14<sup>th</sup> August, 2022.
              </p>
            </div>
          </div>
          {/*======  section4 ========*/}
          <div className="ActivityDiv">
            <div className="ActivityDay">
              <div className="yes">
                <p>YESTERDAY</p>
              </div>
              <div className="tod">
                <p>TODAY</p>
              </div>
              <div className="pre">
                <p>TOMORROW</p>
              </div>
            </div>
          </div>

          {/*======  section5 ========*/}

          <div>
            <div className="TimeDiv12">
              <ul className="TimeDiv">
                <li>TIME</li>
                <li>HOME TEAM</li>
                <li>SCORE(HT?FT)</li>
                <li>AWAY TEAM</li>
                <li>TIP</li>
                <li>RESULT</li>
              </ul>
            </div>

            <div className="bigManDiv">
              <div className="FOR">
                <div className="Leaque">
                  <div className="Europe_Div">
                    Europe -Champion League Qualifier
                  </div>

                  <div>
                    <ul className="TimeDiv1 ADDTimeDbg1">
                      <li>2:00</li>
                      <li>England</li>
                      <li>5:0</li>
                      <li>Nigeria</li>
                      <li>1</li>
                      <li>WON</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="TimeDiv1 ADDTimeDbg">
                      <li>2:00</li>
                      <li>England</li>
                      <li>5:0</li>
                      <li>Nigeria</li>
                      <li>1</li>
                      <li>WON</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="TimeDiv1 ADDTimeDbg1">
                      <li>2:00</li>
                      <li>England</li>
                      <li>5:0</li>
                      <li>Nigeria</li>
                      <li>1</li>
                      <li>WON</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="TimeDiv1 ADDTimeDbg">
                      <li>2:00</li>
                      <li>England</li>
                      <li>5:0</li>
                      <li>Nigeria</li>
                      <li>1</li>
                      <li>WON</li>
                    </ul>
                  </div>

                  <div>
                    <ul className="TimeDiv1 ADDTimeDbg1">
                      <li>2:00</li>
                      <li>England</li>
                      <li>5:0</li>
                      <li>Nigeria</li>
                      <li>1</li>
                      <li>WON</li>
                    </ul>
                  </div>

                  <div>
                    <ul className="TimeDiv1 ADDTimeDbg">
                      <li>2:00</li>
                      <li>England</li>
                      <li>5:0</li>
                      <li>Nigeria</li>
                      <li>1</li>
                      <li>WON</li>
                    </ul>
                  </div>

                  <div className="Europe_Div">Egypt - Premier League</div>

                  <div>
                    <ul className="TimeDiv1 ADDTimeDbg1">
                      <li>2:00</li>
                      <li>England</li>
                      <li>5:0</li>
                      <li>Nigeria</li>
                      <li>1</li>
                      <li>WON</li>
                    </ul>
                  </div>

                  <div>
                    <ul className="TimeDiv1 ADDTimeDbg">
                      <li>2:00</li>
                      <li>England</li>
                      <li>5:0</li>
                      <li>Nigeria</li>
                      <li>1</li>
                      <li>WON</li>
                    </ul>
                  </div>

                  <div>
                    <ul className="TimeDiv1 ADDTimeDbg1">
                      <li>2:00</li>
                      <li>England</li>
                      <li>5:0</li>
                      <li>Nigeria</li>
                      <li>1</li>
                      <li>WON</li>
                    </ul>
                  </div>

                  <div>
                    <ul className="TimeDiv1 ADDTimeDbg">
                      <li>2:00</li>
                      <li>England</li>
                      <li>5:0</li>
                      <li>Nigeria</li>
                      <li>1</li>
                      <li>WON</li>
                    </ul>
                  </div>

                  <div>
                    <ul className="TimeDiv1 ADDTimeDbg1">
                      <li>2:00</li>
                      <li>England</li>
                      <li>5:0</li>
                      <li>Nigeria</li>
                      <li>1</li>
                      <li>WON</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="TimeDiv1 ADDTimeDbg">
                      <li>2:00</li>
                      <li>England</li>
                      <li>5:0</li>
                      <li>Nigeria</li>
                      <li>1</li>
                      <li>WON</li>
                    </ul>
                  </div>

                  <div>
                    <ul className="TimeDiv1 ADDTimeDbg1">
                      <li>2:00</li>
                      <li>England</li>
                      <li>5:0</li>
                      <li>Nigeria</li>
                      <li>1</li>
                      <li>WON</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="TimeDiv1 ADDTimeDbg">
                      <li>2:00</li>
                      <li>England</li>
                      <li>5:0</li>
                      <li>Nigeria</li>
                      <li>1</li>
                      <li>WON</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="See_All">
              <button className="See_All_Prediction">
                SEE ALL PREDICTIONS{" "}
              </button>
            </div>

            <div className="PremiumTip">
              <div className="TipResult" data-aos="fade-down" data-aos-duration="3000"
             data-aos-easing="linear">Premium Tip Results</div>
              <div className="TIRE1">
                {/* <div className="TIRE">
            
                       
                </div> */}

                <div data-aos="fade-up" data-aos-duration="3000"
             data-aos-easing="linear">
                  <Came />
                </div>

                <div className="KeepNote" data-aos="fade-up" data-aos-duration="3000"
             data-aos-easing="linear">
                  <p>
                    {" "}
                    <span className="Loss">NB:</span> Keep in mind that in case
                    of any loss (i.e THE RED MARK), we will add an extra one day{" "}
                    <span className="FREESP">FREE</span> as a replacement on
                    your subscription.
                  </p>
                </div>
              </div>
            </div>

            <div className="YOUME" data-aos="fade-up" data-aos-duration="3000"
             data-aos-easing="linear">
              <div className="WE1">
                <p className="WEME" data-aos="fade-right" data-aos-duration="3000"
             data-aos-easing="linear">WE ANALYSE & PREDICT, YOU WIN,WE WIN. </p>
                <p className="Think">
                  <span className="Gamblers">Gamblers</span> think short-term,
                  and <span className="Investor">Investors</span> think
                  long-term. <span className="Gamblers">Gamblers</span> think
                  1000 Odds which is 1000% interest per game placed,{" "}
                  <span className="Investor">Investors</span>think 1.5 to 2 Odds
                  which is 50 to 100% interest per game placed.{" "}
                  <span className="Gamblers">Gamblers</span> lose money 99.99%
                  of the time while <span className="Investor">Investors</span>{" "}
                  make money 85 to 95% of the time.{" "}
                  <span className="Gamblers">Gamblers</span> do not apply Risk-
                  Reward Ratio and Risk analysis to their account while{" "}
                  <span className="Investor">Investors</span> take them
                  seriously. Don't be a{" "}
                  <span className="Gamblers">Gamblers</span>, Be an{" "}
                  <span className="Investor">Investors</span>.{" "}
                  <span className="WEARE">
                    We are investors and deliver 50-100% profits 95% of the
                    time.
                  </span>{" "}
                  start investing with us today.
                </p>
              </div>
              <div className="WE2">
                <div className="JOIN_NOW" data-aos="fade-left" data-aos-duration="3000"
             data-aos-easing="linear">JOIN PREMIUM NOW</div>
                <div className="JOIN_NOW1" data-aos="fade-left" data-aos-duration="3000"
             data-aos-easing="linear">HOW TO PAY</div>
              </div>
            </div>

            <div className="MAKE_UPTO43" data-aos="fade-up" data-aos-duration="3000"
             data-aos-easing="linear">
              <div className="MAKE_UPTO">
                <div className="PROGRAM">
                  <p className="OUR_P">
                    {" "}
                    JOIN OUR AFFILIATE PROGRAM AND MAKEUP TO{" "}
                    <span className="Money">₦250,000</span> NAIRA MONTHLY ON
                    COMMISSION.
                  </p>
                  <p className="Instant_Daily">INSTANT DAILY WITHDRAWALS</p>
                </div>
                <div className="PROGRAM1">
                  <div className="START_NOW21" data-aos="flip-left" data-aos-duration="3000"
             data-aos-easing="linear">START NOW</div>
                </div>
              </div>
            </div>

            <div className="MAKE_UPTO43" data-aos="fade-up" data-aos-duration="3000"
             data-aos-easing="linear">
              <div className="MAKE_UPTO">
                <div className="PROGRAM">
                  <div className="FootballVisual">
                    SURE DAILY INCOME ON VIRTUAL FOOTBALL
                  </div>
                  <p className="OURppp">
                    {" "}
                    Make Up to 5000 Naira daily on virtual League using our
                    Virtual league calculator{" "}
                  </p>
                  <p className="Instant_Daily"></p>
                </div>
                <div className="PROGRAM1">
                  <div className="START_NOW21" data-aos="flip-right" data-aos-duration="3000"
             data-aos-easing="linear">START NOW</div>
                </div>
              </div>
            </div>

            <div >
              <div className="NewsBall">
                <p className="Hidden_div"></p>
                <p className="FOOTBALL_NEWS" data-aos="fade-down" data-aos-duration="3000"
             data-aos-easing="linear">LATEST FOOTBALL NEWS </p>
                <p className="SEE_ALL" data-aos="fade-up-left" data-aos-duration="3000"
             data-aos-easing="linear">SEE ALL {">>>"}</p>
              </div>
              <div className="Emy" data-aos="fade-up" data-aos-duration="3000"
             data-aos-easing="linear">
                <div className="lik">
                <div className="SapDiv">
                  <div className="SapImg">
                    <img src="/img/sap.jpg" className="IMGS" />
                  </div>
                  <p className="Nigerian">
                    Umar Sadiq Or The Nigerian Head Honcho Who is Taking Spain
                    By Storm
                  </p>
                  <div className="Emeka">
                    <button className="Read">Read More</button>
                  </div>
                </div>
                </div>

                <div className="lik">
                <div className="SapDiv">
                  <div className="SapImg">
                    <img src="/img/sap.jpg" className="IMGS" />
                  </div>
                  <p className="Nigerian">
                    Umar Sadiq Or The Nigerian Head Honcho Who is Taking Spain
                    By Storm
                  </p>
                  <div className="Emeka">
                    <button className="Read">Read More</button>
                  </div>
                </div>
                </div>

                <div className="lik">
                <div className="SapDiv">
                  <div className="SapImg">
                    <img src="/img/sap.jpg" className="IMGS" />
                  </div>
                  <p className="Nigerian">
                    Umar Sadiq Or The Nigerian Head Honcho Who is Taking Spain
                    By Storm
                  </p>
                  <div className="Emeka">
                    <button className="Read">Read More</button>
                  </div>
                </div>
                </div>

                <div className="lik">
                <div className="SapDiv">
                  <div className="SapImg">
                    <img src="/img/sap.jpg" className="IMGS" />
                  </div>
                  <p className="Nigerian">
                    Umar Sadiq Or The Nigerian Head Honcho Who is Taking Spain
                    By Storm
                  </p>
                  <div className="Emeka">
                    <button className="Read">Read More</button>
                  </div>
                </div>
                </div>
                {/* <div></div>
                       <div></div> */}
              </div>
            </div>

            {/* <div>
                  <div className="faq">FAQ</div>

                  <div>
                      <div></div>
                      <div></div>
                  </div>
              </div> */}
          </div>

          <div id="Faqc" data-aos="fade-up" data-aos-duration="3000"
             data-aos-easing="linear">
            <div className="firstTom" data-aos="fade-down" data-aos-duration="3000"
             data-aos-easing="linear">FAQ</div>
            <div>
              <div className="HowFarBro" onClick={() => setShow(!show)}>
                <span>How is Match predicted </span>{" "}
                <span>
                  <FontAwesomeIcon icon={faPlus} className="PlusIcon" />
                </span>
              </div>
              {show ? (
                <p className="ILOVEK">
                  {" "}
                  I am loving in cworl I am loving in cworl I am loving in cworl
                  I am loving in cworl I am loving in cworl I am loving in cworl
                  I am loving in cworl I am loving in cworl I am loving in cworl{" "}
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="HowFarBro" onClick={() => setShow1(!show1)}>
                <span>How is Match predicted,</span>
                <span>
                  <FontAwesomeIcon icon={faPlus} className="PlusIcon" />
                </span>
              </div>
              {show1 ? (
                <p className="ILOVEK">
                  I am loving in cworl I am loving in cworl I am loving in cworl
                  I am loving in cworl I am loving in cworl I am loving in cworl
                  I am loving in cworl I am loving in cworl I am loving in cworl
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="HowFarBro" onClick={() => setShow2(!show2)}>
                <span>How is Match predicted </span>
                <span>
                  <FontAwesomeIcon icon={faPlus} className="PlusIcon" />
                </span>
              </div>
              {show2 ? (
                <p className="ILOVEK">
                  I am loving in cworl I am loving in cworl I am loving in cworl
                  I am loving in cworl I am loving in cworl I am loving in cworl
                  I am loving in cworl I am loving in cworl I am loving in cworl
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <Footer />
      </div>
      </div>
    );
}

export default Car;