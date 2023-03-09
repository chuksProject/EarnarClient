
import React, {useState,useContext} from 'react'
import "./style/mobileheader.css"
import "./style/footer.css"
import { Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown,faAngleUp} from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from './context/authContext';

const Mobileheader = () => {

    const [show21, setShow21] = useState(false);
    const [show22, setShow22] = useState("Sapap");
    const [state1,setState1] = useState(true)
    const {currentUser,logout} = useContext(AuthContext);

    const [showMe,setShowMe] = useState(false)
    const [showMe1,setShowMe1] = useState(false)
    
    const [feedBack,setFeedBack]=useState("")
    window.onscroll =()=>{
        scrollF()
      }
  
      const scrollF =()=>{
          if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            setFeedBack('Sapap1')
          }else{
            setFeedBack(' ')
          }
      }

  return (
    <div className={show22}>
     <div className={feedBack}>
        {/* <div className="special"></div> */}
      <div className="mobileH">
        <div>
        <Link to="/"  onClick={()=>setShow21(false)} >
                  <img src="/img/Earnars1@72x1.png" className="emanu"/>
                </Link>
        </div>
        <div>
        <button className="menu" onClick={()=>setShow21(!show21) } aria-label="Main Menu">
      <svg width="50" height="40" viewBox="0 0 100 100">
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
          <li><div className="derr" onClick={()=>setShowMe(!showMe)}><span className="derpm">Predictions</span> <span>{showMe?<FontAwesomeIcon icon={faAngleUp} className="PlusIcon plusIcon2" />:<FontAwesomeIcon icon={faAngleDown} className="PlusIcon plusIcon2" />}</span></div>
          {showMe? 
            <div className="Forexmm">
                      <Link  className="fit" to="/sportp" onClick={()=>setShow21(!show21)}>Sports</Link>
                      <Link  className="fit" to="/forexp" onClick={()=>setShow21(!show21)}>Forex</Link>
                      <Link  className="fit" to="cryptop" onClick={()=>setShow21(!show21)}>Cryptocurrency </Link>
                      <Link  className="fit" to="/binaryp" onClick={()=>setShow21(!show21)}>Binary</Link> 
            </div>:""}
            </li>
          <li ><Link to="/premium" onClick={()=>setShow21(!show21)} className="derpm">Premium Subscription</Link></li>
          <li><Link to="/affliate" className="derpm" onClick={()=>setShow21(!show21)}>Partners Program</Link></li>
          <li className="dpM"><Link to="/Vcal" className="derpm" onClick={()=>setShow21(!show21)}>Bet Calculator</Link></li>
          <li>
            {(currentUser)|| state1? <div>
            <div className="derr" onClick={()=>setShowMe1(!showMe1)}><span className="derpm appjo">{(currentUser?.username)||"kingsley Chuks"}</span> <span>{showMe1?<FontAwesomeIcon icon={faAngleUp} className="PlusIcon plusIcon2" />:<FontAwesomeIcon icon={faAngleDown} className="PlusIcon plusIcon2" />}</span></div>
          {showMe1? 
            <div className="Forexmm">
                      <Link  className="fit" to="/wallet" onClick={()=>setShow21(!show21)}>My Wallet</Link>
                      <Link  className="fit" to="/profile" onClick={()=>setShow21(!show21)}>My Profile</Link>
                      <Link  className="fit" to="/tip" onClick={()=>setShow21(!show21)}>My Tip(Premium)</Link>
                      <Link  className="fit appjo tef" to="" onClick={logout}>Log Out</Link> 
            </div>:""}</div>:  <Link to="/register" className="LogIn" onClick={()=>setShow21(!show21)}>Login/Register</Link>}
           </li>
        </ul>
          </div>
        
       
        </div>
       

      </div>
      :""}

    </div>

    </div>
  )
}

export default Mobileheader