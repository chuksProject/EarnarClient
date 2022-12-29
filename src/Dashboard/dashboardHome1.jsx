import React from 'react'
import "../style/dashboardStyles/dashboardHome.css"

const dashboardHome1 = () => {
  return (
    <div>
          <div className="poer">
                <div className="dashOverView" >
                    <div className="Total Users">
                        <p className="Userstext">Total Users</p>
                        <p className="UserNum">500,000</p>
                    </div>
                    <div className="Active Users"> 
                        <p className="Userstext">Active Users</p>
                        <p className="UserNum" >150,000</p>
                    </div>
                    <div className="Inactive Users">
                        <p className="Userstext">Inactive Users</p>
                        <p className="UserNum">350,000</p>
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
                    <div>
                        Chart Div
                    </div>
                </div>

    </div>
  )
}

export default dashboardHome1