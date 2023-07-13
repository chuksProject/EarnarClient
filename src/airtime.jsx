import React,{useState,useContext} from "react";
import "./style/register.css";
import "./style/login.css";
import "./style/otp.css"

import { Link,useNavigate} from "react-router-dom";
import axios from "axios"
import {AuthContext}from "./context/authContext"



const Airtime =()=>{
 const [err,setError]= useState(null)
    const {forgotEmail,forgotPassword} = useContext(AuthContext);
     const navigate = useNavigate()
     const [success,setSuccess] = useState("")

     const [email,setEmail] =useState({email:forgotEmail})

    
    const handleSumit1 = async (e) =>{
    e.preventDefault()
  console.log(email)
   try{
    // await axios.post("/auth/forgotpassword",email2)
    await forgotPassword(email)
    //  navigate('/otp')
     
     setSuccess("Send Successfully, check ur Email ")
    
   }catch(err){
    setError(err.response.data.msg)
    console.log(err.response.data.msg)
   } 
     
    
    }
    
    return(
        <div className="BgColor" style={{backgroundImage: "linear-gradient(to right, rgba(106, 116, 167, 0.34), rgba(119, 135, 182, 0.95))"}}>
            <div className="Form_Divbb">
           <div className="Form_Div renttt">
               <form>
                  
                  <div className="welcome4">Airtime Recharge</div>
                  {success && <p style={{color:"#fff",textAlign:"center"}}>{success}</p>}
                  <p className="codeSent">We have sent a link to your Email {forgotEmail}</p>


                  <div className="OTPDIV1">
                 <div className="OTPDiv">
                    <input type="number" placeholder ="" className="codePP" name="num" min="1" max="1"/>
                    <input type="number" placeholder ="" className="codePP" />
                    <input type="number" placeholder ="" className="codePP"/>
                    <input type="number" placeholder ="" className="codePP"/>
                    

                 </div>
                 </div>
                  <label style={{color:"#fff"}}>Mobile Number</label>
                  <div> <input type="number" placeholder="Mobile Number" className="Full_Name" name="email" /></div>

                  <label style={{color:"#fff"}}>Amount</label>
                  <div> <input type="number" placeholder="₦  0.00" className="Full_Name" name="email" /></div>
                 
                 
                    <div className="sesetP" onClick={handleSumit1 }><div  className="loginn">Resend Link</div></div>
              
         
                     <p className="Have_An">Don't receive link?<a onClick={handleSumit1 } className="sesetP"><span className="p_LoGIn">Resend Link</span></a></p>
                     
               </form>
           </div>
           </div>
        </div>
    )
}

export default Airtime;