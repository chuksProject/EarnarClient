import React, {useState,useContext,useEffect} from 'react'
import "./style/home2.css"
import "./style/home.css";
import { Link} from "react-router-dom";
import { AuthContext } from './context/authContext';

const Navbar= () => {

    const [register,setRegister] = useState(false)
    const {currentUser,logout,isPaid} = useContext(AuthContext);
    const tr = window.location.pathname;

    console.log(tr)
    
 
     setTimeout(() => {
            setRegister() 
              }, 5000);
 

  return (
    <div>
      {tr === "/dashboard" ? "":
        <div className="Header_Div_New_Bg">
          <div className="header">
            <div>
              
                <a href="/" >
                  <img src="/img/Earnars1@72x1.png" className="imghy"/>
                </a>
              
            </div>
            <div>
              <ul className="header_list">
                <li className="Prediction_dropDown">
                  <a href="">Predictions</a>
                  <div className="OverTime_View">
                    <div className="DoubleChancert">
                      <a className="cover_Div"></a>
                      <a href="/sport">Sports</a>
                      <a href="/forex">Forex</a>
                      <a href="/cryptocurrency">Cryptocurrency </a>
                      <a href="/binary">Binary</a> 
                    
                    </div>
                  </div>
                </li>
                <li className="Premium_Bet">
                  <a href="/premium">Premium Subscription</a>
                
                </li>
                <li className="Affliate_Bet">
                  <a href="/affliate">Partners Program</a>
                </li>
                <li className="Contact_Bet">
                  <a href="/betcalculator"> Bet Calculator</a>
                </li>
                <li className="Contact_Bet vap">
                  {tr === "/" ?<a href="#Faqc">FAQ</a> :null}
                  
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
                      <li className="Email_Like"><div className="Email_Like2">{currentUser?.email}</div></li>
                      <li className="paulmy_man">ID:00000{currentUser?.id}</li>
                      <a href="/wallet" className="FeedDiv"><li className="LogOutDiv_UN">My Wallet</li></a>
                      <a href="/profile" className="FeedDiv"><li className="LogOutDiv_UN">My Profile</li></a>
                      {isPaid ? <a href="/tip" className="FeedDiv"><li className="LogOutDiv_UN">My Tips(Premium)</li></a> :<div onClick={()=>setRegister(!register)} className="FeedDiv" ><li className="LogOutDiv_UN">My Tips(Subscribe)</li></div>}
                     
                     
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
        }


         {register ? <div style={{position:'absolute',top:"50%",left:"50%",transform:"translate(-50%,-50%)",color:"red",zIndex:"500",fontSize:"20px",padding:"5px 10px",backgroundColor:"#fff"}}> Please subscribe to unlock</div>:""}
        {/* <div style={{position:'absolute',top:"400px",left:"50%",transform:"translate(-50%,-50%)",color:"red",zIndex:"500"}}> Please subscribe to unlock</div> */}
    </div>
  )
}

export default Navbar;