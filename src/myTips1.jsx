import React ,{useState}from "react"
import Footer from "./footer"
import { Link} from "react-router-dom";
import "./style/mytip.css"
const MyTip1 =()=>{

    const [register,setRegister] = useState(false)
    return(
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
                {/* <li className="FAQ_Bet">
                  <a href="#Faqc">FAQ</a>
                </li> */}
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
            <div className="Mysee">
       <div className="MyTip deee">
       <div className="Free">
          <div>
              <p className="Free_ExportTT">Free Expert Prediction</p>
          </div>
          <div>
          <p className="header_Date">14<sup>th</sup> August, 2022.</p>
          </div>
     </div>

     <div className="TimeDiv12 ">
                   <ul className="TimeDiv spaceMargiN">
                       <li>
                           TIME
                       </li>
                       <li className="EngLan">
                        LEAGUE
                       </li>
                       <li>
                         TEAM
                       </li>
                       <li>
                           TIP
                       </li>
                       <li>
                           ODD
                       </li>
                       <li>
                           RESULT
                       </li>
                     
                     
                   </ul>
               </div> 

               <div className="bigManDiv">
                   <div className="FOR">
               <div className="Leaque tipHeightDiv">
                   
                

                   <div>
            <ul className="TimeDiv1 ADDTimeDbg1">
                <li>2:00</li>
                <li className="EngLan">England</li>
                <li>Ac Roma vs Nigeria </li>
                <li>X2</li>
                <li>1.34</li>
                <li>1 : 1</li>
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1">
                <li>2:00</li>
                <li className="EngLan">England</li>
                <li>Ac Roma vs Nigeria </li>
                <li>X2</li>
                <li>1.34</li>
                <li>1 : 1</li>
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1">
                <li>2:00</li>
                <li className="EngLan">England</li>
                <li>Ac Roma vs Nigeria </li>
                <li>X2</li>
                <li>1.34</li>
                <li>1 : 1</li>
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1">
                <li>2:00</li>
                <li className="EngLan">England</li>
                <li>Ac Roma vs Nigeria </li>
                <li>X2</li>
                <li>1.34</li>
                <li>1 : 1</li>
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1">
                <li>2:00</li>
                <li className="EngLan">England</li>
                <li>Ac Roma vs Nigeria </li>
                <li>X2</li>
                <li>1.34</li>
                <li>1 : 1</li>
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1">
                <li>2:00</li>
                <li className="EngLan">England</li>
                <li>Ac Roma vs Nigeria </li>
                <li>X2</li>
                <li>1.34</li>
                <li>1 : 1</li>
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1">
                <li>2:00</li>
                <li className="EngLan">England</li>
                <li>Ac Roma vs Nigeria </li>
                <li>X2</li>
                <li>1.34</li>
                <li>1 : 1</li>
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult">
                <li className="Total_Odd">TOTAL ODD</li>
               
                <li></li>
                <li></li>
                <li></li>
                <li className="tippo">9 : 9</li>
                
            </ul>
        </div>
        
        
  
               </div>

               <div className="ImportantRep">
                   <p className="NoteImportant">Important Note</p>
                   <p className="MoreRiskMore">Don't be a Gambler,Be An Investor.Do not risk more than what you can bear.We recommend you risk between 1-5% of your capital on each game.</p>

               </div>
               <div className="finding">GOOD LUCK</div>

               </div>
               </div>

     
               </div>
               <Footer/>
  </div>



        </div>
    )
}

export default MyTip1;