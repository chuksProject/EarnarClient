import React,{useState} from "react"
import Footer from "./footer"
import "./style/about.css"
import { Link} from "react-router-dom";


const Disclaimer=()=>{

    const [register,setRegister] = useState(false)
    return(
        <div className="About_Dive_Page" style={{backgroundImage: "linear-gradient(to right, rgba(106, 116, 167, 0.34), rgba(119, 135, 182, 0.95))",paddingTop:"10px"}}>
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
                 <div className="About_header"> Disclaimer</div>
                <p className="Set_A_Branch"> Preditbet.com is not a bookmaker, betting and does not collect bets. We provide predictions, techniques, guides, help and recommendations as we try to make them as accurate as possible are subject to errors.</p>




<p className="Set_A_Branch"> Predictions must be considered as recommendations and not incitement to bet, Remember that gambling should be considered as entertainment. The visitor and preditbet user is solely responsible for his actions and his decisions and in no event shall the site and its employees can be held responsible for the information included on preditbet.</p>
<p className="Set_A_Branch"> Preditbet will not be liable for any loss of money or anything else that may result from the use of the information on preditbet. Also please note that in some countries there is restrictions on sports betting and it is the sole responsibility of the user / visitor to see and learn about these regulations. We reserve the right to discretion, without prior notice, to do changes and corrections to this site. The images, except where otherwise indicated, are taken directly from the web, if some images were inserted by mistake violating the copyright, please contact the administrator for immediate removal.</p>
<p className="Set_A_Branch"> By opting to receive soccer predictions and tips, you accept that all preditbet’s predictions and tips are for informational purposes only and that preditbet take no responsibility for any losses incurred by you the subscriber, as a direct result of acting upon received preditbet’s information. We do not encourage gambling in any sort of form. Users under 18 years old must seek parental consent.</p>
                 </div>
             </div>
            <div className="Foot_VH"><Footer /></div> 

            </div>
        </div>
    )
}

export default Disclaimer;