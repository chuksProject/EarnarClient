import React ,{useState,useEffect}from "react";
import { Link} from "react-router-dom";
import "./style/home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Footer from "./footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlus,faMinus} from '@fortawesome/free-solid-svg-icons'
import Came from "./addcarousel"
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import AOS from 'aos';
import "./style/home2.css"
import axios from "axios";
import { useLocation } from "react-router"



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
  const [Binary,setBinary] = useState("")

  const [register,setRegister] = useState(false)

  const [post,setPosts] = useState([])
  const [post1,setPosts1] = useState([])
  const cat = useLocation().search
  

  const current = new Date();
  // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const date = `  ${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()}`;

  // const tr = window.location.pathname;
  // if(tr === "/"){
  //   console.log("Mr kingsley is Good and nan")
  // }


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1// optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  }

  const responsive1 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1// optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  }





  const forf =()=>{
      setSports('Forex')
  }
  const crypto =()=>{
    setSports("cryptocurrency")

}
const bina =()=>{
  setSports('binary')
}
const Sports1 =()=>{
    setSports("sports")
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
  const fetchData1 = async ()=>{
    try{
 const res = await axios.get(`/post/sports/tip3`)
   setPosts1(res.data)
  
 console.log(res.data)
    }catch(err){
      console.log(err)

    }
  }
  fetchData1()
},[post1])

  useEffect(()=>{
    AOS.init();
  },[])
  

    return (
      <div  className="HomPageBg">
      <div className="Home_Bg_Bg" >
      

       
        {/*======  mobile header ========*/} 


      
        

        {/*======  section2 ========*/}

      <div className="fugmu">
        <div className="CarouseDivDiv ">
        <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  // autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlay={true}
  autoPlaySpeed={3000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  // deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
            <div className="carousel_Div">
              <img src="/img/eanner.png" className="ImgDiv" />
            </div>
            <div className="carousel_Div">
              <img src="/img/tom.png" className="ImgDiv" />
            </div>
            <div className="carousel_Div">
              <img src="/img/eanner.png" className="ImgDiv" />
            </div>
          </Carousel>
        </div>
        </div>

        {/*======  section3========*/}

        <div  className="fareWo">
         
      <div className="Rtme">
          <div className="Free">
            <div><p className="EarnP">Earn,Save & Invest Daily </p>
            <div className="divUnder"></div></div>
          
          </div>
          {/*======  section4 ========*/}

          {/* secton5   */}

           <div className="teleCom">
               <div className="commT">
                   <div className="FreeComm">Binary Option Trading</div>
                   <p className="Saving">Earn</p>
                   <p className="perceT">50-100%</p>
                   <p className="dailyOn">Profits</p>
                   <p className="AirTime">Monthly</p>
                  <div className="successRate100"><p className="RateSuccess">75% Success Rate</p></div>
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
           <div className="fareWo1 fareWo3"></div>
           <div className="fareWo1 fareWo2"></div>
           </div>


           {/* end section5   */}
               {/* <Carous/> */}
           {/*section6 */}


         <div style={{paddingBottom:"20px",position:"relative"}}>
         


         

           <div className="Rtme">
               <div className="loud">Our Results Speaks Louder</div>
               <div className="ye"></div>
               <div className="Forex1">
                   <div className={sports === "sports"?"Forex12 pin":"Forex12"} onClick={Sports1}>Sports</div>
                   <div className={sports==="Forex"?"Forex12 pin":"Forex12"} onClick={forf}>Forex</div>
                   <div className={sports === "cryptocurrency"?"Forex12 pin":"Forex12"} onClick={crypto}>Cryptocurrency</div>
                   <div className={sports === "binary"?"Forex12 pin":"Forex12"} onClick={bina}>Binary</div>
               </div>
               { sports === "sports"?
             
               <Carousel
  swipeable={false}
  draggable={false}
  showDots={false}
  responsive={responsive1}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  // autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlay={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  // deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
 
>
      
            
               

               {post1.map((app,id)=>(
                   <div className="sport2 cappin" key={id}>
                       <div className="divS"><span className="Nog">Game No: </span>SP-{date}/{app.gameNo}</div>
                       <p className="dailyP21">Daily Profit</p>
                       <p className="Dyc">{app.dailyProfit}%</p>
                       <p className="addErn">odd:1.834</p>
                       <div className={app.checked ===true?"EarnLoss":"EarnLoss loss"}>{app.checked ===true?"Earned":"Loss"}</div>

                   </div>
                   ))}
             




                  

        
               
                    
             

                


                      


       
</Carousel>

: ""}

               { sports ==="Forex"? 
                        
                                 <Carousel
  swipeable={false}
  draggable={false}
  showDots={false}
  responsive={responsive1}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  // autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlay={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  // deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
                        <div className="sport2 cappin">
                            <div className="divS"><span className="Nog">Trade No: </span>SP-{date}</div>

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
                        <div className="sport2 cappin">
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
                        <div className="sport2 cappin">
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

                        <div className="sport2 cappin">
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
                        <div className="sport2 cappin">
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
                        </Carousel>
                  
               :""}
             

               { sports === "cryptocurrency"? 
                 
                 <Carousel
                 swipeable={false}
                 draggable={false}
                 showDots={false}
                 responsive={responsive1}
                 ssr={true} // means to render carousel on server-side.
                 infinite={true}
                 // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                 autoPlay={true}
                 autoPlaySpeed={1000}
                 keyBoardControl={true}
                 customTransition="all .5"
                 transitionDuration={500}
                 containerClass="carousel-container"
                 removeArrowOnDeviceType={["tablet", "mobile"]}
                 // deviceType={this.props.deviceType}
                 dotListClass="custom-dot-list-style"
                 itemClass="carousel-item-padding-40-px"
               >
                    <div className="sport2 cappin">
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
                    <div className="sport2 cappin">
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
                    <div className="sport2 cappin">
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
                    <div className="sport2 cappin">
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
                    <div className="sport2 cappin">
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
                    </Carousel>
               :""}
 


 { sports=== "binary"? 
                   <Carousel
                   swipeable={false}
                   draggable={false}
                   showDots={false}
                   responsive={responsive1}
                   ssr={true} // means to render carousel on server-side.
                   infinite={true}
                   // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                   autoPlay={true}
                   autoPlaySpeed={1000}
                   keyBoardControl={true}
                   customTransition="all .5"
                   transitionDuration={500}
                   containerClass="carousel-container"
                   removeArrowOnDeviceType={["tablet", "mobile"]}
                   // deviceType={this.props.deviceType}
                   dotListClass="custom-dot-list-style"
                   itemClass="carousel-item-padding-40-px"
                 >
                    <div className="sport2 cappin">
                        <div className="divS"><span className="Nog">Trade No: </span>BN-2022/10/07</div>

                        <div className="busyer">
                        <div className="pairs">
                            <p className="Usdj">Pair: GBPUSD</p>
                            <p className="Usdj">Condition: Buy(call)</p>
                        </div>
                       <div className="pairs">
                           <div>
                               <p className="Usdj">TIME : 5:45pm</p>
                             
                           </div>
                           <div className="Fitwem">
                               <p className="Usdj">Take Profit</p>
                               <p className="Usdj">60%</p>
                           </div>
                       </div>

                       </div>
                       
                      
                        <div className="EarnLoss">Earned</div>
 
                    </div>
                    <div className="sport2 cappin">
                        <div className="divS"><span className="Nog">Trade No: </span>BN-2022/10/07</div>

                        <div className="busyer">
                        <div className="pairs">
                            <p className="Usdj">Pair: GBPUSD</p>
                            <p className="Usdj">Condition: Sell(put)</p>
                        </div>
                       <div className="pairs">
                           <div>
                               <p className="Usdj">TIME : 3:00am</p>
                          
                           </div>
                           <div className="Fitwem">
                               <p className="Usdj">Take Profit</p>
                               <p className="Usdj">80%</p>
                           </div>
                       </div>

                       </div>
                       
                      
                        <div className="EarnLoss">Earned</div>
 
                    </div>
                    <div className="sport2 cappin">
                        <div className="divS"><span className="Nog">Trade No: </span>BN-2022/10/07</div>

                        <div className="busyer">
                        <div className="pairs">
                            <p className="Usdj">Pair: GBPUSD</p>
                            <p className="Usdj">Condition: Buy(call)</p>
                        </div>
                       <div className="pairs">
                           <div>
                               <p className="Usdj">TIME : 2:00pm</p>
                            
                           </div>
                           <div className="Fitwem">
                               <p className="Usdj">Take Profit</p>
                               <p className="Usdj">75%</p>
                           </div>
                       </div>

                       </div>
                       
                      
                        <div className="EarnLoss">Earned</div>
 
                    </div>
                    <div className="sport2 cappin">
                        <div className="divS"><span className="Nog">Trade No: </span>BN-2022/10/07</div>

                        <div className="busyer">
                        <div className="pairs">
                            <p className="Usdj">Pair: GBPUSD</p>
                            <p className="Usdj">Condition: Buy(call)</p>
                        </div>
                       <div className="pairs">
                           <div>
                               <p className="Usdj">TIME : 2:00pm</p>
                            
                           </div>
                           <div className="Fitwem">
                               <p className="Usdj">Take Profit</p>
                               <p className="Usdj">75%</p>
                           </div>
                       </div>

                       </div>
                       
                      
                        <div className="EarnLoss">Earned</div>
 
                    </div>
                    <div className="sport2 cappin">
                        <div className="divS"><span className="Nog">Trade No: </span>BN-2022/10/07</div>

                        <div className="busyer">
                        <div className="pairs">
                            <p className="Usdj">Pair: GBPUSD</p>
                            <p className="Usdj">Condition: Buy(call)</p>
                        </div>
                       <div className="pairs">
                           <div>
                               <p className="Usdj">TIME : 2:00pm</p>
                            
                           </div>
                           <div className="Fitwem">
                               <p className="Usdj">Take Profit</p>
                               <p className="Usdj">75%</p>
                           </div>
                       </div>

                       </div>
                       
                      
                        <div className="EarnLoss">Earned</div>
 
                    </div>
                    </Carousel>
               :""}




      
           </div>
           <div className="fareWo1 fareWo3"></div>
           </div>

           {/* end section6 */}


           {/*section7 */}
             <div className="fear">
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
           <div className="Rtme">
           <div  className="Great" >
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
                 <div className="yuri2">
                 <div className="yuri"></div>
                 <p className="Onref1">50%  Commission</p>
                 </div>
                  
                  <div className="yuri2">
                  <div className="yuri"></div>
                   <p className="Onref1">Daily payout</p>
                   </div>

                   <div className="yuri2">
                   <div className="yuri"></div>
                   <p className="Onref1">Instant withdrawal to Account</p>
                   </div>

                   <div className="yuri2">
                   <div className="yuri"></div>
                   <p className="Onref1">Residual Income For Life</p>
                   </div>
               </div>
           </div>
           </div>
           </div>

               {/*  */}
               {/*  */}
               
               </div>

               {/*  */}

    

          {/*======  section5 ========*/}

      <div className="WhatD">
         <div className="Rtme">
         <div className="UsAbout">What Earners Say About Us</div>
        
         {/* <div className="divUnder1"></div> */}
         <div className="CarouseDivDiv marginMu fadama">
         <Carousel
  swipeable={false}
  draggable={false}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  // autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlay={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  // deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
            <div className="carousel_Div carouselPW">
             <div className="STRn">
                 <div className="you pairy">
                     <div className="Stuffy">
                     <p className="backthan">The Best Storage</p>
                     <p className="pickStuff">We pick your stuff up, store it and bring it back when you need it—for less than the price of traditional self-storage.</p>
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
                  To start trading the forex or cryptocurrency market all you need to know is to understand the basics of trading like, how to Buy/Sell, How to set Stoploss and Takeprofit, How to spot support and Resistance. With this basic knowledge you can follow our expert forecast and achieve success in the market.{" "}
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="HowFarBro" onClick={() => setShow1(!show1)}>
                <span>I don't know how to bet on sports. How do I start?</span>
                <span>
                {show1? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show1 ? (
                <p className="ILOVEK">
                 You dont need to understand much about sport betting to bet. one you are registered with our recomemded bookmaker just copy our coupon code and search for it. with the code your can place your bet.
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
                Click the prediction button on the header and go through forex section to see recomemded brokers
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
                Click the prediction button on the header and go through Cryptocurrency section to see recomemded exchanges
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
                  It cost only $11 or ₦5,000 to subscribe monthly
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="HowFarBro" onClick={() => setShow5(!show5)}>
                <span>What if I don't make a profit at the end of the month with your predictions? </span>
                <span>
                  {show5? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show5 ? (
                <p className="ILOVEK">
                 If you judiciously follow our predictions and apply our risk reward ratio and dont turn profit at the end of the month, We will refund your subscription money or your next month subscription becomes free.
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
                  We pay 50% commission on any user your refer to our plaform.e.g if Jones refers John and Jonh subscribe to our premium prediction, Jones will recieve 50% ($5.5 or ₦2,500). if John continue renewing his subscrption every month, Jones will keep earning his referral bonus for life.
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