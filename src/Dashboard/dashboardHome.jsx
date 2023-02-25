import React ,{useState}from 'react'
import "../style/dashboardStyles/dashboardHome.css"
import Demo from "./dashboardHome1"
import Demo1 from "./dashboardSports"
import Demo2 from "./dashboardPostResult"
import Demo3 from "./dashboardUser"
import Demo4 from "./dashboardFunding"
import Demo5 from "./dashboardDeleteUser"

const DashboardHome = () => {
    const [home,setHome] = useState(<Demo/>)
    // const [colr,setColor]=useState("by")

    const chang =()=>{
        setHome(<Demo5/>)
        
    }
  return (
    <div className="dashboardHomeDivContainer">
        <div className="dashboardItem">
            <div className="menuDiv">
                <div className="poer">
                <div className="dashboardMegaMenu">
                <ul className="dashList">
                    <li onClick={()=>setHome(<Demo/>)}>Dashboard</li>
                    <li onClick={()=>setHome(<Demo1/>)}>Post Tip</li>
                    <li onClick={()=>setHome(<Demo2/>)}>Post Result</li>
                    <li onClick={chang}> Delete Post</li>
                    <li onClick={()=>setHome(<Demo3/>)}>Users</li>
                    <li onClick={()=>setHome(<Demo4/>)}>Funding</li>
                    <li>Bills</li>
                    <li>Settings</li>
                </ul>
                </div>
                </div>
            </div>
            <div className="itemDiv">
                <div className="base">
                    <div className="asanoha">
                {/* <Demo/> */}
                {home}
                </div>
                </div>
              
            </div>
        </div>
    </div>
  )
}

export default DashboardHome