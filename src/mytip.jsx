import React,{useState} from "react"
import "./style/mytip.css"
import { Link} from "react-router-dom";
import Footer from "./footer"



const Mytip =()=>{

    const [register,setRegister] = useState(false)


       const [tip,setTip] = useState("Tip")
   
       const forexChange =()=>{
           setTip("forex")
       }
       const cryptoChange = ()=>{
           setTip('crypto')
       }

    return(
   <div className="Mysee" style={{ backgroundImage: "linear-gradient(to right, rgb(106 116 167 / 34%), rgb(119 135 182 / 95%))"}} >

        
<div className="Sports23 MyTipUp">
             <div className="sportsAt people2" onClick ={()=>setTip("Tip")}>Sports</div>
             <div className="sportsAt people2" onClick ={forexChange}>Forex</div>
             <div className="sportsAt people2" onClick={cryptoChange}>Cryptocurrency</div>
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
                   
                

                   <div>
            <ul className="TimeDiv1 ADDTimeDbg1">
                <li>2:00</li>
                <li className="EngLan">England</li>
                <li>Ac Roma vs Nigeria </li>
                <li>X2</li>
                <li>1.34</li>
             
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1">
                <li>2:00</li>
                <li className="EngLan">England</li>
                <li>Ac Roma vs Nigeria </li>
                <li>X2</li>
                <li>1.34</li>
             
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1">
                <li>2:00</li>
                <li className="EngLan">England</li>
                <li>Ac Roma vs Nigeria </li>
                <li>X2</li>
                <li>1.34</li>
           
                
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
                   
                

                   <div>
            <ul className="TimeDiv1 ADDTimeDbg1">
                <li>2:00</li>
                <li className="EngLan">England</li>
                <li>Ac Roma vs Nigeria </li>
                <li>X2</li>
                <li>1.34</li>
              
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1">
                <li>2:00</li>
                <li className="EngLan">England</li>
                <li>Ac Roma vs Nigeria </li>
                <li>X2</li>
                <li>1.34</li>
          
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1">
                <li>2:00</li>
                <li className="EngLan">England</li>
                <li>Ac Roma vs Nigeria </li>
                <li>X2</li>
                <li>1.34</li>
         
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1">
                <li>2:00</li>
                <li className="EngLan">England</li>
                <li>Ac Roma vs Nigeria </li>
                <li>X2</li>
                <li>1.34</li>
             
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1">
                <li>2:00</li>
                <li className="EngLan">England</li>
                <li>Ac Roma vs Nigeria </li>
                <li>X2</li>
                <li>1.34</li>
          
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1">
                <li>2:00</li>
                <li className="EngLan">England</li>
                <li>Ac Roma vs Nigeria </li>
                <li>X2</li>
                <li>1.34</li>
           
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1">
                <li>2:00</li>
                <li className="EngLan">England</li>
                <li>Ac Roma vs Nigeria </li>
                <li>X2</li>
                <li>1.34</li>
            
                
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
                   <p className="Free_ExportTT Dop">Daily</p>
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
                 <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult">
                     <li className="Total_Odd">Take Profit: No of Pips</li>
                    
                     <li></li>
                     <li></li>
                     <li></li>
                     <li className="tippo">60</li>
                     
                 </ul>
             </div>
             <div>
                 <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult">
                     <li className="Total_Odd">Stop Loss: No of Pips</li>
                    
                     <li></li>
                     <li></li>
                     <li></li>
                     <li className="tippo">40</li>
                     
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
                 <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult">
                     <li className="Total_Odd">Take Profit: No of Pips</li>
                    
                     <li></li>
                     <li></li>
                     <li></li>
                     <li className="tippo">60</li>
                     
                 </ul>
             </div>
             <div>
                 <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult">
                     <li className="Total_Odd">Stop Loss: No of Pips</li>
                    
                     <li></li>
                     <li></li>
                     <li></li>
                     <li className="tippo">40</li>
                     
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
                 <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult">
                     <li className="Total_Odd">Take Profit: No of Pips</li>
                    
                     <li></li>
                     <li></li>
                     <li></li>
                     <li className="tippo">60</li>
                     
                 </ul>
             </div>
             <div>
                 <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult">
                     <li className="Total_Odd">Stop Loss: No of Pips</li>
                    
                     <li></li>
                     <li></li>
                     <li></li>
                     <li className="tippo">40</li>
                     
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
                 
                   
     
                 
                    <div className="finding">GOOD LUCK</div>
     
     
                    </div>
                    </div>
     
                 
     
          
                    </div>
     
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
                 <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult">
                     <li className="Total_Odd">Take Profit: No of Pips</li>
                     
                     <li></li>
                     <li></li>
                     <li></li>
                     <li className="tippo">800</li>
                     
                 </ul>
             </div>
             <div>
                 <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult">
                     <li className="Total_Odd">Stop Loss: No of Pips</li>
                     
                     <li></li>
                     <li></li>
                     <li></li>
                     <li className="tippo">60</li>
                     
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
              <p className="Free_ExportTT Dop">Daily</p>
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
                <li className="Total_Odd">Take Profit: No of Pips</li>
               
                <li></li>
                <li></li>
                <li></li>
                <li className="tippo">60</li>
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult">
                <li className="Total_Odd">Stop Loss: No of Pips</li>
               
                <li></li>
                <li></li>
                <li></li>
                <li className="tippo">40</li>
                
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
                <li className="Total_Odd">Take Profit: No of Pips</li>
               
                <li></li>
                <li></li>
                <li></li>
                <li className="tippo">60</li>
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult">
                <li className="Total_Odd">Stop Loss: No of Pips</li>
               
                <li></li>
                <li></li>
                <li></li>
                <li className="tippo">40</li>
                
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
                <li className="Total_Odd">Take Profit: No of Pips</li>
               
                <li></li>
                <li></li>
                <li></li>
                <li className="tippo">60</li>
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult">
                <li className="Total_Odd">Stop Loss: No of Pips</li>
               
                <li></li>
                <li></li>
                <li></li>
                <li className="tippo">40</li>
                
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
            
              

            
               <div className="finding">GOOD LUCK</div>


               </div>
               </div>

            

     
               </div>

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
                <li className="Total_Odd">Take Profit: No of Pips</li>
                
                <li></li>
                <li></li>
                <li></li>
                <li className="tippo">800</li>
                
            </ul>
        </div>
        <div>
            <ul className="TimeDiv1 ADDTimeDbg1 TatotalResult">
                <li className="Total_Odd">Stop Loss: No of Pips</li>
                
                <li></li>
                <li></li>
                <li></li>
                <li className="tippo">60</li>
                
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

               <Footer/>
  </div>
    )
}
export default Mytip;