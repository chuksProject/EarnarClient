import React,{useState,useContext} from "react";
import "./style/register.css";
import "./style/login.css";
import "./style/otp.css"

import { Link,useNavigate} from "react-router-dom";
import axios from "axios"
import {AuthContext}from "./context/authContext"



const Otp =()=>{

   
    
    return(
        <div className="BgColor" style={{backgroundImage: "linear-gradient(to right, rgba(106, 116, 167, 0.34), rgba(119, 135, 182, 0.95))"}}>
            <div className="Form_Divbb">
           <div className="Form_Div renttt">
               <form>
                  
                  <div className="welcome4">Email Verification</div>
                  <p className="codeSent">We have sent a code to your Email</p>
                  <div className="OTPDIV1">
                 <div className="OTPDiv">
                    <input type="number" placeholder ="" className="codePP" name="num" min="1" max="1"/>
                    <input type="number" placeholder ="" className="codePP" />
                    <input type="number" placeholder ="" className="codePP"/>
                    <input type="number" placeholder ="" className="codePP"/>
                    

                 </div>
                 </div>
                  <a href="/resetpassword" className="sesetP"><div  className="loginn">Verify Account</div></a>
              
         
                     <p className="Have_An">Don't receive code?<a href="/resetpassword" className="sesetP"><span className="p_LoGIn">Resend Code</span></a></p>
                     
               </form>
           </div>
           </div>
        </div>
    )
}

export default Otp;