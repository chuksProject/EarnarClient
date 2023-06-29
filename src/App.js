import React, {useContext} from "react"
import { BrowserRouter,Routes, Route,Navigate,Redirect } from "react-router-dom";

import Register from "./register"
import Login from "./login";
import WalletOverView  from "./walletOverview";
import Affliate from "./affliate"
import Profile from "./profile"
import Referral from "./referral";

import Mytip from "./mytip"
import Virc from "./vorc"
import About from "./about"
import Contact from "./contact"
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
import ForgotPassword from "./forgotpassword"
import OTP from "./otp"
import Success from "./success"
import ResetPassword from "./resetPassword"
import { AuthContext } from './context/authContext';


import Navbar from "./navbar"
import DashboardHome from "./Dashboard/dashboardHome"
// import { Link, useLocation } from "react-router-dom";

function App() {

  const { currentUser } = useContext(AuthContext);

  const tr = window.location.pathname;
  // const navigate = useLocation();
  return (
    <div>
       <BrowserRouter>
        {tr === "/dashboard" ? " " : <> <Navbar/>
       <Mobile/></>}
    
        <Routes>
           <Route path="/" element={<SampleHome/>} />
           <Route path="/register" element={<Register/>} />
           <Route path="/login" element={<Login/>} />
          {currentUser ? <Route path="/wallet" element={<WalletOverView />} /> : <Route path="/" element={<SampleHome />} />}   
           <Route path="/affliate" element={<Affliate/>} />
          {currentUser ? <Route path="/profile" element={<Profile />} /> : <Route path="/" element={<SampleHome />} /> } 
          {!currentUser ? <Route path="/forgotPassword" element={<ForgotPassword />} /> : <Route path="/" element={<SampleHome />} /> } 
          {!currentUser ? <Route path="/otp" element={<OTP />} /> : <Route path="/" element={<SampleHome />} />} 
          {!currentUser ? <Route path="/success" element={<Success />} /> : <Route path="/" element={<SampleHome />} />} 
          <Route path="/referral/:id" element={<Referral />} />
          {!currentUser ? <Route path="/resetpassword/:id" element={<ResetPassword />} /> : <Route path="/" element={<SampleHome />} />} 
           <Route path="/sport" element={<SportPage/>} />
           <Route path="/forex" element={<ForexPage/>} />
           <Route path="/cryptocurrency" element={<CryptoPage/>} />
            <Route path="/binary" element={<BinaryPage/>} />
          {currentUser ? <Route path="/tip" element={<Mytip />} /> : <Route path="/" element={<SampleHome />} /> } 
           <Route path="/betcalculator" element={<Virc/>} />
           <Route path="/about" element={<About/>} />
           <Route path="/premium" element={<Premium/>} />
           <Route path="/" element={<SampleHome/>} />
          	<Route path="*" element={<Navigate to="/" />} />
           <Route path="/dashboard" element={< DashboardHome />} />
           <Route path="/contact" element={< Contact />} />
           <Route path="/disclaimer" element={< Disclaimer/>} />
           <Route path="/termscondition" element={<TermsAndCondition  />} />
          
         
         
         
        </Routes>
       
       </BrowserRouter>
      
       </div>
 
  )

}

export default App;
