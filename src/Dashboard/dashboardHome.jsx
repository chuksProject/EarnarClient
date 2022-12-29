import React ,{useState}from 'react'
import "../style/dashboardStyles/dashboardHome.css"
import Demo from "./dashboardHome1"
import Demo1 from "./dashboardSports"

const DashboardHome = () => {
    const [home,setHome] = useState(<Demo/>)
  return (
    <div className="dashboardHomeDivContainer">
        <div className="dashboardItem">
            <div className="menuDiv">
                <div className="poer">
                <div className="dashboardMegaMenu">
                <ul className="dashList">
                    <li>Dashboard</li>
                    <li onClick={()=>setHome(<Demo1/>)}>Post Tip</li>
                    <li>Post Result</li>
                    <li> Delete Post</li>
                    <li>Users</li>
                    <li>Funding</li>
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