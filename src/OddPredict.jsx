import React,{useState} from "react"
import "./style/odd.css"
import "./style/home.css";
import "./style/affiliate.css"
import { Link} from "react-router-dom";
import Footer from "./footer"

const Odd =()=>{

    const [show,setShow]= useState(false)
  const [show1,setShow1]= useState(false)
  const [show2,setShow2]= useState(false)
  const [show3,setShow3]= useState(false)
  const [show4,setShow4]= useState(false)
 

    return(
        <div >

<div className="Header_Div_New_Bg">
            <div className="header">
               <div>
                   <div><Link to ="/" className="logoM">LOGO</Link></div>
               </div>
               <div>
                   <ul className="header_list" >
                       <li className="Prediction_dropDown"><a href="#">prediction</a>
                        <ul className="OverTime_View">
                            <li className="cover_Div"></li>
                            <li><a>Double Chance</a></li>
                            <li><a>Both Teams to Score</a></li>
                            <li><a>Under/Over 1.5</a></li>
                            <li><a>Under/Over 2.5</a></li>
                            <li><a>Over 0.5 Half time</a></li>
                            <li><a>Full Time 1x2</a></li>
                            <li><a>Draws</a></li>
                            <li><a>Draw No Bet</a></li>
                        </ul>
                       
                       </li>
                       <li className="Premium_Bet"><a href="#">Premium Bets</a></li>
                       <li className="Affliate_Bet"><Link to ="/affliate">Affliate program</Link></li>
                       <li className="Contact_Bet" ><a href="#">Contact Us</a></li>
                       <li className="FAQ_Bet"><a href="#Faqc">FAQ</a></li>
                   </ul>
               </div>
               <div>
                   <button className="Login">Login/Register</button>
               </div>
            </div>
            </div>


            <div className="trMonth">
                <div className="trMonth1">

                <p className="InTHREEM">Make ₦8,190,000 In three months</p>
                <p className="littlelittle">Start with as little as ₦500</p>
                <div className="SimpleAndf">Its easy and Simple. Lets get following Step</div>

                <div className="Create_account_holder_Div">
                    <div>
                   <div className="Thanks_DivU">
                       <div className="Create_account_Div"><img src="/img/create.png" className="Create_account_Div1"/>
                       <p className="AccountPTag">1</p></div>
                       <div className="Create_AccountD">Subcribe to Our Premuim</div>
                   </div>
                   </div>
                   <div>
                   <div className="Thanks_DivU">
                   <div className="Create_account_Div"><img src="/img/invite.jpg" className="Create_account_Div1"/>
                   <p className="AccountPTag">2</p>
                   </div>
                       <div className="Create_AccountD">Follow Our weekly Prediction</div>
                   </div>
                   </div>
                   <div>
                   <div className="Thanks_DivU">

                   <div className="Create_account_Div"><img src="/img/earn.png" className="Create_account_Div1"/>
                   <p className="AccountPTag">3</p></div>
                       <div className="Create_AccountD">Become A millionair</div>
                   </div>
                   </div>
               </div>
                
                <div className="SimpleAndf FollowUh">Follow Our Weekly Time Table</div>
                <div>
                    <ul className="OddWk_Div">
                        <li>WK</li>
                        <li>Capital</li>
                        <li>ODD</li>
                        <li>Result</li>
                        <li>Income</li>
                        <li>Reserve</li>
                    </ul>
                </div>
                <div>
                    <ul className="OddWk_Div23">
                        <li>1</li>
                        <li>500</li>
                        <li>5</li>
                        <li>W</li>
                        <li>5000</li>
                        <li>12000</li>
                    </ul>
                </div>
                <div>
                    <ul className="OddWk_Div23 addCM24">
                        <li>2</li>
                        <li>500</li>
                        <li>5</li>
                        <li>W</li>
                        <li>5000</li>
                        <li>12000</li>
                    </ul>
                </div>
                <div>
                    <ul className="OddWk_Div23">
                        <li>3</li>
                        <li>500</li>
                        <li>5</li>
                        <li>W</li>
                        <li>5000</li>
                        <li>12000</li>
                    </ul>
                </div>
                <div>
                    <ul className="OddWk_Div23 addCM24">
                        <li>4</li>
                        <li>500</li>
                        <li>5</li>
                        <li>W</li>
                        <li>5000</li>
                        <li>12000</li>
                    </ul>
                </div>
                <div>
                    <ul className="OddWk_Div23">
                        <li>5</li>
                        <li>500</li>
                        <li>5</li>
                        <li>W</li>
                        <li>5000</li>
                        <li>12000</li>
                    </ul>
                </div>
                <div>
                    <ul className="OddWk_Div23 addCM24">
                        <li>6</li>
                        <li>500</li>
                        <li>5</li>
                        <li>W</li>
                        <li>5000</li>
                        <li>12000</li>
                    </ul>
                </div>
                <div>
                    <ul className="OddWk_Div23">
                        <li>7</li>
                        <li>500</li>
                        <li>5</li>
                        <li>W</li>
                        <li>5000</li>
                        <li>12000</li>
                    </ul>
                </div>
                <div>
                    <ul className="OddWk_Div23 addCM24">
                        <li>8</li>
                        <li>500</li>
                        <li>5</li>
                        <li>W</li>
                        <li>5000</li>
                        <li>12000</li>
                    </ul>
                </div>
                <div>
                    <ul className="OddWk_Div23">
                        <li>9</li>
                        <li>500</li>
                        <li>5</li>
                        <li>W</li>
                        <li>5000</li>
                        <li>12000</li>
                    </ul>
                </div>
                <div>
                    <ul className="OddWk_Div23 addCM24">
                        <li>10</li>
                        <li>500</li>
                        <li>5</li>
                        <li>W</li>
                        <li>5000</li>
                        <li>12000</li>
                    </ul>
                </div>
                <div>
                    <ul className="OddWk_Div23">
                        <li>11</li>
                        <li>500</li>
                        <li>5</li>
                        <li>W</li>
                        <li>5000</li>
                        <li>12000</li>
                    </ul>
                </div>
                <div>
                    <ul className="OddWk_Div23 addCM24">
                        <li>12</li>
                        <li>500</li>
                        <li>5</li>
                        <li>W</li>
                        <li>5000</li>
                        <li>12000</li>
                    </ul>
                </div>
                <div className="TotalProfits">Total profits = Summmation of all reserve - initial = <span className="reserveT">₦20,000</span> </div>
                <div className="WknoM">
                    <div className="Explanation_Of_Term">
                        <div className="Des_Color ready ready1"><span className="ftee">Wk</span> = No of weeks</div>
                        <div className="ready1"><span className="ftee">ODD</span> = The minimum amount of odd</div>
                    </div>
                    <div className="Explanation_Of_Term">
                        <div className="ready ready1"><span className="ftee">Capital</span> = Your Betting Amount</div>
                        <div className="ready1"><span className="ftee">Result</span> = The outcome of the Game played</div>
                    </div>
                    <div className="Explanation_Of_Term">
                        <div className="ready ready1"><span className="ftee">Income</span> = Money Earned</div>
                        <div className="ready1"><span className="ftee">Reserve </span> : Money kept as profit after every move</div>
                    </div>
                </div>


                <div id="Faqc">

<div className="firstTom">FAQ</div>
<div>
    <div className="HowFarBro" onClick={()=>setShow(!show)}>Can I Start With Lower Or Bigger Amount Than 500?</div>
    {show ? 
    <p className="ILOVEK"> I am loving in cworl I am loving in cworl I am loving in cworl I am loving in cworl I am loving in cworl I am loving in cworl I am loving in cworl I am loving in cworl I am loving in cworl </p>
    :""}
</div>
<div>
    <div className="HowFarBro"   onClick={()=>setShow1(!show1)}>What If the Prediction for that week Fails?</div>
    {show1? 
    <p className="ILOVEK">I am loving in cworl I am loving in cworl I am loving in cworl I am loving in cworl I am loving in cworl I am loving in cworl I am loving in cworl I am loving in cworl I am loving in cworl</p>
    : ""}
</div>
<div>
    <div className="HowFarBro"  onClick={()=>setShow2(!show2)}>Which Package allows me to have accss to It?</div>
    {show2? 
    <p className="ILOVEK">I am loving in cworl I am loving in cworl I am loving in cworl I am loving in cworl I am loving in cworl I am loving in cworl I am loving in cworl I am loving in cworl I am loving in cworl</p>
    :""}
</div>
<div>
    <div className="HowFarBro"  onClick={()=>setShow3(!show3)}>What If the Prediction for that week Fails?</div>
    {show3? 
    <p className="ILOVEK">I am loving in cworl I am loving in cworl I am loving in cworl I am loving in cworl I am loving in cworl I am loving in cworl I am loving in cworl I am loving in cworl I am loving in cworl</p>
    :""}
</div>
<div>
    <div className="HowFarBro"  onClick={()=>setShow4(!show4)}>What If the Prediction for that week Fails?</div>
    {show4? 
    <p className="ILOVEK">I am loving in cworl I am loving in cworl I am loving in cworl I am loving in cworl I am loving in cworl I am loving in cworl I am loving in cworl I am loving in cworl I am loving in cworl</p>
    :""}
</div>






</div>

                </div>
                

                <div>
                <Footer/>
            </div>

            </div>

          

        </div>
    )
}

export default Odd;