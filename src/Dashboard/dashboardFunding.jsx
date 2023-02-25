import React from 'react'
import "../style/dashboardStyles/dashboardFunding.css"

const dashboardFunding = () => {
  return (
    <div>
        <div className="Sporthead">
            <div className="Sport12 credit">Credit User</div>
            <div className="Sport12 credit">Withdrawal Request</div>
        </div>

        <div className="GamEType">
            <div className="remey">
                <div>
                    <form>
                        <div className="timimg">
                        <input type="text" placeholder="Enter Username or Id Number" className="Infomat"/>
                        </div>
                    </form>
                </div>
                <div>
                <form>
                    <div className="timimg">
                        <input type="number" placeholder="Enter Amount" className="Infomat"/>
                    </div>
                    </form>
                </div>
            </div>
            <div className="Sport12 SeconT">Credit</div>
        </div>
    
    </div>
  )
}

export default dashboardFunding