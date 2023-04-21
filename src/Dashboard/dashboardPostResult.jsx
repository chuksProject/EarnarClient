import React,{useState} from 'react'
import "../style/dashboardStyles/dashboardSport.css"
import axios from "axios"

const DashboardPostResult = () => {
    const [trade,setTrade]=useState("sports")
    const [err,setError]= useState(null)
    const [earned,setEarned] = useState(false)
    const [rest,setRest]= useState(null)
    const [lossed,setLossed] = useState(false)
    const [success,setSuccess] = useState('')
    const [notSuccessful,setNotSuccessful] = useState('')
  
    const [info,setInfo]=useState([])
    const [inputsIn,setInputsIn]=useState({
        gameNo:"",
        dailyProfit:"",
        earned:earned,
        lossed:lossed
      
    })

    const [inputsIn1,setInputsIn1]=useState({
        tradeNo:"",
        pair:"",
        condition:"",
        entryPoint:"",
        exitPoint:"",
        takeProfit:""
    })
    const [inputsIn2,setInputsIn2]=useState({
        tradeNo:"",
        pair:"",
        condition:"",
        entryPoint:"",
        exitPoint:"",
        takeProfit:""
    })
    const [inputsIn3,setInputsIn3]=useState({
        tradeNo:"",
        pair:"",
        condition:"",
        expireTime:"",
        profit:""
    })



    const handleChange = e =>{
        setInputsIn(prev =>({...prev,[e.target.name]:e.target.value || e.target.checked}))  
    }
    const handleChange1 = e =>{
        setInputsIn1(prev =>({...prev,[e.target.name]:e.target.value}))
    }
    const handleChange2 = e =>{
        setInputsIn2(prev =>({...prev,[e.target.name]:e.target.value}))
    }
    const handleChange3 = e =>{
        setInputsIn3(prev =>({...prev,[e.target.name]:e.target.value}))
    }

    const handleSumit1 = async e =>{
        e.preventDefault()
       try{
           if((inputsIn.gameNo === "")|| (inputsIn.dailyProfit==="")){
            setNotSuccessful('files not upload, please check input field') 
            setTimeout(() => {
                setNotSuccessful('')
              }, 5000);
           }
           else{
         await axios.post("/post/postResult",inputsIn)

         setSuccess('Succesful upload')
          setTimeout(() => {
            setSuccess('')
          }, 5000);
          setInputsIn({
            gameNo:"",
            dailyProfit:""
            
          
        })
    }
         
        
        // console.log(inputsIn)
       }catch(err){
        setError(err.response.data)
        
       }    
        }

        const handleSumit2 = async e =>{
            e.preventDefault()
           try{
             await axios.post("/post/postResultForex",inputsIn1)
             
            console.log(inputsIn1)
           }catch(err){
            setError(err.response.data)
            
           }    
            }

            const handleSumit3 = async e =>{
                e.preventDefault()
               try{
                 await axios.post("/post/postResultCrypto",inputsIn2)
                 
                console.log(inputsIn2)
               }catch(err){
                setError(err.response.data)
                
               }    
                }

                const handleSumit4 = async e =>{
                    e.preventDefault()
                   try{
                     await axios.post("/post/postResultBinary",inputsIn3)
                     
                    console.log(inputsIn3)
                   }catch(err){
                    setError(err.response.data)
                    
                   }    
                    }
        
        
    
    


  return (
    <div>
        <div className="coverPan">
      <div className="Sporthead for">
          <div className={trade === "sports"?"Sport12 packsa":"Sport12"} onClick={()=>setTrade("sports")}>Sports</div>
          <div className={trade === "forex"?"Sport12 packsa":"Sport12"}onClick={()=>
              setTrade("forex")
          }>Forex</div>
          <div className={trade === "crypto"?"Sport12 packsa":"Sport12"} onClick={()=>setTrade("crypto")}>Crypto</div>
          <div className={trade === "binary"?"Sport12 packsa":"Sport12"} onClick={()=>setTrade("binary")}>Binary</div>
      </div>
      </div>
      {trade === "sports" ?  
      <div className="GamEType">
          <div className="GamEType1">
              <div className="GamEType2">Game Type</div>
              <div className="GamEType3"></div>
          </div>
          <div className="GamEType1 daro">
              <div className="GamEType2">Game No</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" name="gameNo" onChange={handleChange} className="pade" value={inputsIn.gameNo}/></div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Daily Profit</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" className="pade" name="dailyProfit" onChange={handleChange}  value={inputsIn.dailyProfit}/></div>
          </div>
        
          {success && <div className="SuccessInfoM suc1">{success}</div>} 
          {notSuccessful && <div className="SuccessInfoM suc2">{notSuccessful}</div>}
          {err && <div className="SuccessInfoM suc2">{err}</div>}

          
       
       <div>

       </div>
            
       <div className="resultClass" >
           <div>
               <div className="resultCla">
                  <label className="ResultTa" for="earned">Earned:</label>
                 <div><input type="checkbox" id="earned" name="earned"  className="amm" onChange={handleChange}  /></div>
               </div>
           </div>
           <div>
               <div className="resultCla">
                 <label className="ResultTa" for="lossed">Lossed:</label>
                 <div><input type="checkbox" id="lossed" name="lossed"   className="amm" onChange={handleChange}  /></div>
               </div>
              
           </div>
       </div>

      
    
       
       <div className="opst" onClick={handleSumit1 }>Post</div>
       
       
      </div>
     : ""}

{trade === "forex"? 
      <div className="GamEType">
          <div className="GamEType1">
              <div className="GamEType2">Trade Type</div>
              <div className="GamEType3"></div>
          </div>
          <div className="GamEType1 daro">
              <div className="GamEType2">Trade No</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" className="pade" name="tradeNo" onChange={handleChange1}/></div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Pair</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" className="pade" name="pair" onChange={handleChange1}/></div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Condition</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" className="pade" name="condition" onChange={handleChange1}/></div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Entry Point</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" className="pade" name="entryPoint" onChange={handleChange1}/></div>
            
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Exit Point</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" className="pade" name="exitPoint" onChange={handleChange1}/></div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Take Profit</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" className="pade" name="takeProfit" onChange={handleChange1}/></div>
          </div>
   
     
          
          <div className="resultClass" >
           <div>
               <div className="resultCla">
                  <label className="ResultTa">Earned:</label>
                 <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className="amm"/></div>
               </div>
           </div>
           <div>
               <div className="resultCla">
                 <label className="ResultTa">Lossed:</label>
                 <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className="amm"/></div>
               </div>
           </div>
       </div>
      
       
       
       <div className="opst" onClick={handleSumit2}>Post</div>
     
       
      
      </div>
      :""}
      {trade === "crypto"? 
      <div className="GamEType">
          <div className="GamEType1">
              <div className="GamEType2">Trade Type</div>
              <div className="GamEType3"></div>
          </div>
          <div className="GamEType1 daro">
              <div className="GamEType2">Trade No</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" 
              name="tradeNo"
              className="pade" onChange={handleChange2}/></div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Pair</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" 
              name="pair"
              className="pade" onChange={handleChange2}/></div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Condition</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" 
              name="condition"
              className="pade" onChange={handleChange2}/></div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Entry Point</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" 
              name="entryPoint" className="pade" onChange={handleChange2}/></div>
            
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Exit Point</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" className="pade"
              name="exitPoint" onChange={handleChange2}/></div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Take Profit </div>
              <div className="GamEType3"><input type="text" placeholder="Enter" 
              name="takeProfit"
              className="pade" onChange={handleChange2}/></div>
          </div>
        
       <div className="resultClass" >
           <div>
               <div className="resultCla">
                  <label className="ResultTa">Earned:</label>
                 <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className="amm"/></div>
               </div>
           </div>
           <div>
               <div className="resultCla">
                 <label className="ResultTa">Lossed:</label>
                 <div ><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className="amm"/></div>
               </div>
           </div>
       </div>
       
       
       
       <div className="opst" onClick={handleSumit3}>Post</div>
       
      
      </div>
      :""}

{trade === "binary"? 
      <div className="GamEType">
          <div className="GamEType1">
              <div className="GamEType2">Trade Type</div>
              <div className="GamEType3"></div>
          </div>
          <div className="GamEType1 daro">
              <div className="GamEType2">Trade No</div>
              <div className="GamEType3"><input type="text" placeholder="Enter"
              name="tradeNo" 
              onChange={handleChange3}
              className="pade"/></div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Pair</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" 
              name="pair"
              onChange={handleChange3}className="pade"/></div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Condition</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" 
              onChange={handleChange3}
              name="condition"
              className="pade"/></div>
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Expire Time</div>
              <div className="GamEType3"><input type="text" placeholder="Enter" 
              name="expireTime"
              onChange={handleChange3}
              className="pade"/></div>
            
          </div>
          <div className="GamEType1">
              <div className="GamEType2">Profit</div>
              <div className="GamEType3"><input type="text" placeholder="Enter"
              name="profit"
              onChange={handleChange3} className="pade"/></div>
          </div>
     
        
       <div className="resultClass" >
           <div>
               <div className="resultCla">
                  <label className="ResultTa">Earned:</label>
                 <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className="amm"/></div>
               </div>
           </div>
           <div>
               <div className="resultCla">
                 <label className="ResultTa">Lossed:</label>
                 <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className="amm"/></div>
               </div>
           </div>
       </div>
       
       
       
       <div className="opst" onClick={handleSumit4}>Post</div>
       
      
      </div>
      :""}
     
  

    </div>
  )
}

export default DashboardPostResult;