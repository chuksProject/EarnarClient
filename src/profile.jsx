import React,{useState,useContext,useMemo,useEffect} from "react";
import "./style/profile.css"
import { Link,useLocation,useNavigate} from "react-router-dom";
import { AuthContext } from './context/authContext';
import Select from 'react-select'
import axios from "axios"
import countryList from 'react-select-country-list'



const Profile = () =>{
    const [register,setRegister] = useState(false)
    const {currentUser} = useContext(AuthContext);
    const [value, setValue] = useState('')
    const [err,setError] = useState(null)
    const [text,setText]= useState("3#$%!#565")
    const [isCopied, setIsCopied] = useState(false);

    const [inputs,setInputs] = useState({
      username:"",
      email:"",
      password:"",
      country:"",
      phoneNumber:""

    })

    console.log(currentUser)
    const [display,setDisplay] = useState(false)
    const options = useMemo(() => countryList().getData(), [])

    const handleChange = (e) =>{
        setInputs(prev=>({...prev,[e.target.name]:e.target.value}))

    }

    const changeHandler = e => {
        setInputs({
            country:e.label
        })
      }




      async function copyTextToClipboard(text) {
        if ('clipboard' in navigator) {
          return await navigator.clipboard.writeText(text);
        } else {
          return document.execCommand('copy', true, text);
        }
      }

      const handleCopyClick = () => {
        // Asynchronously call copyTextToClipboard
        copyTextToClipboard(text)
          .then(() => {
            // If successful, update the isCopied state value
            alert("text copied")
            setIsCopied(true);
            setTimeout(() => {
              setIsCopied(false);
            }, 1500);
          })
          .catch((err) => {
            console.log(err);
          });
      }
     

      const navigate = useNavigate()

      const handleSumit = async e =>{
        e.preventDefault()
       try{
         await axios.put("/post/"+ currentUser.id,inputs)
         console.log(inputs)
        
       }catch(err){
        setError(err.response.data)
      
       }    
        }

        

    
       





    return(
        <div className="PpDiv" style={{backgroundImage: "linear-gradient(to right, rgba(106, 116, 167, 0.34), rgba(119, 135, 182, 0.95))"}}>

<div className="pet">
            <div className="Profile_Div">
                <div className="FimeOp">
                <p className="ProfilePp" >Profile Overview</p>
               <div className="ppCopy"><input type="text" className="copyCode copyCode4"  value={text} readOnly/><div onClick={handleCopyClick} className="copyCode copyCode1 copyCode2">copy</div></div>
                </div>
                <div className="ProfilePp_PP">
                    <div className="yink"><img src="/img/invite.jpg" alt="" className="ProfilePp_P2P" /></div>
                    <div className="Conty">
                       <p className="Country1">Full Name : {(currentUser?.username)||"kingsley Chuks"}</p> 
                       <p className="Country1">User ID : TIP0000{(currentUser?.id)|| 8}</p>
                       <p className="Country1">Email : <span>{(currentUser?.email)||"chukwubuikekingsley@gmail.com"}</span></p>
                       <p className="Country1">Phone : +2348035012328</p>
                       <p className="Country1">Country : Nigeria</p>
                    </div>
                </div>

                <div className="InEdit">
                <p className="EditInfo">Edit information</p>

                <div className="EditProfileButtoon" onClick={()=>setDisplay(!display)}>Edit</div>
                </div>

                <div>
                    <form>
                        {display ? 
                        <div className="WithDec">
                            
                        <div className="WentSon">
                            <div className="UserEm">
                                <p className="nameFin upon">Name</p>
                                <div><input type="text" 
                                name="username" placeholder="Enter your name" className="Profile_Dente" onChange={handleChange}/></div>
                            </div>
                            <div className="UserEm">
                                <p className="nameFin upon">Email</p>
                                <div><input type="email" placeholder="Enter your email" 
                                name="email" 
                                onChange={handleChange}className="Profile_Dente"/></div>
                            </div>
                        </div>
                        
                        <div className="WentSon">
                            <div  className="UserEm">
                                <p className="nameFin upon">Country</p>
                                <div>
                              
                                    <Select options={options}
                                    
                                    onChange={changeHandler}
                                    name="country"/>
                                    </div>
                            </div>
                            <div  className="UserEm">
                                <p className="nameFin upon">Phone Number</p>
                                <div><input type="email" placeholder="Enter phone number" 
                                name="phoneNumber"
                                onChange={handleChange}
                                className="Profile_Dente"/></div>
                            </div>
                        </div>
                        
                        <div className="WentSon">
                            <div className="UserEm">
                                <p className="nameFin upon">Password</p>
                                <div><input type="text" placeholder="password" 
                                name="password"
                                onChange={handleChange}
                                className="Profile_Dente"/></div>
                            </div>
                            <div className="UserEm">
                                <p className="nameFin upon">Confirm Password</p>
                                <div><input type="email" 
                                name="password"
                                onChange={handleChange}
                                placeholder="confirm password" className="Profile_Dente"/></div>
                            </div>
                        </div>
                        

                         <div className="UpDatePls" onClick={handleSumit}>Update</div>
                         </div>
                         :""}


                         <p className="AddBankAccount">Add Bank Account Details</p>
                         <div className="WithDec">
                        <div className="WentSon">
                            
                            <div className="UserEm">
                                <p className="nameFin upon">Bank Name</p>
                                <div><input type="text" placeholder="Choose your bank" className="Profile_Dente"/></div>
                            </div>
                            <div className="UserEm">
                                <p className="nameFin upon">Account Name</p>
                                <div><input type="email" placeholder="Enter account number" className="Profile_Dente"/></div>
                            </div>
                        </div>
                        <div></div>
                        <div className="UpDatePls">Update</div>

                        <div className="NoteDDiv">
                        <div className="RoteDiv"></div>
                        <div className="NoteRote">Note</div>
                        <div className="RoteDiv"></div>
                    </div>

                    <p className="mustbebak">
                       Your bank name must be correspond with the full name you used during registration. Once your bank details are updated it cannot be changed unless valid ducuments are provided. 
                    </p>
                        </div>

                  
              


                    </form>
                </div>
            </div>
            </div>

        </div>
    )
}


export default Profile;
