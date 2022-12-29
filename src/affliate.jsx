import React from "react";
import "./style/home.css"
import "./style/affiliate.css"
import Footer from "./footer";
import { Link} from "react-router-dom";

const Affliate =()=>{
    return(
        <div className="Affliate_Bg_Cover3">
       

         <div className="AffliateDiv34">


               <div className="ExcitedShare">
                  We Are Excited to Share Our Revenue with you
               </div>
               <div className="EarnNaira">Earn ₦750 to ₦6000 Naira per referral</div>

               <div className="ButtonT"> <button className="Watch_Now25">Watch Now</button></div>
               <div className="SimpleLet">Its easy and Simple .Lets get the following Steps.</div>

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
                   <p className="Each_Time_your">Each time your referral subscribe to any of our premium package you earn 50% of the amount paid.</p>
                   <p className="Each_Time_your">
                       Withdrawals of Earnings Are instant and paid directly to your bank account.
                   </p>
               </div>

               <div className="Start_Now_Button" style={{marginBottom:"15px"}}>Start now</div>
               {/* <div className="Promotional_Material">Download promotional materials</div> */}

               {/* <div className="Promo_Div2">
                   <div className="Promo_Div"></div>
                   <div className="Promo_Div"></div>
                   <div className="Promo_Div"></div>
               </div> */}

               {/* <div className="Promo_Div2 PromoTv">
                   <div className="Promo_Div"></div>
                   <div className="Promo_Div"></div>
                   <div className="Promo_Div"></div>
               </div> */}


         </div>


        <Footer/>

        </div>
    )
}

export default Affliate;