import React ,{useState,useEffect}from "react";
import { Link} from "react-router-dom";
import "./style/home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Footer from "./footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlus,faMinus} from '@fortawesome/free-solid-svg-icons'
import Came from "./addcarousel"
import AOS from 'aos';
import "./style/home2.css"
import axios from "axios";
import { useLocation } from "react-router";


const Home2=() =>{

  const [show,setShow]= useState(false)
  const [show1,setShow1]= useState(false)
  const [show2,setShow2]= useState(false)
  const [show3,setShow3]= useState(false)
  const [show4,setShow4]= useState(false)
  const [show5,setShow5]= useState(false)
  const [show6,setShow6]= useState(false)
  const [forex,setForex] = useState("")
  const [sports,setSports]= useState("sports")
  const [Cryptocurrency,setCryptocurrency] = useState("")

  const [register,setRegister] = useState(false)

  const [post,setPosts] = useState([])
  const cat = useLocation().search

  // const tr = window.location.pathname;
  // if(tr === "/"){
  //   console.log("Mr kingsley is Good and nan")
  // }

  // console.log(tr)

  // console.log(cat)

  const forf =()=>{
      setForex('Forex')
      setSports("")
      setCryptocurrency("")
  }
  const crypto =()=>{
    setForex('')
    setSports("")
    setCryptocurrency("cryptocurrency")
}
const Sports1 =()=>{
    setForex('')
    setSports("sports")
    setCryptocurrency("")
}

useEffect(()=>{
  const fetchData = async ()=>{
    try{
 const res = await axios.get(`/posts${cat}`)
   setPosts(res.data)

    }catch(err){
      console.log(err)

    }
  }
  fetchData()
},[cat])

  useEffect(()=>{
    AOS.init();
  },[])
  

    return (
      <div >
      <div className="Home_Bg_Bg" >
      

       
        {/*======  mobile header ========*/} 


      
        

        {/*======  section2 ========*/}

      <div className="fugmu">
        <div className="CarouseDivDiv ">
          <Carousel
            autoplay={true}
            intervals={1000}
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
          >
            <div className="carousel_Div">
              <img src="/img/yito2.jpg" className="ImgDiv" />
            </div>
            <div className="carousel_Div">
              <img src="/img/yito3.png" className="ImgDiv" />
            </div>
            <div className="carousel_Div">
              <img src="/img/yito2.jpg" className="ImgDiv" />
            </div>
          </Carousel>
        </div>
        </div>

        {/*======  section3========*/}

        <div style={{backgroundImage:"linear-gradient(to right, rgba(255,0,0,0), rgb(201 209 233))",paddingBottom:"20px"}}>
      <div className="Rtme">
          <div className="Free">
            <div><p className="EarnP">Earn Daily,Invest Daily,Save Daily & Get Rich</p>
            <div className="divUnder"></div></div>
          
          </div>
          {/*======  section4 ========*/}

          {/* secton5   */}

           <div className="teleCom">
               <div className="commT">
                   <div className="FreeComm">Telecommunication (Free)</div>
                   <p className="Saving">Save</p>
                   <p className="perceT">3-10%</p>
                   <p className="dailyOn">Daily on</p>
                   <p className="AirTime">Airtime,Data and Other Bills</p>
                  <div className="successRate100"><p className="RateSuccess">100% Success Rate</p></div>
               </div>
               <div className="commT">
                   <div className="FreeComm">Forex Trading (paid) </div>
                   <p className="Saving">Earn</p>
                   <p className="perceT">25 - 100%</p>
                   <p className="dailyOn">Profits</p>
                   <p className="AirTime">Monthly</p>
                   <div className="successRate100">
                       <p className="RateSuccess">85% Success Rate</p>
                   </div>
               </div>
           </div>

        <div className="divRatT">
           <div className="teleCom">
               <div className="commT">
                   <div className="FreeComm">Sports Prediction (paid)</div>
                   <p className="Saving">Earn</p>
                   <p className="perceT">50-100%</p>
                   <p className="dailyOn">Profits</p>
                   <p className="AirTime">Daily</p>
                  <div className="successRate100"><p className="RateSuccess">95% Success Rate</p></div>
               </div>
               <div className="commT">
                   <div className="FreeComm">Cryptocurrency Trading(paid) </div>
                   <p className="Saving">Earn</p>
                   <p className="perceT">80 - 100%</p>
                   <p className="dailyOn">Profits</p>
                   <p className="AirTime">Monthly</p>
                   <div className="successRate100">
                       <p className="RateSuccess">85% Success Rate</p>
                   </div>
               </div>
           </div>
           </div>
           </div>
           </div>


           {/* end section5   */}

           {/*section6 */}


         <div style={{backgroundImage:"linear-gradient(to right,rgb(201 209 233),rgba(255,0,0,0))",paddingBottom:"20px",position:"relative"}}>
         

         <div className="colorDivOnly"></div>
         <div className="colorDivOnly1"></div>

           <div className="Rtme">
               <div className="loud">Our Results Speaks Louder</div>
               <div className="Forex1">
                   <div className={sports === "sports"?"Forex12 pin":"Forex12"} onClick={Sports1}>Sports</div>
                   <div className={forex==="Forex"?"Forex12 pin":"Forex12"} onClick={forf}>Forex</div>
                   <div className={Cryptocurrency === "cryptocurrency"?"Forex12 pin":"Forex12"} onClick={crypto}>Cryptocurrency</div>
               </div>

       { sports === "sports"? 
               <div className="SPM">
                   <div className="sport2">
                       <div className="divS"><span className="Nog">Game No: </span>SP-2022/10/07</div>
                       <p className="dailyP21">Daily Profit</p>
                       <p className="Dyc">80.34%</p>
                       <p className="addErn">odd:1.834</p>
                       <div className="EarnLoss">Earned</div>

                   </div>
                   <div className="sport2">
                       <div className="divS"><span className="Nog">Game No: </span>SP-2022/10/08</div>
                       <p className="dailyP21">Daily Profit</p>
                       <p className="Dyc">56.34%</p>
                       <p className="addErn">odd:1.5634</p>
                       <div className="EarnLoss loss">Lossed</div>
                   </div>
                   <div className="sport2">
                       <div className="divS"><span className="Nog">Game No: </span> SP-2022/10/09</div>
                       <p className="dailyP21">Daily Profit</p>
                       <p className="Dyc">106.34%</p>
                       <p className="addErn">Odd:2.634</p>
                       <div className="EarnLoss">Earned</div>
                   </div>
               </div>
        : ""}
               { forex ==="Forex"? 
                        <div className="SPM">
                        <div className="sport2">
                            <div className="divS"><span className="Nog">Trade No: </span>SP-2022/10/07</div>

                            <div className="busyer">
                            <div className="pairs">
                                <p className="Usdj">Pair: GBPUSD</p>
                                <p className="Usdj">Condition: Long</p>
                            </div>
                           <div className="pairs">
                               <div>
                                   <p className="Usdj">Entry point-1.8923</p>
                                   <p className="Usdj">Exit point-1.8923</p>
                               </div>
                               <div className="Fitwem">
                                   <p className="Usdj">Take Profit</p>
                                   <p className="Usdj">45 pips</p>
                               </div>
                           </div>

                           </div>
                           
                          
                            <div className="EarnLoss">Earned</div>
     
                        </div>
                        <div className="sport2">
                            <div className="divS"><span className="Nog">Trade No: </span>SP-2022/10/07</div>

                            <div className="busyer">
                            <div className="pairs">
                                <p className="Usdj">Pair: GBPUSD</p>
                                <p className="Usdj">Condition: Long</p>
                            </div>
                           <div className="pairs">
                               <div>
                                   <p className="Usdj">Entry point-1.8923</p>
                                   <p className="Usdj">Exit point-1.8923</p>
                               </div>
                               <div className="Fitwem">
                                   <p className="Usdj">Take Profit</p>
                                   <p className="Usdj">40 pips</p>
                               </div>
                           </div>

                           </div>
                           
                          
                            <div className="EarnLoss">Earned</div>
     
                        </div>
                        <div className="sport2">
                            <div className="divS"><span className="Nog">Trade No: </span>SP-2022/10/07</div>

                            <div className="busyer">
                            <div className="pairs">
                                <p className="Usdj">Pair: GBPUSD</p>
                                <p className="Usdj">Condition: Long</p>
                            </div>
                           <div className="pairs">
                               <div>
                                   <p className="Usdj">Entry point-1.8923</p>
                                   <p className="Usdj">Exit point-1.8923</p>
                               </div>
                               <div className="Fitwem">
                                   <p className="Usdj">Take Profit</p>
                                   <p className="Usdj">80 pips</p>
                               </div>
                           </div>

                           </div>
                           
                          
                            <div className="EarnLoss">Earned</div>
     
                        </div>
                    </div>
               :""}
             

               { Cryptocurrency === "cryptocurrency"? 
                    <div className="SPM">
                    <div className="sport2">
                        <div className="divS"><span className="Nog">Trade No: </span>SP-2022/10/07</div>

                        <div className="busyer">
                        <div className="pairs">
                            <p className="Usdj">Pair: GBPUSD</p>
                            <p className="Usdj">Condition: Long</p>
                        </div>
                       <div className="pairs">
                           <div>
                               <p className="Usdj">Entry point-1.8923</p>
                               <p className="Usdj">Exit point-1.8923</p>
                           </div>
                           <div className="Fitwem">
                               <p className="Usdj">Take Profit</p>
                               <p className="Usdj">60%</p>
                           </div>
                       </div>

                       </div>
                       
                      
                        <div className="EarnLoss">Earned</div>
 
                    </div>
                    <div className="sport2">
                        <div className="divS"><span className="Nog">Trade No: </span>SP-2022/10/07</div>

                        <div className="busyer">
                        <div className="pairs">
                            <p className="Usdj">Pair: GBPUSD</p>
                            <p className="Usdj">Condition: Long</p>
                        </div>
                       <div className="pairs">
                           <div>
                               <p className="Usdj">Entry point-1.8923</p>
                               <p className="Usdj">Exit point-1.8923</p>
                           </div>
                           <div className="Fitwem">
                               <p className="Usdj">Take Profit</p>
                               <p className="Usdj">80%</p>
                           </div>
                       </div>

                       </div>
                       
                      
                        <div className="EarnLoss">Earned</div>
 
                    </div>
                    <div className="sport2">
                        <div className="divS"><span className="Nog">Trade No: </span>SP-2022/10/07</div>

                        <div className="busyer">
                        <div className="pairs">
                            <p className="Usdj">Pair: GBPUSD</p>
                            <p className="Usdj">Condition: Long</p>
                        </div>
                       <div className="pairs">
                           <div>
                               <p className="Usdj">Entry point-1.8923</p>
                               <p className="Usdj">Exit point-1.8923</p>
                           </div>
                           <div className="Fitwem">
                               <p className="Usdj">Take Profit</p>
                               <p className="Usdj">75%</p>
                           </div>
                       </div>

                       </div>
                       
                      
                        <div className="EarnLoss">Earned</div>
 
                    </div>
                </div>
               :""}

           </div>
           </div>

           {/* end section6 */}

           {/*section7 */}
             <div style={{backgroundImage:"linear-gradient(to right,rgba(255,0,0,0),rgb(201 209 233))",paddingBottom:"50px",paddingTop:"80px",height:"300px"}}>
              <div className="Rtme">
              <div className="TrustSeal">
                 <div className="SealY">Earners Trust Seal</div>
                 <p className="ifYou">If you judiciously follow our predictions and apply our risk reward ratio and dont turn profit at the end of the month, We will refund your subscription money or your next month subscription becomes free.</p>
<p className="ifYou lio">T&C Apply</p>
              </div>
              </div>
              </div>


           {/* end section7 */}

           {/*  */}
           <div style={{backgroundImage:"linear-gradient(to right, rgb(201 209 233),rgba(255,0,0,0))",paddingBottom:"50px",height:"300px"}} className="Great" >
             <div className="with">Partners With Great Benefits  </div>
            <div className="ye"></div>
           <div className="Make15">
               <div>
                   <div>
                       <p className="millionM">Make 1 million Naira monthly </p>
                       <p className="OnRef">On Referral Commission</p>
                   </div>
               </div>
               <div>
                   <p className="Onref1">50%  Commission</p>
                   <p className="Onref1">Daily payout</p>
                   <p className="Onref1">Instant withdrawal to Account</p>
                   <p className="Onref1">Residual Income For Life</p>
               </div>
           </div>
           </div>

               {/*  */}
               {/*  */}
               
               </div>

               {/*  */}

    

          {/*======  section5 ========*/}

      <div style={{backgroundImage:"linear-gradient(to right, rgba(255,0,0,0),rgb(201 209 233))",paddingBottom:"60px",paddingTop:"80px"}}>
         <div className="Rtme">
         <div className="UsAbout">What Earners Say About Us</div>
         {/* <div className="divUnder1"></div> */}
         <div className="CarouseDivDiv marginMu">
          <Carousel
            autoplay={true}
            intervals={3000}
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
          >
            <div className="carousel_Div carouselPW">
             <div className="STRn">
                 <div className="you pairy">
                     <div className="Stuffy">
                     <p className="backthan">The Best Storage</p>
                     <p className="pickStuff">We pick your stuff up, store it and bring it back when you need it—for less than the price of traditional self-storage.</p>
                     </div>
                 </div>
                 <div className="you pairy1">
                     <div className="Tmfood">
                     <img src="/img/dape.webp" className="foodTm"/>
                     </div>
                 </div>
             </div>
            </div>
            <div className="carousel_Div">
            <div className="STRn">
                 <div className="you pairy">
                     <div className="Stuffy">
                     <p className="backthan">The Best Storage</p>
                     <p className="pickStuff">We pick your stuff up, store it and bring it back when you need it—for less than the price of traditional self-storage.</p>
                     </div>
                 </div>
                 <div className="you pairy1">
                     <div className="Tmfood">
                     <img src="/img/dape.webp" className="foodTm"/>
                     </div>
                 </div>
             </div>
            </div>
            <div className="carousel_Div">
            <div className="STRn">
                 <div className="you pairy">
                     <div className="Stuffy">
                     <p className="backthan">The Best Storage</p>
                     <p className="pickStuff">We pick your stuff up, store it and bring it back when you need it—for less than the price of traditional self-storage.</p>
                     </div>
                 </div>
                 <div className="you pairy1">
                     <div className="Tmfood">
                     <img src="/img/dape.webp" className="foodTm"/>
                     </div>
                 </div>
             </div>
            </div>
          </Carousel>
        </div>

                   <div>
          <div id="Faqc" data-aos="fade-up" data-aos-duration="3000"
             data-aos-easing="linear">
            <div className="firstTom" data-aos="fade-down" data-aos-duration="3000"
             data-aos-easing="linear">FAQ</div>
            <div>
              <div className="HowFarBro" onClick={() => setShow(!show)}>
                <span>I have never traded the forex or crypto market before. How do I Start?</span>{" "}
                <span>
                {show? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show ? (
                <p className="ILOVEK">
                  {" "}
                  I am loving in cworl I am loving in cworl I am loving in cworl
                  I am loving in cworl I am loving in cworl I am loving in cworl
                  I am loving in cworl I am loving in cworl I am loving in cworl{" "}
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="HowFarBro" onClick={() => setShow1(!show1)}>
                <span>I don't know how to trade sports predictions. How do I start?</span>
                <span>
                {show1? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show1 ? (
                <p className="ILOVEK">
                  I am loving in cworl I am loving in cworl I am loving in cworl
                  I am loving in cworl I am loving in cworl I am loving in cworl
                  I am loving in cworl I am loving in cworl I am loving in cworl
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="HowFarBro" onClick={() => setShow2(!show2)}>
                <span> I don't Have an account with any forex platform. Can I get any recommendations? </span>
                <span>
                  {show2? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show2 ? (
                <p className="ILOVEK">
                  I am loving in cworl I am loving in cworl I am loving in cworl
                  I am loving in cworl I am loving in cworl I am loving in cworl
                  I am loving in cworl I am loving in cworl I am loving in cworl
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="HowFarBro" onClick={() => setShow3(!show3)}>
                <span> I am not registered with any cryptocurrency trading platform. Can I get any recommendations? </span>
                <span>
                  {show3? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show3 ? (
                <p className="ILOVEK">
                  I am loving in cworl I am loving in cworl I am loving in cworl
                  I am loving in cworl I am loving in cworl I am loving in cworl
                  I am loving in cworl I am loving in cworl I am loving in cworl
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="HowFarBro" onClick={() => setShow4(!show4)}>
                <span> How much does it cost to subscribe monthly? </span>
                <span>
                  {show4? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show4 ? (
                <p className="ILOVEK">
                  I am loving in cworl I am loving in cworl I am loving in cworl
                  I am loving in cworl I am loving in cworl I am loving in cworl
                  I am loving in cworl I am loving in cworl I am loving in cworl
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="HowFarBro" onClick={() => setShow5(!show5)}>
                <span> What if I don't make a profit at the end of the month with your predictions? </span>
                <span>
                  {show5? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show5 ? (
                <p className="ILOVEK">
                  I am loving in cworl I am loving in cworl I am loving in cworl
                  I am loving in cworl I am loving in cworl I am loving in cworl
                  I am loving in cworl I am loving in cworl I am loving in cworl
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="HowFarBro" onClick={() => setShow6(!show6)}>
                <span> If my referral subscribes every month will I still get paid my referral commission? </span>
                <span>
                  {show6? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show6 ? (
                <p className="ILOVEK">
                  I am loving in cworl I am loving in cworl I am loving in cworl
                  I am loving in cworl I am loving in cworl I am loving in cworl
                  I am loving in cworl I am loving in cworl I am loving in cworl
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
          </div>
          </div>  
     

        
      </div>
      <Footer />
      </div>
    );
}

export default Home2;