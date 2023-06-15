import React,{useState,useContext} from "react";
import "./style/register.css";
import "./style/login.css";
import "./style/resetpassword.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { Link,useNavigate} from "react-router-dom";
import axios from "axios"
import {AuthContext}from "./context/authContext"



const ResetPassword =()=>{

    const [inputs,setInputs]=useState({
        username:"",
        password:"",
       
    })
    const [inputs2,setInputs2]=useState({
        
        showPassword: false,
    })
    const navigate = useNavigate()
    const {login}=useContext(AuthContext)
    

    const [err,setError]= useState(null)

    const handleChange = e =>{
        setInputs(prev=>({...prev,[e.target.name]:e.target.value}))

    }

    const handleClickShowPassword = () => {
        setInputs2(previ=>({ ...previ, showPassword: !inputs2.showPassword }));
      };

    const handleSumit1 = async (e) =>{
    e.preventDefault()
   try{
    await login(inputs)
     navigate('/')
    
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
                  
                  <div className="welcome4">Change Password</div>
                  <p className="NewpAss">New Password</p>
                  <div> <input type="password" placeholder="password" className="Full_Name pCard1" name="username" onChange={handleChange}/></div>
                   <p className="NewpAss">Confirm Password</p>
                  <div className="sers"> <input type={inputs2.showPassword ? "text":"password"} placeholder= "confirm_Password" className="Full_Name" onChange ={handleChange} name="password" 
                  />
                  {inputs2.showPassword ?<FontAwesomeIcon icon={faEye} className="PlusIcon plusIcon2 ser1" onClick={handleClickShowPassword}/>:<FontAwesomeIcon icon={faEyeSlash} className="PlusIcon plusIcon2 ser1" onClick={handleClickShowPassword}/> }</div>
                   <div className="Checkbox_div"><input type="checkbox" name="over18"  className="Bym"/> <label className="Over_18">I accept the Terms and Conditions</label></div>
                     <a href="/login" className="sesetP"> <div  className="loginn">Reset Password</div></a>

                  
               </form>
           </div>
           </div>
        </div>
    )
}

export default  ResetPassword;