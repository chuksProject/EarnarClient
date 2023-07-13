
import React, {useState,useContext} from 'react'
import "./style/mobileheader.css"
import "./style/footer.css"
import { Link,NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown,faAngleUp} from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from './context/authContext';

const Mobileheader = () => {

    const [show21, setShow21] = useState(false);
    const [show22, setShow22] = useState("Sapap");
    const [state1,setState1] = useState(true)
    const {currentUser,logout,isPaid} = useContext(AuthContext);
    const [open,setOpen]=useState("")
     const [open1,setOpen1]=useState(true)
 const [register,setRegister] = useState(false)
    const [showMe,setShowMe] = useState(false)
    const [showMe1,setShowMe1] = useState(false)
    
    const [feedBack,setFeedBack]=useState("")
    window.onscroll =()=>{
        scrollF()
      }

        setTimeout(() => {
            setRegister() 
              }, 5000);
  
      const scrollF =()=>{
          if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            setFeedBack('Sapap1')
          }else{
            setFeedBack(' ')
          }
      }

      const seOpen =()=>{
        setOpen("opened");
        setShow21(!show21)
          setOpen1(!open1);

      }

      const mark =()=>{
        seOpen();
         setShow21(!show21)

      }
  return (
    <div className={show22}>
     <div className={feedBack}>
        {/* <div className="special"></div> */}
      <div className="mobileH">
        <div>
        <a href="/"  onClick={()=>setShow21(false)} >
                  <img src="/img/Earnars1@72x1.png" className="emanu"/>
                </a>
        </div>
        <div>
       
  
 <button className={open1?"menu bg":"opened bg"} onClick={seOpen} aria-label="Main Menu">
      <svg width="50" height="50" viewBox="0 0 100 100">
        <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
        <path className="line line2" d="M 20,50 H 80" />
        <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
      </svg>
    </button>

        </div>


        
      </div>

      {/* mobile View*/}

      {show21 ? 

      <div className="Mobile_menu1">

        <div className="IfeY">
          <div>
          <ul className="Mobile_menu12">
          <li className="bgstyle"><div className="derr" onClick={()=>setShowMe(!showMe)}><span className="derpm"><span className="mackP">*</span> * Predictions</span> <span>{showMe?<FontAwesomeIcon icon={faAngleUp} className="PlusIcon plusIcon2" />:<FontAwesomeIcon icon={faAngleDown} className="PlusIcon plusIcon2" />}</span></div>
          {showMe? 
            <div className="Forexmm">
                      <a  className="fit" href="/sport" onClick={mark}> <span className="mackP1">*</span> Sports</a>
                      <a  className="fit" href="/forex" onClick={mark}><span className="mackP1">*</span> Forex</a>
                      <a  className="fit" href="cryptocurrency" onClick={mark}> <span className="mackP1">*</span> Cryptocurrency </a>
                      <a  className="fit" href="/binary" onClick={mark}><span className="mackP1">*</span> Binary</a> 
            </div>:""}
            </li>
          <li className="bgstyle"><a href="/premium" onClick={mark} className="derpm"> <span className="mackP">*</span> * Premium Subscription</a></li>
          <li className="bgstyle"><a href="/affliate" className="derpm" onClick={mark}> <span className="mackP">*</span> * Partners Program</a></li>
          <li className="dpM bgstyle"><a href="/betcalculator" className="derpm" onClick={mark}><span className="mackP">*</span> * Bet Calculator</a></li>
          <li>
            {currentUser ? <div>
            <div className="derr" onClick={()=>setShowMe1(!showMe1)}><span className="derpm appjo">{currentUser?.username}</span> <span>{showMe1?<FontAwesomeIcon icon={faAngleUp} className="PlusIcon plusIcon2" />:<FontAwesomeIcon icon={faAngleDown} className="PlusIcon plusIcon2" />}</span></div>
          {showMe1? 
            <div className="Forexmm">
                      <Link  className="fit" to="/wallet" onClick={mark}>My Wallet</Link>
                      <Link  className="fit" to="/profile" onClick={mark}>My Profile</Link>
                       {isPaid === 1? <a href="/tip" className="fit">My Tips(Premium)</a> :<Link onClick={()=>setRegister(!register)} className="fit" >My Tips(Subscribe)</Link>}
                      <Link  className="fit appjo tef" to="" onClick={logout}>Log Out</Link> 
            </div>:""}</div>:  <Link to="/register" className="LogIn" onClick={mark}>Login/Register</Link>}
           </li>
        </ul>
          </div>
        
       
        </div>
       

      </div>
      :""}

    </div>


 {register ? <div style={{position:'absolute',top:"50%",left:"50%",transform:"translate(-50%,-50%)",color:"red",zIndex:"500",fontSize:"20px",padding:"5px 10px",backgroundColor:"#fff"}}> Please subscribe to unlock</div>:""}
    </div>
  )
}

export default Mobileheader