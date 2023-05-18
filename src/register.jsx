import React,{useState} from "react";
import "./style/register.css"
import { Link,useNavigate} from "react-router-dom";
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons'

const Register =()=>{

    const [inputs,setInputs]=useState({
        username:"",
        email:"",
        password:"",
        password1:"",
        showPassword: false,
        showPassword1: false
    })
    const navigate = useNavigate()

    const [err,setError]= useState(null)

    const handleChange = e =>{
        setInputs(prev=>({...prev,[e.target.name]:e.target.value}))

    }

    const handleSumit = async e =>{
    e.preventDefault()
   try{
    //    if(inputs.password =! inputs.password1){
    //        setError("password do not match")
    //    }else if(inputs.email.length === (null || 0)){
    //     setError("email field is empty")
    //    }else if(inputs.username.length === (null || 0)){
    //     setError("user field is empty")
    //    }
    //    else{
        await axios.post("/auth/register",inputs)
        navigate('/login')
    //    }
    
    
   }catch(err){
    // setError(err.response.data)
    setError("connection denied")
    // console.log(err)
   }    
    }


    const handleClickShowPassword = () => {
        setInputs(previ=>({ ...previ, showPassword: !inputs.showPassword,showPassword1: !inputs.showPassword1 }));
      };

    
    return(
        <div className="BgColor" style={{backgroundImage: "linear-gradient(to right, rgba(106, 116, 167, 0.34), rgba(119, 135, 182, 0.95))"}}>

            <div className="formDivPAd">

            <div className="Form_Div">
                <form>
                     <p className="New_Account">Register New Account</p>
                    <div> <input type="text" placeholder="User Name"  className="Full_Name" onChange={handleChange} name="username"/></div>
                    <div> <input type="email" placeholder="Enter_Your Email" className="Full_Name" onChange={handleChange} name="email"/></div>
                    {/* <div> <select className="Full_Name">
                         <option>school</option>
                         <option>Bussiness</option>
                         <option>Enterprise</option>
                         <option>Soccer</option>
                     </select></div> */}
                    <div> <input type={inputs.showPassword? "text":"password"}  placeholder="Password" className="Full_Name" onChange={handleChange} name="password" value={inputs.password}/></div>
                    {/* <div> <input type="password" placeholder=" Confirm_password" className="Full_Name" name="password" onChange={handleChange}/></div> */}

                    <div className="sers"> <input type={inputs.showPassword ? "text":"password"} placeholder="Confirm_password" className="Full_Name" onChange ={handleChange} name="password1" value={inputs.password1}
                  />
                  {inputs.showPassword ?<FontAwesomeIcon icon={faEye} className="PlusIcon plusIcon2 ser1" onClick={handleClickShowPassword}/>:<FontAwesomeIcon icon={faEyeSlash} className="PlusIcon plusIcon2 ser1" onClick={handleClickShowPassword}/> }</div>
                  {err && <p>{err}</p>}
                     <p className="Include"><span className="NoteP"> Note: </span>Password must be at least six (6) characters and must include Upper Case and Lower Case,Number and a special character e.g PREditam247@</p>

                     <div className="Checkbox_div"><input type="checkbox" className="Bym"/> <label className="Over_18">By checking this box you declare that you are over 18yrs of age.</label></div>
                    
                    <div className="Checkbox_div"> <input type="checkbox" className="Bym"/><label className="Over_18">By checking this box you agree to all our Terms/Conditions.Click to <span className="HERE0">HERE</span> to read.</label></div>

                     <div className="RegisterM" onClick={handleSumit}>Register</div>
                     <div className="Or_with2">
                         <div className="Or_With"></div>
                         <p>Or register with</p>
                         <div className="Or_With"></div>
                     </div>
                     <div className="Googgle">Google</div>
                     <p className="Already_Account">Already have an account?</p>
                     <div className="LOGIN_HERE_NOW"><Link to="/login" className="p_LoGIn">LOGIN HERE</Link></div>

                </form>
            </div>
            </div>

        </div>
    )
}

export default Register;