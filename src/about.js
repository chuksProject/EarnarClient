import React,{useState} from "react"
import Footer from "./footer"
import "./style/about.css"
import { Link} from "react-router-dom";


const About=()=>{

    const [register,setRegister] = useState(false)
    return(
        <div className="About_Dive_Page" style={{backgroundImage:"linear-gradient(to right, rgba(106, 116, 167, 0.34), rgba(119, 135, 182, 0.95))",paddingTop:"10px"}}>
             <div className="About_Dive_Page1">

                 {/* <div className="Header_Div_New_Bg">
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
                  <a href="#">Contact Us</a>
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
        </div> */}
             <div className="About_Us">
                 <div className="About_paragraph"> 
                 <div className="About_header">About Us</div>
                <p className="Set_A_Branch"> At Preditbet.com, We set a benchmark of making provision of safe and accurate football tips you can trust! Preditbet predictions, tips & analysis are based on algorithms, detailed analysis, betting tips, forms and statistics. We have dedicated experts that are passionate in ensuring you make profits!</p>

<p className="Set_A_Branch">We provide you with the most accurate and guaranteed football tips everyday of the week. We are relentless in our drive to assist many bettors make good use of the tips we provide to guarantee profits. Our strong presence in Nigeria, Kenya, Tanzania, South Africa, Uganda, Cyprus, Russia, United Kingdom, USA and other European countries makes us the number destination for all things related to soccer forecasts.</p>

<p className="Set_A_Branch">Our tipsters at Preditbet offer predictions for over 60 leagues. We are thorough in our work and have the success of our users in mind. We promise to aid you in your bets!
Wonder less we are considered the Home of Soccer Predictions!</p>
                 </div>
             </div>
            <div className="Foot_VH"><Footer /></div> 

            </div>
        </div>
    )
}

export default About;