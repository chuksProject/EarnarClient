import React ,{useState,useContext} from "react";
import "./style/home.css"
import "./style/affiliate.css"
import Footer from "./footer";
import { Link} from "react-router-dom";
import { AuthContext } from './context/authContext';

const Affliate =()=>{

    const {currentUser} = useContext(AuthContext);
    return(
        <div className=" " style={{background:"#2a2c42"}}>
       

         <div className="AffliateDiv34">
                 <div >
                     <img src="/img/EarnarsAffliateBanner.png" className="AffliateBanner"/>
                 </div>
                
               <div className="ExcitedShare">
                  We Are Excited to Share Our Revenue with you
               </div>
               <div className="EarnNaira">Earn $25 dollars or ₦12,500 Naira per referral</div>

               <div className="ButtonT"> <button className="Watch_Now25">Watch Now</button></div>
               <div className="SimpleLet">Its easy and Simple .Lets get started with the following Steps.</div>

               <div className="Create_account_holder_Div">
                   <div className="who">
                       <div className="Create_account_Div"><img src="/img/create.png" className="Create_account_Div1"/>
                       <p className="AccountPTag">1</p></div>
                       <div className="Create_AccountD">Create Account</div>
                   </div>
                   <div className="who">
                   <div className="Create_account_Div"><img src="/img/invite.jpg" className="Create_account_Div1"/>
                   <p className="AccountPTag">2</p>
                   </div>
                       <div className="Create_AccountD">Invite Your friends</div>
                   </div>
                   <div className="who">
                   <div className="Create_account_Div"><img src="/img/earn.png" className="Create_account_Div1"/>
                   <p className="AccountPTag">3</p></div>
                       <div className="Create_AccountD">Start Earning</div>
                   </div>
               </div>


               <div className="Your_Earning_never_Stop">
                   Your Earnings Never Stops
               </div>
               <div className="Package_Up">
                   <p className="Each_Time_your">Each time your referral subscribe to  our premium package you earn 50% of the amount paid.</p>
                   <p className="Each_Time_your">
                       Withdrawals of Earnings Are instant and paid directly to your bank account.
                   </p>
               </div>

     {currentUser? <a href="/profile" className="AffButton"><div className="Start_Now_Button cap" >Start now</div></a>:
               <a href="/register" className="AffButton"><div className="Start_Now_Button cap" >Start now</div></a>}
             


               


         </div>


        <Footer/>

        </div>
    )
}

export default Affliate;