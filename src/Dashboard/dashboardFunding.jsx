import React from 'react'
import "../style/dashboardStyles/dashboardFunding.css"

const dashboardFunding = () => {
  return (
    <div>
        <div className="fortCredit">
        <div className="Sporthead headSport">
            <div className="Sport12 credit fort">Credit User</div>
            <div className="Sport12 credit fort">Withdrawal Request</div>
        </div>
        </div>

        <div className="GamEType">
            <div className="remey">
                <div className="TexT">
                    <form>
                        <div className="timimg">
                        <input type="text" placeholder="Enter Username or Id Number" className="Infomat"/>
                        </div>
                    </form>
                </div>
                <div className="TexT">
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