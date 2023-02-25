import React,{useState,useEffect} from 'react'
import "../style/home.css";
import "../style/dashboardStyles/dashboardUser.css"
import axios from "axios";

const DashboardUser = () => {
  const [userInfo,setUserInfo]=useState([])

  useEffect(()=>{
    const userInfom = async ()=>{
      try{
        const res = await axios.get('/post')
 
        setUserInfo(res.data)
      }catch(err){
        console.log(err)
      }
    }
    userInfom()

  },[])
  return (
    <div>

      <div className="userRo">
        <div className="helpin">
            <input type="text"  placeholder="Search for username,id,E-mail" className="forr"/>
          
        </div>
        <div className="helpin1"><div className="ikeli">Active</div></div>
        <div className="helpin1"><div className="Searchh">Search</div></div>
      </div>

         <div className="TimeDiv12">
              <ul className="TimeDiv">
                <li>S/N</li>
                <li>PHONENUMER</li>
                <li>USERNAME</li>
                <li>EMAIL</li>
                <li>STATUS</li>
                <li>ACTION</li>
              </ul>
            </div>
            <div className="bigManDiv">
              <div className="FOR">
                <div className="Leaque lagak">
                

                 
            

                  {userInfo.map((user,id)=>(
                  <div key={id}>
                    <ul className={(user.id %2 == 0)?"TimeDiv1 ADDTimeDbg":"TimeDiv1 ADDTimeDbg1"} >
                    <li>{user.id}</li>
                      <li>09060243960</li>
                      <li>{user.username}</li>
                      <li>{user.email}</li>
                      <li>Active</li>
                      <li>|||</li>
                    </ul>
                  </div>
                  ))}
          
                </div>
              </div>
            </div>
           
      
    </div>
  )
}

export default DashboardUser