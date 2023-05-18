

import { BrowserRouter,Routes, Route,Navigate } from "react-router-dom";

import Register from "./register"
import Login from "./login";
import WalletOverView  from "./walletOverview";
import Affliate from "./affliate"
import Profile from "./profile"
import OddPredict from "./OddPredict"
import Agent from "./agent"
import Mytip from "./mytip"
// import Mytip1 from "./myTips1"
import Virc from "./vorc"
import About from "./about"
import Contact from "./contact"
import Refund from "./refund"
import TermsAndCondition from "./termsAndCondition"
import Disclaimer from "./disclaimer"
import "./App.css"
import Mobile from "./mobileheader"
import SampleHome from "./home2"

import Premium from "./premium"
import SportPage from "./sportsPage"
import ForexPage from "./forexPage"
import CryptoPage from "./cryptoPage"
import BinaryPage from "./binarypage"
import Flutter from "./flutterwave"

import Navbar from "./navbar"
import DashboardHome from "./Dashboard/dashboardHome"
import Widthdrawal from "./Dashboard/dashboardWithdrawal"

function App() {
  return (
    <div>
       <BrowserRouter>
       <Navbar/>
       <Mobile/>
        <Routes>
           <Route path="/" element={<SampleHome/>} />
           <Route path="/register" element={<Register/>} />
           <Route path="/login" element={<Login/>} />
      
  
         
           <Route path="/wallet" element={<WalletOverView/>} />
           <Route path="/affliate" element={<Affliate/>} />
           <Route path="/profile" element={<Profile/>} />
           <Route path="/flu" element={<Flutter/>} />
           <Route path="/Odd" element={<OddPredict/>} />
          
           <Route path="/agent" element={<Agent/>} />
           <Route path="/sport" element={<SportPage/>} />
           <Route path="/forex" element={<ForexPage/>} />
           <Route path="/cryptocurrency" element={<CryptoPage/>} />
           <Route path="/binary" element={<BinaryPage/>} />
           <Route path="/tip" element={<Mytip />} />
           {/* <Route path="/atip" element={<Mytip1 />} /> */}
           <Route path="/betcalculator" element={<Virc/>} />
           <Route path="/about" element={<About/>} />
           <Route path="/premium" element={<Premium/>} />
           <Route path="/" element={<SampleHome/>} />
          	<Route path="*" element={<Navigate to="/" />} />
           <Route path="/dashboard" element={< DashboardHome />} />
           <Route path="/contact" element={< Contact />} />
           <Route path="/disclaimer" element={< Disclaimer/>} />
           <Route path="/termscondition" element={<TermsAndCondition  />} />
           <Route path="/refund" element={< Refund />} />
         
         
         
        </Routes>
       
       </BrowserRouter>
      
       </div>
 
  )

}

export default App;
