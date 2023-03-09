import React,{useState,useContext} from "react";
import "./style/register.css";
import "./style/login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { Link,useNavigate} from "react-router-dom";
import axios from "axios"
import {AuthContext}from "./context/authContext"



const Login =()=>{

    const [inputs,setInputs]=useState({
        username:"",
        password:"",
        showPassword: false,
    })
    const navigate = useNavigate()
    const {login}=useContext(AuthContext)
    

    const [err,setError]= useState(null)

    const handleChange = e =>{
        setInputs(prev=>({...prev,[e.target.name]:e.target.value}))

    }

    const handleClickShowPassword = () => {
        setInputs(previ=>({ ...previ, showPassword: !inputs.showPassword }));
      };

    const handleSumit1 = async e =>{
    e.preventDefault()
   try{
    await login(inputs)
     navigate('/')
    
   }catch(err){
    setError(err.response.data)
    // console.log(err)
   }    
    }
    return(
        <div className="BgColor" style={{backgroundImage: "linear-gradient(to right, rgba(106, 116, 167, 0.34), rgba(119, 135, 182, 0.95))"}}>
            <div className="Form_Divbb">
           <div className="Form_Div renttt">
               <form>
                  
                  <div className="welcome4">Welcome</div>
                  <div> <input type="text" placeholder="User_name" className="Full_Name" name="username" onChange={handleChange}/></div>
                  <div className="sers"> <input type={inputs.showPassword ? "text":"password"} placeholder="Password" className="Full_Name" onChange ={handleChange} name="password" value={inputs.password}
                  />
                  {inputs.showPassword ?<FontAwesomeIcon icon={faEye} className="PlusIcon plusIcon2 ser1" onClick={handleClickShowPassword}/>:<FontAwesomeIcon icon={faEyeSlash} className="PlusIcon plusIcon2 ser1" onClick={handleClickShowPassword}/> }</div>
                  <div onClick={handleSumit1} className="loginn">LOGIN</div>
                  {err && <p className="errorP">{err}</p>}
                  <p className="FofD">Forget password ? <span className="ClickMe">Click Here</span> </p>
                  <div className="Or_with2">
                         <div className="Or_With"></div>
                         <p>Or register with</p>
                         <div className="Or_With"></div>
                     </div>
                     <div className="Googgle">Google</div>
                     <p className="Have_An">Don't have an account?</p>
                     <div className="LOGIN_HERE_NOW"><Link to="/register" className="p_LoGIn">Register HERE</Link></div>
               </form>
           </div>
           </div>
        </div>
    )
}

export default Login;