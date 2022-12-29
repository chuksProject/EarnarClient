import React, {useState,useContext} from 'react'
import "./style/home2.css"
import "./style/home.css";
import { Link} from "react-router-dom";
import { AuthContext } from './context/authContext';

const Navbar= () => {

    const [register,setRegister] = useState(false)
    const {currentUser,logout} = useContext(AuthContext);

  return (
    <div>
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
                  <a href="#">Earn Paper </a>
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
                  <a href="#">Premium Subscription</a>
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
                  <Link to="/affliate">Affliate Program</Link>
                </li>
                <li className="Contact_Bet">
                  <Link to="/Vcal"> Earn Calculator</Link>
                </li>
                <li className="Contact_Bet">
                  <a href="#Faqc">FAQ</a>
                </li>
                {/* <li className="FAQ_Bet">
                  <a href="#Faqc">FAQ</a>
                </li> */}
              </ul>
            </div>
            <div>
              {currentUser ? (
              <div>
              <ul>
                <li className="pauling">
                  <a>{currentUser?.username}</a>
                  <ul className="paulFr">
                      <li className="padup_Guide"></li>
                      <li className="paulmy_man">Anyanwu Paul </li>
                      <li className="Email_Like">{currentUser?.email}</li>
                      <li className="paulmy_man">ID:00000{currentUser?.id}</li>
                      <Link to="/wallet" className="FeedDiv"><li className="LogOutDiv_UN">My Wallet</li></Link>
                      <Link to="/profile" className="FeedDiv"><li className="LogOutDiv_UN">My Profile</li></Link>
                      {/* <Link to="" className="FeedDiv"> <li className="LogOutDiv_UN">My Subscription</li></Link> */}
                      <Link to ="/tip" className="FeedDiv"><li className="LogOutDiv_UN">My Tips(Premium)</li></Link>
                     
                      {currentUser?  <Link to="" className="FeedDiv"><li className="LogOutDiv_UN AMKING" onClick={logout}>Logout</li></Link>:""}
                     
                  </ul>
                </li>
              </ul>
            </div>
              ) : (

                <Link to="/register">
                <button className="Login">Login/Register</button>
              </Link>
               
              )}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar;