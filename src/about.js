import React,{useState} from "react"
import Footer from "./footer"
import "./style/about.css"
import { Link} from "react-router-dom";


const About=()=>{

    const [register,setRegister] = useState(false)
    return(
        <div className="About_Dive_Page" style={{backgroundImage:"linear-gradient(to right, rgba(106, 116, 167, 0.34), rgba(119, 135, 182, 0.95))",paddingTop:"10px"}}>
             <div className="About_Dive_Page1">

    <div style={{padding:"0 10px"}}>
             <div className="About_Us">
                 <div className="About_paragraph"> 
                 <div className="About_header">About Us</div>
                <p className="Set_A_Branch"> At Earnars.com, We set a benchmark of making provision of safe and accurate predictions you can trust! Earnars predictions, tips & analysis are based on algorithms, detailed analysis, betting tips, forms and statistics. We have dedicated experts that are passionate in ensuring you make profits!</p>

<p className="Set_A_Branch">We provide you with the most accurate and guaranteed football/trading tips everyday of the week. We are relentless in our drive to assist many bettors/traders make good use of the tips we provide to guarantee profits. </p>

<p className="Set_A_Branch">Our expers at Earnars offer predictions for various market. We are thorough in our work and have the success of our users in mind. We promise to aid you in your bets/trades! Wonder less we are considered the Home of Successful Predictions!</p>
                 </div>
             </div>
            </div>
            <div className="Foot_VH"><Footer /></div> 

            </div>
        </div>
    )
}

export default About;