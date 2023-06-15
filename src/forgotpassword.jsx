import React,{useState,useContext} from "react";
import "./style/register.css";
import "./style/login.css";
import "./style/forgotpassword.css"

import { Link,useNavigate} from "react-router-dom";
import axios from "axios"
import {AuthContext}from "./context/authContext"



const ForgotPassword =()=>{

    const [OTP,setOtp]=useState("")
    const [email2,setEmail2]=useState({
        email:"",
        
    })
  


    
   
    const navigate = useNavigate()
    // const {login}=useContext(AuthContext)
    

    const [err,setError]= useState(null)

    const handleChange = e =>{
   setEmail2( prev=>({...prev,[e.target.name]:e.target.value}))

    }
  
      // const see =()=>{
      //    const Otp1 = Math.floor(Math.random()* 9000 + 1000);
      //   setOtp(Otp1)
      // }
   

    const handleSumit1 = async (e) =>{
    e.preventDefault()

   try{
    await axios.post("/auth/forgotpassword",email2)
     navigate('/otp')
     console.log('success')
    
   }catch(err){
    setError(err.response.data)
    console.log(err)
   } 
     
    
    }
    return(
        <div className="BgColor" style={{backgroundImage: "linear-gradient(to right, rgba(106, 116, 167, 0.34), rgba(119, 135, 182, 0.95))"}}>
            <div className="Form_Divbb">
           <div className="Form_Div renttt">
               <form>
                  
                  <div className="welcome4">Forgot Password</div>
                  <div  className="forgotText">Enter Your Email Address </div>
                  <div> <input type="email" placeholder="Enter Your Email" className="Full_Name" name="email" onChange={handleChange}/></div>
                  
                 <a className="otpLink" onClick={handleSumit1}> <div  className="loginn">Send Reset Link</div></a>
                 
               </form>
           </div>
           </div>
        </div>
    )
}

export default  ForgotPassword;