import react,{useState} from "react"
import "./style/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPlus,faCaretDown,faCaretUp} from '@fortawesome/free-solid-svg-icons'
import {faFacebook,faTwitter,faLinkedin,faTelegram,faYoutube,}from '@fortawesome/free-brands-svg-icons'
import { Link} from "react-router-dom";
// import{ faFacebook } from '@fortawesome/free-brands-svg-icons'

const Footer =()=>{

     const [footerShow,setFooterShow]=useState(false)
     const [footerShow1,setFooterShow1]=useState(false)


      const dropdown =()=>{
           
        setFooterShow1(!footerShow1)
         setFooterShow(false)
      }
      const dropdown1 =()=>{  
        setFooterShow1(false)
        setFooterShow(!footerShow)
      }
    return(
        <div className="Footer_Bg_Color">
              
          <div className="Footer_Div">
              <div className="Footer_Div_item">
                  <div>
                      <ul className="MobileFooter">
                          <li className="Footer_header_title   titleFott" onClick={dropdown1}><span>NAVIGATION </span><span>{footerShow?<FontAwesomeIcon icon={faCaretUp} className="PlusIcon plusIcon2" />:<FontAwesomeIcon icon={faCaretDown} className="PlusIcon plusIcon2" />}</span></li>
                          {footerShow ? (<div>
                          <li className="Footer_list_space"><a href="#">LiveScore</a></li>
                          <li className="Footer_list_space"><a href="#">League Table</a></li>
                          <li className="Footer_list_space"><a href="#">Refund Policy</a></li>
                          <li className="Footer_list_space"><a href="#">Betting Link</a></li>
                          </div>) : ("")}
                      </ul>

                      <ul className="DesktopFooter">
                          <li className="Footer_header_title" >NAVIGATION</li>
                          
                          <li className="Footer_list_space"><a href="#">LiveScore</a></li>
                          <li className="Footer_list_space"><a href="#">League Table</a></li>
                          <li className="Footer_list_space"><Link to="/refund">Refund Policy</Link></li>
                          <li className="Footer_list_space"><a href="#">Betting Link</a></li>
                          
                      </ul>
                  </div>
                  <div>
                  <ul className="MobileFooter">
                          <li className="Footer_header_title titleFott" onClick={dropdown}><span>INFORMATION </span><span>{footerShow1?<FontAwesomeIcon icon={faCaretUp} className="PlusIcon plusIcon2" />:<FontAwesomeIcon icon={faCaretDown} className="PlusIcon plusIcon2" />}</span></li>
                          {footerShow1 ? (<div>
                          <li className="Footer_list_space"><Link to="/termscondition">Terms & Conditions</Link></li>
                          <li className="Footer_list_space"><Link to="/disclaimer">Disclaimer</Link></li>
                          <li className="Footer_list_space"><Link to="/disclaimer">About Us</Link></li>
                          <li className="Footer_list_space"><Link to="/contact">Contact Us</Link></li>
                          </div>) : ("")}
                      </ul>

                      <ul className="DesktopFooter">
                          <li className="Footer_header_title">INFORMATION</li>
                          <li className="Footer_list_space"><Link to="/termscondition">Terms & Conditions</Link></li>
                          <li className="Footer_list_space"><Link to="/disclaimer">Disclaimer</Link></li>
                          <li className="Footer_list_space"><Link to="/about">About Us</Link></li>
                          <li className="Footer_list_space"><Link to="/contact">Contact Us</Link></li>
                      </ul>
                  </div>
                  <div>
                     <ul>
                          <li className="Footer_header_title">CONTACT US</li>
                          {/* <li className="Footer_list_space"><a href="#">Terms & Conditions</a></li> */}
                          <li className="Footer_list_space"><p> WhatsApp: +234 906 024 3960</p></li>
                          <li className="Footer_list_space"><p>Email Us: info@victorspredict.com</p></li>
                          <li className="Footer_list_space"><p>Advert: advert@victorspredict.com</p></li>
                      </ul>
                  </div>
                  <div>
                  <ul>
                          <li className="Footer_header_title">MOBILE APP</li>
                          <li><div className ="visitUs">Visit our social handles</div>
                          <i className="fa fa-facebook footerGo"></i>
                          </li>
                          <li><ul className="footer_brand_icon">
                              <li><FontAwesomeIcon icon={faFacebook} className="icon_brand_size"/></li>
                              <li><FontAwesomeIcon icon={faTwitter} className="icon_brand_size" /></li>
                              <li><FontAwesomeIcon icon={faLinkedin} className="icon_brand_size" /></li>
                              <li><FontAwesomeIcon icon={faTelegram} className="icon_brand_size" /></li>
                              <li><FontAwesomeIcon icon={faYoutube} className="icon_brand_size" /></li>
                              </ul></li>
                          
                          
                      </ul>
                  </div>
              </div>
              
              <div className="Footer_Copyright">© 2022 Baincefre. All rights reserved.</div>
          </div>

       

        </div>
    )
}

export default Footer;