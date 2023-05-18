import React from 'react'
import "../style/home.css";
import "../style/dashboardStyles/dashboardUser.css"

const dashboardWithdrawal = () => {
  return (
    <div className="PHONENUM">
         <div className="TimeDiv12">
              <ul className="TimeDiv">
                <li>USERNAME</li>
                <li>BANK NAME</li>
                <li>BANK ACCOUNT</li>
                <li>AMOUNT</li>
                <li>STATUS</li>
               
              </ul>
            </div>
            <div className="bigManDiv">
              <div className="FOR">
                <div className="Leaque lagak">
                

                 
            

                  {/* {userInfo.map((user,id)=>( */}
                  <div >
                    <ul className="TimeDiv1 ADDTimeDbg work" >
                    <li>Samuel</li>
                      <li>09060243960</li>
                      <li>Chukwubuike Kingsley</li>
                      <li>Kingsley@gmail.com</li>
                      <li><div className="ApprovedButton"><span>Approved</span><div className="yesp">yes</div><div className="yesp Nop">NO</div>
                          </div></li>
                   
                    </ul>
                  </div>
                  {/* ))} */}


          
                </div>
              </div>
            </div>
           
      
    </div>
  )
}

export default dashboardWithdrawal