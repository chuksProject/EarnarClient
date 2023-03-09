import React, {useState,useContext} from 'react'
import "./style/home2.css"
import "./style/home.css";
import { Link} from "react-router-dom";
import { AuthContext } from './context/authContext';

const Navbar= () => {

    const [register,setRegister] = useState(false)
    const {currentUser,logout} = useContext(AuthContext);
    const tr = window.location.pathname;

  return (
    <div>
        <div className="Header_Div_New_Bg">
          <div className="header">
            <div>
              
                <Link to="/" >
                  <img src="/img/Earnars1@72x1.png" className="imghy"/>
                </Link>
              
            </div>
            <div>
              <ul className="header_list">
                <li className="Prediction_dropDown">
                  <a href="#">Predictions</a>
                  <div className="OverTime_View">
                    <div className="DoubleChancert">
                      <a className="cover_Div"></a>
                      <Link to="/sportp">Sports</Link>
                      <Link to="/forexp">Forex</Link>
                      <Link to="/cryptop">Cryptocurrency </Link>
                      <Link to="/binaryp">Binary</Link> 
                    
                    </div>
                  </div>
                </li>
                <li className="Premium_Bet">
                  <Link to="/premium">Premium Subscription</Link>
                
                </li>
                <li className="Affliate_Bet">
                  <Link to="/affliate">Partners Program</Link>
                </li>
                <li className="Contact_Bet">
                  <Link to="/Vcal"> Bet Calculator</Link>
                </li>
                <li className="Contact_Bet vap">
                  {(tr == "/")||(tr =="/sportp")||(tr =="/forexp")||(tr =="/cryptop")|| (tr == "/binaryp")?<a href="#Faqc">FAQ</a>:""}
                  
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
                      <li className="paulmy_man">{currentUser?.username} </li>
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