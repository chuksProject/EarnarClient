
import React, {useState} from 'react'
import "./style/mobileheader.css"
import { Link} from "react-router-dom";

const Mobileheader = () => {

    const [show21, setShow21] = useState(false);
    const [show22, setShow22] = useState("Sapap");
    
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
        <div></div>
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
          <li><Link to="" className="derpm">Earn Paper</Link></li>
          <li>Premium Subscription</li>
          <li><Link to="/affliate" className="derpm">Affliate Program</Link></li>
          <li><Link to="/Vcal" className="derpm">Earn Calculator</Link></li>
          <li><a href="#Faqc" className="derpm">FAQ</a></li>
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