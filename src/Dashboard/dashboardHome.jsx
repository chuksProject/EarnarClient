import React ,{useState}from 'react'
import "../style/dashboardStyles/dashboardHome.css"
import Demo from "./dashboardHome1"
import Demo1 from "./dashboardSports"
import Demo2 from "./dashboardPostResult"
import Demo3 from "./dashboardUser"
import Demo4 from "./dashboardFunding"
import Demo5 from "./dashboardDeleteUser"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableColumns,faEnvelopesBulk,faSquarePollVertical,faTrash,faUsers,faMoneyBill1Wave,faGear} from '@fortawesome/free-solid-svg-icons'

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
                    <li onClick={()=>setHome(<Demo/>)}> <div className="Homdash"><FontAwesomeIcon icon={faTableColumns} className="iconDash" /> <span className="dashboardIcon">Dashboard</span></div></li>
                    <li onClick={()=>setHome(<Demo1/>)}>
                    <div className="Homdash"><FontAwesomeIcon icon={faEnvelopesBulk} className="iconDash" /> <span className="dashboardIcon">Post Tip</span></div></li>
                    <li onClick={()=>setHome(<Demo2/>)}>
                    <div className="Homdash"><FontAwesomeIcon icon={faSquarePollVertical} className="iconDash" /> <span className="dashboardIcon">Post Result</span></div></li>
                    <li onClick={chang}> <div className="Homdash"><FontAwesomeIcon icon={faTrash} className="iconDash" /> <span className="dashboardIcon"> Delete Post</span></div></li>
                    <li onClick={()=>setHome(<Demo3/>)}><div className="Homdash"><FontAwesomeIcon icon={faUsers} className="iconDash" /> <span className="dashboardIcon"> Users</span></div></li>
                    <li onClick={()=>setHome(<Demo4/>)}><div className="Homdash"><FontAwesomeIcon icon={faMoneyBill1Wave} className="iconDash" /> <span className="dashboardIcon">Funding</span></div></li>
                    <li><div className="Homdash"><FontAwesomeIcon icon={faMoneyBill1Wave} className="iconDash" /> <span className="dashboardIcon">Bills</span></div></li>
                    <li><div className="Homdash"><FontAwesomeIcon icon={faGear} className="iconDash" /> <span className="dashboardIcon">Settings</span></div></li>
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