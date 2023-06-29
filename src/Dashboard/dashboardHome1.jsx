import React ,{useContext,useEffect,useState } from 'react'
import "../style/dashboardStyles/dashboardHome.css"
import { AuthContext } from '../context/authContext';
import axios from 'axios';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const DashboardHome1 = () => {
    const {currentUser} = useContext(AuthContext);

   
    const firstTime = new Date().getTime();
    const [registeredTime,setRegisteredTime]=useState(`${firstTime}`)
    const now = new Date().getTime();
    

    console.log(`${registeredTime}`)

     const [sap,setSap]=useState(null)
      const [sap1,setSap1]=useState(null)
       const [sap2,setSap2]=useState(null)

    useEffect(()=>{
        const fetchCount = async()=>{
            try{
   const res = await axios.get(`http://localhost:8080/api/post/count`)
    //  setSap(res.data)
     setSap(res.data[0].id_count)
     console.log(sap)
            }catch(err){
          console.log(err)
            }

        }
        fetchCount()
    },[sap])

  //   useEffect(()=>{
  //       const activeUserCount = async()=>{
  //           try{
  //  const res = await axios.get(`http://localhost:8080/api/user/active-user`)
  //   //  setSap(res.data)
  //    setSap1(res.data[0].activeUserCount)
  //    console.log(sap1)
  //           }catch(err){
  //         console.log(err)
  //           }

  //       }
  //       activeUserCount()
  //   },[sap1])

    useEffect(()=>{
        const activeUserCount1 = async()=>{
            try{
   const res = await axios.get(`/user/active-count`)
   
     setSap1(res.data)
     console.log(res.data)
            }catch(err){
          console.log(err)
            }

        }
        activeUserCount1()
    },[sap1])



     useEffect(()=>{
        const inActiveUserCount2 = async()=>{
            try{
   const res = await axios.get(`/user/inactive-count`)
   
     setSap2(res.data)
     console.log(res.data)
            }catch(err){
          console.log(err)
            }

        }
        inActiveUserCount2()
    },[sap2])

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];


      const changewith = 1580
        
      
   
  return (
    <div>
          <div className="poer">
                <div className="dashOverView" >
                    <div className="Total Users">
                        <p className="Userstext">Total Users</p>
                       <p className="UserNum">{sap}</p>
                    </div>
                    <div className="Active Users"> 
                        <p className="Userstext">Active Users</p>
                        <p className="UserNum" >{sap1}</p>
                    </div>
                    <div className="Inactive Users">
                        <p className="Userstext">Inactive Users</p>
                        <p className="UserNum">{sap2}</p>
                    </div>
                    </div>
            
                <div className="dashOverView totalBot">
                    <div className="Total Users">
                        <p className="Userstext1">Total Deposit</p>
                        <p className="UserNum1">N500,000,000</p>
                    </div>
                    <div className="Total Users">
                        <p className="Userstext1">Total Withdrawals</p>
                        <p className="UserNum1">N11,150,000</p>
                    </div>
                    <div className="Total Users">
                        <p className="Userstext1">Total Bill Spend</p>
                        <p className="UserNum1">N100,000</p>
                    </div>
                </div>
                </div>
                <div>
                    {/* <div>
                        Chart Div
                    </div> */}
                    <div className="ChartFArea">
                    
        <AreaChart
          overflowX="hidden"
          width={changewith}
          height={600}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 30,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#fff" fill="#fff" />
        </AreaChart>
     
                    </div>
    
                </div>

    </div>
  )
}

export default DashboardHome1