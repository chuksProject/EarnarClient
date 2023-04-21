import React,{useState,useEffect,useRef} from "react"
import "./style/mytip.css"
import { Link} from "react-router-dom";
import Footer from "./footer"
import axios from "axios";



const Mytip =()=>{

    const [register,setRegister] = useState(false)
    const [sportInfo,setSportInfo]=useState([])
    const [coupon,setCoupon]=useState([])
    const [text,setText]= useState("3#$%!#DFGG")

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5); 

    const myDiv = useRef(null);


//     const tr = window.location.pathname;
//   if(tr === "/tip"){
//     console.log("Mr kingsley is Good and nan")
//   }
// const totalPages = Math.ceil(sportInfo.length / itemsPerPage);

// const handlePageChange = (pageNumber) => {
//   setCurrentPage(pageNumber);
// };




       const [tip,setTip] = useState("Tip")
   
       const forexChange =()=>{
           setTip("forex")
       }
       const cryptoChange = ()=>{
           setTip('crypto')
       }



       useEffect(()=>{
        const userInfom = async ()=>{
          try{
            const res = await axios.get('/post/sports/tip')
     
            setSportInfo(res.data)
           
          }catch(err){
            console.log(err)
          }
        }
        userInfom()
    
      },[sportInfo])

   


      useEffect(()=>{
        const userCoupon = async ()=>{
          try{
            const res = await axios.get('/post/coupon')
     
            setCoupon(res.data)
           
           
          }catch(err){
            console.log(err)
          }
        }
        userCoupon()
    
      },[coupon])


     


      const copytext =()=>{

            
              const sade = document.getElementById("foren").innerText;
              // console.log(id,sade)
          
        

      
        
        // navigator.clipboard.writeText(textToCopy);
        // alert('copied') 
        
    }

    const indexOfLastPost = currentPage * itemsPerPage; 
const indexOfFirstPost = indexOfLastPost - itemsPerPage;
const  currentPosts = sportInfo.slice(indexOfFirstPost,indexOfLastPost);
const pageNumber = [];

 for(let i = 1; i <= Math.ceil(sportInfo.length / itemsPerPage ); i++ ){
  pageNumber.push(i)
 }

 const changePage=(pageNumber)=>setCurrentPage(pageNumber);
 const changePage1=(pageNumber)=>setCurrentPage(pageNumber);
 



    return(
   <div className="Mysee" style={{ backgroundImage: "linear-gradient(to right, rgb(106 116 167 / 34%), rgb(119 135 182 / 95%))"}} >

        
<div className="Sports23 MyTipUp">
             <div className={tip === "Tip"?"sportsAt people2 gamings":"sportsAt people2"} onClick ={()=>setTip("Tip")}>Sports</div>
             <div className={tip === "forex"?"sportsAt people2 gamings":"sportsAt people2"} onClick ={forexChange}>Forex</div>
             <div className={tip === "crypto"?"sportsAt people2 gamings":"sportsAt people2"} onClick={cryptoChange}><span className="Name">Cryptocurrency</span><span className="Name1">Crypto</span></div>
             <div className={tip === "binary"?"sportsAt people2 gamings":"sportsAt people2"} onClick={()=>setTip("binary")}>Binary</div>
         </div>
         
         {tip === "Tip"? 
         <div>
       <div className="MyTip ">
       
         
       <div className="Free">
          <div>
              <p className="Free_ExportTT Dop">Daily</p>
          </div>
        
     </div>

     <div className="TimeDiv12 ">
                      <div>
                        <ul className="GameN">
                          <li className="NoGame">Game No</li>
                          <li className="NoGame">Sp/2022/10/7</li>
                        </ul>
                      </div>
                   <ul className="TimeDiv spaceMargiN">
                       <li>
                           TIME
                       </li>
                       <li className="EngLan">
                        LEAGUE
                       </li>
                       <li>
                         TEAM
                       </li>
                       <li>
                           TIP
                       </li>
                       <li>
                           ODD
                       </li>
                   
                     
                     
                   </ul>
               </div> 

               <div className="bigManDiv">
                   <div className="FOR">
               <div className="Leaque tipHeightDiv">

     
            {currentPosts.map((user,id)=>(
                   <div key={id}>
            <ul className={(user.id %2 == 0)?"TimeDiv1 ADDTimeDbg":"TimeDiv1 ADDTimeDbg1"}>
                <li>{user.time}</li>
                <li className="EngLan">{user.league}</li>
                <li>{`${user.teamA} vs ${user.teamB}`}</li>
                <li>{user.tip}</li>
                <li>{user.odd}</li>
             
                
            </ul>
        </div>
        ))}
          <div className="tomh67"> 
       <ul className="tomh">
        { pageNumber.map((number,index)=>(
          <li key={index} onClick={()=>changePage(number)} className="">
           <a href="#" className="tomh1">
             {number}
           </a>
          </li>
        ))}
        </ul>
        

        </div>
     
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult">
                <li className="Total_Odd">TOTAL ODD</li>
               
                <li></li>
                <li></li>
                <li></li>
                <li className="tippo">9 : 9</li>
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult gt1">
                <li className="Total_Odd">RESULT</li>
               
                <li></li>
                <li></li>
                <li>
                <div >
                  <form>
                    <div className="sped ">
                      <div>Lost</div>
                      <div className="greenDiv gt"></div>
                    </div>
                    </form>
                    </div>
                </li>
                <li className="tippo">
                  <div>
                  <form>
                    <div className="sped">
                      <div>Won</div>
                      <div className="greenDiv"></div>
                    </div>
                    </form>
                    </div>
                    </li>
                
            </ul>
        </div>
        
        
  
               </div>
               <div className="TimeDiv12 ">
                   <div className="TimeDiv4 spaceMargiN pipi ">
                
                  
                       <p>
                       Coupon Codes
                       </p>
                   
                   
                     
                     
                   </div>
               </div> 
               <div className="Leaque tipHeightDiv">
                   
                

    {coupon.map((app,id)=>(
                   <div key ={id}>
            <ul className={(app.id %2 == 0)? "TimeDiv1 ADDTimeDbg":"TimeDiv1 ADDTimeDbg1"}>
                <li>{app.betName}</li>
                <li className="EngLan"><div id="foren">{app.couponCode}</div></li>
                <li><div className="CopyCode90" onClick={copytext}>Copy Code</div> </li>
               
             
                
            </ul>
        </div>
        ))}
       
       
       
       
        
        
  
               </div>

            
               <div className="finding">GOOD LUCK</div>


               </div>
               </div>

            

     
               </div>

               <div className="MyTip">
       <div className="Free">
          <div>
              <p className="Free_ExportTT Dop">Midweek</p>
          </div>
       
     </div>

     <div className="TimeDiv12 ">
     <div>
                        <ul className="GameN">
                          <li className="NoGame">Game No</li>
                          <li className="NoGame">Sp/2022/10/7</li>
                        </ul>
                      </div>
                   <ul className="TimeDiv spaceMargiN">
                       <li>
                           TIME
                       </li>
                       <li className="EngLan">
                        LEAGUE
                       </li>
                       <li>
                         TEAM
                       </li>
                       <li>
                           TIP
                       </li>
                       <li>
                           ODD
                       </li>
                  
                     
                     
                   </ul>
               </div> 

               <div className="bigManDiv">
                   <div className="FOR">
               <div className="Leaque tipHeightDiv">
                   
                
               {currentPosts.map((users,id)=>(
                   <div key={id}>
            <ul className={(users.id %2 == 0)?"TimeDiv1 ADDTimeDbg":"TimeDiv1 ADDTimeDbg1"}>
                <li>{users.time}</li>
                <li className="EngLan">{users.league}</li>
                <li>{`${users.teamA} vs ${users.teamB}`}</li>
                <li>{users.tip}</li>
                <li>{users.odd}</li>
              
                
            </ul>
        </div>
        ))}

   <div className="tomh67"> 
       <ul className="tomh">
        { pageNumber.map((numb,index)=>(
          <li key={index} onClick={()=>changePage1(numb)} className="">
           <a href="#" className="tomh1">
             {numb}
           </a>
          </li>
        ))}
        </ul>
        

        </div>
     
       
      
        
      
        
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult">
                <li className="Total_Odd">TOTAL ODD</li>
                
                <li></li>
                <li></li>
                <li></li>
                <li className="tippo">9 : 9</li>
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult gt1">
                <li className="Total_Odd">RESULT</li>
               
                <li></li>
                <li></li>
                <li>
                <div >
                  <form>
                    <div className="sped ">
                      <div>Lost</div>
                      <div className="greenDiv gt"></div>
                    </div>
                    </form>
                    </div>
                </li>
                <li className="tippo">
                  <div>
                  <form>
                    <div className="sped">
                      <div>Won</div>
                      <div className="greenDiv"></div>
                    </div>
                    </form>
                    </div>
                    </li>
                
            </ul>
        </div>
        
        
  
               </div>

            
               <div className="TimeDiv12 ">
                   <div className="TimeDiv4 spaceMargiN pipi">
                
                  
                       <p >
                           Coupon Codes
                       </p>
                   
                   
                     
                     
                   </div>
               </div> 
               <div className="Leaque tipHeightDiv">
                   
                

                   <div>
            <ul className="TimeDiv1 ADDTimeDbg1">
                <li>Bet9ja</li>
                <li className="EngLan">7XU-TUG-UITO-RYI</li>
                <li>Copy Code </li>
               
             
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1">
                <li>Bet9ja</li>
                <li className="EngLan">7XU-TUG-UITO-RYI</li>
                <li>Copy Code</li>
            
             
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1">
                <li>Bet9ja</li>
                <li className="EngLan">7XU-TUG-UITO-RYI</li>
                <li>Copy Code</li>
                
           
                
            </ul>
        </div>
       
       
        
        
  
               </div>
               <div className="finding">GOOD LUCK</div>

               <div className="pays">
                 <div className="Clas">Warning</div>
                 <p className="domt">Don't be a Gambler,Be an Investor. </p>
                 <p className="riskin">Do not risk more than what you can bear.<span className="eachG">We recommend you risk bewteen <span className="ifiy">1-5% </span>of your Capital on each game.</span></p>
               </div>

               </div>
               </div>

     
               </div>
               </div>
               :""}
               {tip === "forex" ? 
            <div  >



            <div className="MyTip">
            <div className="Free">
               <div>
                   <p className="Free_ExportTT Dop">Hourly</p>
               </div>
             
          </div>
     
          <div className="TimeDiv12 ">
                           <div>
                             <ul className="GameN">
                               <li className="NoGame">Trade No</li>
                               <li className="NoGame">Fx/2022/10/7/1</li>
                             </ul>
                           </div>
                        <ul className="TimeDiv spaceMargiN">
                            <li>
                                PAIR
                            </li>
                            <li className="EngLan">
                             CONDITION
                            </li>
                            <li>
                              ENTRY
                            </li>
                            <li>
                                TAKE PROFIT
                            </li>
                            <li>
                                STOP LOSS
                            </li>
                        
                          
                          
                        </ul>
                    </div> 
     
                    <div className="bigManDiv">
                        <div className="FOR">
                    <div className="Leaque tipHeightDiv">
                        
                     
     
                        <div>
                 <ul className="TimeDiv1 ADDTimeDbg1">
                     <li>GBPUSD</li>
                     <li className="EngLan">Long(buy)</li>
                     <li>1.687894 </li>
                     <li>1.896540</li>
                     <li>1.567123</li>
                  
                     
                 </ul>
             </div>
           
           
             <div>
                 <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult ggLive">
                     <li className="Total_Odd ggLive">Take Profit: No of Pips</li>
                    
                     <li></li>
                     <li></li>
                     <li></li>
                     <li className="tippo">60</li>
                     
                 </ul>
             </div>
             <div>
                 <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult ggLive">
                     <li className="Total_Odd ggLive">Stop Loss: No of Pips</li>
                    
                     <li></li>
                     <li></li>
                     <li></li>
                     <li className="tippo">40</li>
                     
                 </ul>
             </div>
             <div>
                 <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult gt1 ResultTip">
                     <li className="Total_Odd">RESULT</li>
                    
                     <li></li>
                     <li></li>
                     <li>
                     <div >
                       <form>
                         <div className="sped ">
                           <div>Lost</div>
                           <div className="greenDiv gt"></div>
                         </div>
                         </form>
                         </div>
                     </li>
                     <li className="tippo">
                       <div>
                       <form>
                         <div className="sped">
                           <div>Won</div>
                           <div className="greenDiv"></div>
                         </div>
                         </form>
                         </div>
                         </li>
                     
                 </ul>
             </div>
             
             
       
                    </div>
                 
                   
     
                 
                    <div className="finding">GOOD LUCK</div>
     
     
                    </div>
                    </div>
     
                 
     
          
                    </div>
     
                    <div className="MyTip MyTipUp MyPity">
            <div className="Free">
               <div>
                   <p className="Free_ExportTT Dop">Daily</p>
               </div>
             
          </div>
     
          <div className="TimeDiv12 ">
                           <div>
                             <ul className="GameN">
                               <li className="NoGame">Trade No</li>
                               <li className="NoGame">Fx/2022/10/7/2</li>
                             </ul>
                           </div>
                        <ul className="TimeDiv spaceMargiN">
                            <li>
                                PAIR
                            </li>
                            <li className="EngLan">
                             CONDITION
                            </li>
                            <li>
                              ENTRY
                            </li>
                            <li>
                                TAKE PROFIT
                            </li>
                            <li>
                                STOP LOSS
                            </li>
                        
                          
                          
                        </ul>
                    </div> 
     
                    <div className="bigManDiv">
                        <div className="FOR">
                    <div className="Leaque tipHeightDiv">
                        
                     
     
                        <div>
                 <ul className="TimeDiv1 ADDTimeDbg1">
                     <li>GBPUSD</li>
                     <li className="EngLan">Long(buy)</li>
                     <li>1.687894 </li>
                     <li>1.896540</li>
                     <li>1.567123</li>
                  
                     
                 </ul>
             </div>
           
           
             <div>
                 <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult ggLive">
                     <li className="Total_Odd ggLive">Take Profit: No of Pips</li>
                    
                     <li></li>
                     <li></li>
                     <li></li>
                     <li className="tippo">60</li>
                     
                 </ul>
             </div>
             <div>
                 <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult ggLive">
                     <li className="Total_Odd ggLive">Stop Loss: No of Pips</li>
                    
                     <li></li>
                     <li></li>
                     <li></li>
                     <li className="tippo">40</li>
                     
                 </ul>
             </div>
             <div>
                 <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult gt1 ResultTip">
                     <li className="Total_Odd">RESULT</li>
                    
                     <li></li>
                     <li></li>
                     <li>
                     <div >
                       <form>
                         <div className="sped ">
                           <div>Lost</div>
                           <div className="greenDiv gt"></div>
                         </div>
                         </form>
                         </div>
                     </li>
                     <li className="tippo">
                       <div>
                       <form>
                         <div className="sped">
                           <div>Won</div>
                           <div className="greenDiv"></div>
                         </div>
                         </form>
                         </div>
                         </li>
                     
                 </ul>
             </div>
             
             
       
                    </div>
                 
                   
     
                 
                    <div className="finding">GOOD LUCK</div>
     
     
                    </div>
                    </div>
     
                 
     
          
                    </div>
     
                    {/* <div className="MyTip MyTipUp MyPity">
            <div className="Free">
               <div>
                   <p className="Free_ExportTT Dop">Daily</p>
               </div>
             
          </div>
     
          <div className="TimeDiv12 ">
                           <div>
                             <ul className="GameN">
                               <li className="NoGame">Trade No</li>
                               <li className="NoGame">Fx/2022/10/7/3</li>
                             </ul>
                           </div>
                        <ul className="TimeDiv spaceMargiN">
                            <li>
                                PAIR
                            </li>
                            <li className="EngLan">
                             CONDITION
                            </li>
                            <li>
                              ENTRY
                            </li>
                            <li>
                                TAKE PROFIT
                            </li>
                            <li>
                                STOP LOSS
                            </li>
                        
                          
                          
                        </ul>
                    </div> 
     
                    <div className="bigManDiv">
                        <div className="FOR">
                    <div className="Leaque tipHeightDiv">
                        
                     
     
                        <div>
                 <ul className="TimeDiv1 ADDTimeDbg1">
                     <li>GBPUSD</li>
                     <li className="EngLan">Long(buy)</li>
                     <li>1.687894 </li>
                     <li>1.896540</li>
                     <li>1.567123</li>
                  
                     
                 </ul>
             </div>
           
           
             <div>
                 <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult ggLive">
                     <li className="Total_Odd ggLive">Take Profit: No of Pips</li>
                    
                     <li></li>
                     <li></li>
                     <li></li>
                     <li className="tippo">60</li>
                     
                 </ul>
             </div>
             <div>
                 <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult ggLive">
                     <li className="Total_Odd ggLive">Stop Loss: No of Pips</li>
                    
                     <li></li>
                     <li></li>
                     <li></li>
                     <li className="tippo">40</li>
                     
                 </ul>
             </div>
             <div>
                 <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult gt1 ResultTip">
                     <li className="Total_Odd">RESULT</li>
                    
                     <li></li>
                     <li></li>
                     <li>
                     <div >
                       <form>
                         <div className="sped ">
                           <div>Lost</div>
                           <div className="greenDiv gt"></div>
                         </div>
                         </form>
                         </div>
                     </li>
                     <li className="tippo">
                       <div>
                       <form>
                         <div className="sped">
                           <div>Won</div>
                           <div className="greenDiv"></div>
                         </div>
                         </form>
                         </div>
                         </li>
                     
                 </ul>
             </div>
             
             
       
                    </div>
                 
                   
     
                 
                    <div className="finding">GOOD LUCK</div>
     
     
                    </div>
                    </div>
     
                 
     
          
                    </div> */}
     
                    <div className="MyTip">
            <div className="Free">
               <div>
                   <p className="Free_ExportTT Dop">Weekly</p>
               </div>
            
          </div>
     
          <div className="TimeDiv12 ">
          <div>
                             <ul className="GameN">
                               <li className="NoGame">Trade No</li>
                               <li className="NoGame">FX/2022/10/7/1</li>
                             </ul>
                           </div>
                        <ul className="TimeDiv spaceMargiN">
                            <li>
                                PAIR
                            </li>
                            <li className="EngLan">
                             CONDITION
                            </li>
                            <li>
                              ENTRY
                            </li>
                            <li>
                                TRADE PROFIT
                            </li>
                            <li>
                                STOP LOSS
                            </li>
                       
                          
                          
                        </ul>
                    </div> 
     
                    <div className="bigManDiv">
                        <div className="FOR">
                    <div className="Leaque tipHeightDiv">
                        
                     
     
                        <div>
                 <ul className="TimeDiv1 ADDTimeDbg1">
                     <li>GBPUSD</li>
                     <li className="EngLan">Long (Buy)</li>
                     <li>1.66678</li>
                     <li>1.86753</li>
                     <li>1.54321</li>
                   
                     
                 </ul>
             </div>
             
            
            
            
            
             
             <div>
                 <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult ">
                     <li className="Total_Odd ggLive">Take Profit: No of Pips</li>
                     
                     <li></li>
                     <li></li>
                     <li></li>
                     <li className="tippo">800</li>
                     
                 </ul>
             </div>
             <div>
                 <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult">
                     <li className="Total_Odd ggLive">Stop Loss: No of Pips</li>
                     
                     <li></li>
                     <li></li>
                     <li></li>
                     <li className="tippo">60</li>
                     
                 </ul>
             </div>
             <div>
                 <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult gt1 ResultTip">
                     <li className="Total_Odd">RESULT</li>
                    
                     <li></li>
                     <li></li>
                     <li>
                     <div >
                       <form>
                         <div className="sped ">
                           <div>Lost</div>
                           <div className="greenDiv gt"></div>
                         </div>
                         </form>
                         </div>
                     </li>
                     <li className="tippo">
                       <div>
                       <form>
                         <div className="sped">
                           <div>Won</div>
                           <div className="greenDiv"></div>
                         </div>
                         </form>
                         </div>
                         </li>
                     
                 </ul>
             </div>
             
             
       
                    </div>
     
                 
                 
                  
                    <div className="finding">GOOD LUCK</div>
     
                    <div className="pays">
                      <div className="Clas">Warning</div>
                      <p className="domt">Don't be a Gambler,Be an Investor. </p>
                      <p className="riskin">Do not risk more than what you can bear.<span className="eachG">We recommend you risk bewteen <span className="ifiy">1-2% </span>of your Capital on each Trade.</span></p>
                    </div>
     
                    </div>
                    </div>
     
          
                    </div>
     
             
            </div>
               :""}

               {
                   tip === "crypto"? 
                   <div  >



       <div className="MyTip ">
       <div className="Free">
          <div>
              <p className="Free_ExportTT Dop">Hourly</p>
          </div>
        
     </div>

     <div className="TimeDiv12 ">
                      <div>
                        <ul className="GameN">
                          <li className="NoGame">Trade No</li>
                          <li className="NoGame">CT/2022/10/7/1</li>
                        </ul>
                      </div>
                   <ul className="TimeDiv spaceMargiN">
                       <li>
                           PAIR
                       </li>
                       <li className="EngLan">
                        CONDITION
                       </li>
                       <li>
                         ENTRY
                       </li>
                       <li>
                           TAKE PROFIT
                       </li>
                       <li>
                           STOP LOSS
                       </li>
                   
                     
                     
                   </ul>
               </div> 

               <div className="bigManDiv">
                   <div className="FOR">
               <div className="Leaque tipHeightDiv">
                   
                

                   <div>
            <ul className="TimeDiv1 ADDTimeDbg1">
                <li>GBPUSD</li>
                <li className="EngLan">Long(buy)</li>
                <li>1.687894 </li>
                <li>1.896540</li>
                <li>1.567123</li>
             
                
            </ul>
        </div>
      
      
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult">
                <li className="Total_Odd ggLive">Take Profit: No of Pips</li>
               
                <li></li>
                <li></li>
                <li></li>
                <li className="tippo">60</li>
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult">
                <li className="Total_Odd ggLive">Stop Loss: No of Pips</li>
               
                <li></li>
                <li></li>
                <li></li>
                <li className="tippo">40</li>
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult gt1 ResultTip">
                <li className="Total_Odd">RESULT</li>
               
                <li></li>
                <li></li>
                <li>
                <div >
                  <form>
                    <div className="sped ">
                      <div>Lost</div>
                      <div className="greenDiv gt"></div>
                    </div>
                    </form>
                    </div>
                </li>
                <li className="tippo">
                  <div>
                  <form>
                    <div className="sped">
                      <div>Won</div>
                      <div className="greenDiv"></div>
                    </div>
                    </form>
                    </div>
                    </li>
                
            </ul>
        </div>
        
        
  
               </div>
            
              

            
               <div className="finding">GOOD LUCK</div>


               </div>
               </div>

            

     
               </div>

               <div className="MyTip MyTipUp MyPity">
       <div className="Free">
          <div>
              <p className="Free_ExportTT Dop">Daily</p>
          </div>
        
     </div>

     <div className="TimeDiv12 ">
                      <div>
                        <ul className="GameN">
                          <li className="NoGame">Trade No</li>
                          <li className="NoGame">CT/2022/10/7/2</li>
                        </ul>
                      </div>
                   <ul className="TimeDiv spaceMargiN">
                       <li>
                           PAIR
                       </li>
                       <li className="EngLan">
                        CONDITION
                       </li>
                       <li>
                         ENTRY
                       </li>
                       <li>
                           TAKE PROFIT
                       </li>
                       <li>
                           STOP LOSS
                       </li>
                   
                     
                     
                   </ul>
               </div> 

               <div className="bigManDiv">
                   <div className="FOR">
               <div className="Leaque tipHeightDiv">
                   
                

                   <div>
            <ul className="TimeDiv1 ADDTimeDbg1">
                <li>GBPUSD</li>
                <li className="EngLan">Long(buy)</li>
                <li>1.687894 </li>
                <li>1.896540</li>
                <li>1.567123</li>
             
                
            </ul>
        </div>
      
      
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult">
                <li className="Total_Odd ggLive">Take Profit: No of Pips</li>
               
                <li></li>
                <li></li>
                <li></li>
                <li className="tippo">60</li>
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult">
                <li className="Total_Odd ggl
                live">Stop Loss: No of Pips</li>
               
                <li></li>
                <li></li>
                <li></li>
                <li className="tippo">40</li>
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult gt1 ResultTip">
                <li className="Total_Odd">RESULT</li>
               
                <li></li>
                <li></li>
                <li>
                <div >
                  <form>
                    <div className="sped ">
                      <div>Lost</div>
                      <div className="greenDiv gt"></div>
                    </div>
                    </form>
                    </div>
                </li>
                <li className="tippo">
                  <div>
                  <form>
                    <div className="sped">
                      <div>Won</div>
                      <div className="greenDiv"></div>
                    </div>
                    </form>
                    </div>
                    </li>
                
            </ul>
        </div>
        
        
  
               </div>
            
              

            
               <div className="finding">GOOD LUCK</div>


               </div>
               </div>

            

     
               </div>

               {/* <div className="MyTip MyTipUp MyPity">
       <div className="Free">
          <div>
              <p className="Free_ExportTT Dop">Daily</p>
          </div>
        
     </div>

     <div className="TimeDiv12 ">
                      <div>
                        <ul className="GameN">
                          <li className="NoGame">Trade No</li>
                          <li className="NoGame">CT/2022/10/7/3</li>
                        </ul>
                      </div>
                   <ul className="TimeDiv spaceMargiN">
                       <li>
                           PAIR
                       </li>
                       <li className="EngLan">
                        CONDITION
                       </li>
                       <li>
                         ENTRY
                       </li>
                       <li>
                           TAKE PROFIT
                       </li>
                       <li>
                           STOP LOSS
                       </li>
                   
                     
                     
                   </ul>
               </div> 

               <div className="bigManDiv">
                   <div className="FOR">
               <div className="Leaque tipHeightDiv">
                   
                

                   <div>
            <ul className="TimeDiv1 ADDTimeDbg1">
                <li>GBPUSD</li>
                <li className="EngLan">Long(buy)</li>
                <li>1.687894 </li>
                <li>1.896540</li>
                <li>1.567123</li>
             
                
            </ul>
        </div>
      
      
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult">
                <li className="Total_Odd ggLive">Take Profit: No of Pips</li>
               
                <li></li>
                <li></li>
                <li></li>
                <li className="tippo">60</li>
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult">
                <li className="Total_Odd ggLive">Stop Loss: No of Pips</li>
               
                <li></li>
                <li></li>
                <li></li>
                <li className="tippo">40</li>
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult gt1 ResultTip">
                <li className="Total_Odd">RESULT</li>
               
                <li></li>
                <li></li>
                <li>
                <div >
                  <form>
                    <div className="sped ">
                      <div>Lost</div>
                      <div className="greenDiv gt"></div>
                    </div>
                    </form>
                    </div>
                </li>
                <li className="tippo">
                  <div>
                  <form>
                    <div className="sped">
                      <div>Won</div>
                      <div className="greenDiv"></div>
                    </div>
                    </form>
                    </div>
                    </li>
                
            </ul>
        </div>
        
        
  
               </div>
            
              

            
               <div className="finding">GOOD LUCK</div>


               </div>
               </div>

            

     
               </div> */}

               <div className="MyTip">
       <div className="Free">
          <div>
              <p className="Free_ExportTT Dop">Weekly</p>
          </div>
       
     </div>

     <div className="TimeDiv12 ">
     <div>
                        <ul className="GameN">
                          <li className="NoGame">Trade No</li>
                          <li className="NoGame">CT/2022/10/7/1</li>
                        </ul>
                      </div>
                   <ul className="TimeDiv spaceMargiN">
                       <li>
                           PAIR
                       </li>
                       <li className="EngLan">
                        CONDITION
                       </li>
                       <li>
                         ENTRY
                       </li>
                       <li>
                           TRADE PROFIT
                       </li>
                       <li>
                           STOP LOSS
                       </li>
                  
                     
                     
                   </ul>
               </div> 

               <div className="bigManDiv">
                   <div className="FOR">
               <div className="Leaque tipHeightDiv">
                   
                

                   <div>
            <ul className="TimeDiv1 ADDTimeDbg1">
                <li>GBPUSD</li>
                <li className="EngLan">Long (Buy)</li>
                <li>1.66678</li>
                <li>1.86753</li>
                <li>1.54321</li>
              
                
            </ul>
        </div>
        
       
       
       
       
        
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult">
                <li className="Total_Odd ggLive">Take Profit: No of Pips</li>
                
                <li></li>
                <li></li>
                <li></li>
                <li className="tippo">800</li>
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult">
                <li className="Total_Odd ggLive">Stop Loss: No of Pips</li>
                
                <li></li>
                <li></li>
                <li></li>
                <li className="tippo">60</li>
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult gt1 ResultTip">
                <li className="Total_Odd">RESULT</li>
               
                <li></li>
                <li></li>
                <li>
                <div >
                  <form>
                    <div className="sped ">
                      <div>Lost</div>
                      <div className="greenDiv gt"></div>
                    </div>
                    </form>
                    </div>
                </li>
                <li className="tippo">
                  <div>
                  <form>
                    <div className="sped">
                      <div>Won</div>
                      <div className="greenDiv"></div>
                    </div>
                    </form>
                    </div>
                    </li>
                
            </ul>
        </div>
        
        
  
               </div>

            
            
             
               <div className="finding">GOOD LUCK</div>

               <div className="pays">
                 <div className="Clas">Warning</div>
                 <p className="domt">Don't be a Gambler,Be an Investor. </p>
                 <p className="riskin">Do not risk more than what you can bear.<span className="eachG">We recommend you risk bewteen <span className="ifiy">1-2% </span>of your Capital on each Trade.</span></p>
               </div>

               </div>
               </div>

     
               </div>

            
  </div>
                   :""
               }

{
                   tip === "binary"? 
                   <div  >



       <div className="MyTip ">
      

     <div className="TimeDiv12 ">
                      <div>
                        <ul className="GameN kim">
                          <li className="NoGame">Trade No :</li>
                          <li className="NoGame">BN/2022/10/7/1</li>
                        </ul>
                      </div>
                      <div>
                        <ul className="GameN">
                          <li className="NoGame">Market Type :</li>
                          <li className="NoGame">Forex</li>
                        </ul>
                      </div>
                   <ul className="TimeDiv spaceMargiN">
                       <li>
                           PAIR
                       </li>
                       <li className="EngLan">
                        CONDITION
                       </li>
                      
                       
                       
                   
                     
                     
                   </ul>
               </div> 

               <div className="bigManDiv">
                   <div className="FOR">
               <div className="Leaque tipHeightDiv">
                   
                

                   <div>
            <ul className="TimeDiv1 ADDTimeDbg1">
                <li>GBPUSD</li>
                <li className="EngLan">Buy(Cell)</li>
                
             
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1">
                <li>Expiration Time</li>
                <li className="EngLan">30 Minutes</li>
                
             
                
            </ul>
        </div>
      
      
  
       
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult gt1 ResultTip">
                <li className="Total_Odd">RESULT</li>
               
                <li></li>
                <li></li>
                <li>
                <div >
                  <form>
                    <div className="sped ">
                      <div>Lost</div>
                      <div className="greenDiv gt"></div>
                    </div>
                    </form>
                    </div>
                </li>
                <li className="tippo">
                  <div>
                  <form>
                    <div className="sped">
                      <div>Won</div>
                      <div className="greenDiv"></div>
                    </div>
                    </form>
                    </div>
                    </li>
                
            </ul>
        </div>
        
        
  
               </div>
            
              

            
               <div className="finding">GOOD LUCK</div>


               </div>
               </div>

            

     
               </div>

         
            

          

            
  </div>
                   :""
               }

               <Footer/>
  </div>
    )
}
export default Mytip;