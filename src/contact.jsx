import React,{useState} from "react"
import Footer from "./footer"
import "./style/about.css"
import "./style/contact.css"
import { Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'



const Contact =()=>{

    const [register,setRegister] = useState(false)

    //  const myStyle ={
    //      backgroundImage: "url(/img/downloa.jpg)",
    //      height:'100vh',
    //      width:'100vw',
    //      backgroundSize: 'cover',
    //      backgroundRepeat: 'no-repeat',
    //  }

    return(
        <div className="About_Dive_Page" style={{    backgroundImage: "linear-gradient(to right, rgba(106, 116, 167, 0.34), rgba(119, 135, 182, 0.95))",paddingTop:"10px"}} >
             <div className="About_Dive_Page1">

          
             <div className="About_Us">
                 <div className="About_paragraph"> 
                 <div className="About_header">Contact Information</div>
               
                   <div>
                       <p className="We_areF">We are at the tip of your finger! Get in touch with us via our email addresses below.</p>
                       <div className="For_general_Advert">
                           <div className="For_General_Div">
                               <p className="contact_p_c">For general enquiries:</p>
                               <p className="infoTrY">info@earnars.com</p>
                               <p className="infoTrY fontWW">Or</p>
                               <p> WhatsApp: <span className="WhattsZ"><a href="https://wa.me/08059279660">+234 805 927 9660</a></span></p>
                           </div> 
                           <div className="For_General_Div">
                               <p className="contact_p_c">For advert and sponsorship:</p>
                               <p className="infoTrY">advert@earnars.com</p>
                               <p className="infoTrY fontWW">Or</p>
                               <p><a href="#" className="ClickHereMe">Click here to Chat on Skype</a></p>
                           </div> 
                       </div>
                       <p className="infoTrY">Working Hours :</p>
                       <p className="monday">Mondays to Saturdays (9am to 5pm) (WAT)  </p>
                     
                   </div>



                 </div>
             </div>
            <div className="Foot_VH"><Footer /></div> 

            </div>
        </div>
    )
}

export default Contact;