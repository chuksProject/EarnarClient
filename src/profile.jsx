import React,{useState,useContext,useMemo} from "react";
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
    const [inputs,setInputs] = useState({
      username:"",
      email:"",
      password:"",
      country:"",
      phoneNumber:""

    })

    console.log(currentUser.id)
    const [display,setDisplay] = useState(false)
    const options = useMemo(() => countryList().getData(), [])

    const handleChange = (e) =>{
        setInputs(prev=>({...prev,[e.target.name]:e.target.value}))

    }

    const changeHandler = e => {
        setValue({
            country:e
        })
      }

      console.log(value)

      const navigate = useNavigate()

      const handleSumit = async e =>{
        e.preventDefault()
       try{
         await axios.put("/post/"+ currentUser.id,inputs)
         console.log(inputs)
        
       }catch(err){
        setError(err.response.data)
        // console.log(err)
       }    
        }



        

    return(
        <div className="PpDiv" style={{backgroundImage: "linear-gradient(to right, rgba(106, 116, 167, 0.34), rgba(119, 135, 182, 0.95))"}}>


            <div className="Profile_Div">
                <p className="ProfilePp" >Profile Overview</p>
                <div className="ProfilePp_PP">
                    <div className="yink"><img src="/img/invite.jpg" alt="" className="ProfilePp_P2P" /></div>
                    <div className="Conty">
                       <p className="Country1">Full Name : {currentUser?.username}</p> 
                       <p className="Country1">User ID : TIP0000{currentUser?.id}</p>
                       <p className="Country1">Email : <span>{currentUser?.email}</span></p>
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
                              
                                    <Select options={options}onChange={changeHandler}
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
    )
}


export default Profile;
