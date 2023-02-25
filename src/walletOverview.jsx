import React,{useState,useContext} from "react";
import "./style/walletOverView.css"
import { Link} from "react-router-dom";
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { AuthContext } from './context/authContext';

const WalletOverView =()=>{

    const [wallet,setWallet]=useState('wallets')
    const [subscription,setSubscription]=useState('')
    const [refferal,setRefferal]=useState('')
    const [modal,setModal]= useState(false)
    const [deposit,setDeposit]= useState("")
    const [withdraw,setWithdraw]= useState("")
    const [transfer,setTransfer]= useState("")
    const [pinAmount,setPinAmount]=useState("Enter Amount")
    const [move,setMove] = useState(true)
    const [active,setActive] = useState(true)
    const [register,setRegister] = useState(false)
    const [amount,setAmount] =useState("")
    const {currentUser} = useContext(AuthContext);



    const config = {
        public_key: 'FLWPUBK-b42771553f0c152c7a00ef070ececc77-X',
        tx_ref: Date.now(),
        amount: amount,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: `${currentUser?.email}`,
           phone_number: '070********',
          name: `${currentUser?.username}`,
        },
        customizations: {
          title: 'my Payment Title',
          description: 'Payment for items in cart',
          logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
      };
    
      const handleFlutterPayment = useFlutterwave(config);


    const setGo=()=>{
        setSubscription('going');
        setWallet("")
        setRefferal("")
    }
    const setGo1=()=>{
        setSubscription('');
        setWallet("wallets")
        setRefferal("")
    }
    const setGo2=()=>{
        setSubscription('');
        setWallet("")
        setRefferal("fort")
    }

    // const ModalFunction =()=>{
    //     setModal(!modal)
    // }
 const depositT =()=>{
     setDeposit('depositMe')
     setWithdraw('')
     setModal(!modal)
     setTransfer("")
 }
 const withdrawT =()=>{
    setWithdraw('withdrawMe')
    setDeposit('')
    setModal(!modal)
    setTransfer("")
}

const transferT =()=>{
    setWithdraw('')
    setDeposit('')
    setTransfer("transferMe")
    setModal(!modal)
}

const trig =()=>{
    setPinAmount("Enter Amount")
    setMove(false)
    setActive(!active)
}


    return(
        <div className="Parent_Over_File_Bg" style={{    backgroundImage: "linear-gradient(to right, rgba(106, 116, 167, 0.34), rgba(119, 135, 182, 0.95))",width:"100%",height:"100vh",paddingTop:"40px",paddingBottom:"10px"}}>



    <div className="WallForm">
            <div className="Wallet_P_Div Wallet_Up_Div">
                <div className="P_P">
                    <div className={wallet === "wallets" ?"overView gbg" : "overView" } onClick={setGo1}>Wallet Overview</div>
                    <div className={subscription === "going" ?"overView gbg" : "overView" }
                    onClick={setGo}>Subcription</div>
                    <div className={refferal === "fort" ?"overView gbg" : "overView" } onClick={setGo2}>My Referrals</div>
                </div>

                <p className="Status_Active">Account Status <span className="Actn">active</span></p>
                
                <div className="LikeSed">
              <div className="TREEH">
                  <div className="Main_WALL">
                      <div className="Firet">
                      <div className="Main_WALL1">
                          <p className="Is_KB">Main Wallet</p>
                          <p className="Is_KB1">₦5000.00</p>
                      </div>
                      <div className="Depost">
                          <p className="dep1 add1" onClick={ depositT}>Deposit</p>
                          <p className="dep1 add2" onClick={withdrawT}>Withdraw</p>
                      </div>
                      </div>
                  </div>
                  <div className="Main_WALL">
                      <div className="Main_WALL1">
                          <p className="Is_KB">Affliate Earning</p>
                          <p className="Is_KB1">₦50,000.00</p>
                      </div>
                      <div className="Trans" onClick={transferT}>Transfer</div>
                  </div>
                  <div className="Main_WALL">
                      <div >
                          <div className="With_upto">
                          <div className="Pay_Bills">Pay bills with upto 5% discount</div>
                          <div className="Data"> 
                            <div className="Betting1">
                                <div className="AIR_I">Airtime</div>
                                <div className="AIR_I">Data</div>
                                <div className="AIR_I">Betting</div>
                              </div>
                          </div>
                          </div>
                      </div>
                  </div>
              </div>
              </div>
              

           { wallet === "wallets"? 
             <div>
                 <p className="AllTrans"> All transanction</p>
                 <div>
                     <ul className="TYPE_DATE">
                         <li className="STaTus">Date</li>
                         <li className="STaTus">Type</li>
                         <li className="STaTus">Amount</li>
                         <li className="STaTus">Recipiant</li>
                         <li className="STaTus">Status</li>
                     </ul>
                 </div>
                <div className="DOPOPO">
                     <ul className="DopoR">
                         <li className="SuccessId">12-07-2022</li>
                         <li className="SuccessId">Deposit</li>
                         <li className="SuccessId">₦5000</li>
                         <li className="SuccessId">ID:00001</li>
                         <li className="SuccessId">Success</li>
                     </ul>
                 </div>

                 <div className="DOPOPO">
                     <ul className="DopoR">
                         <li className="SuccessId">12-07-2022</li>
                         <li className="SuccessId">Deposit</li>
                         <li className="SuccessId">₦5000</li>
                         <li className="SuccessId">ID:00001</li>
                         <li className="SuccessId">Success</li>
                     </ul>
                 </div>
                 <div className="DOPOPO">
                     <ul className="DopoR">
                         <li className="SuccessId">12-07-2022</li>
                         <li className="SuccessId">Deposit</li>
                         <li className="SuccessId">₦5000</li>
                         <li className="SuccessId">ID:00001</li>
                         <li className="SuccessId">Success</li>
                     </ul>
                 </div>
                 <div className="DOPOPO">
                     <ul className="DopoR">
                         <li className="SuccessId">12-07-2022</li>
                         <li className="SuccessId">Deposit</li>
                         <li className="SuccessId">₦5000</li>
                         <li className="SuccessId">ID:00001</li>
                         <li className="SuccessId">Success</li>
                     </ul>
                 </div>
             </div>
             :""}


           {subscription ==="going"? 
            <div> <div className="Silver_Weekly2">
                 <div className="Silver_Weekly">

                     <div className="Pack">Subcription Tip</div>
                     <div className="Access1">
                     <p className="AccessTo">Get Access to 2.0 Odds. </p>
                     <p className="AccessTo">Premium Tips for 7days</p>
                     <div className="Going1"><p className="Going">₦1,500.00</p></div>
                     </div>
                     <div className="NOWYY"><button className="BUbU" >Subcribe Now</button></div>
                 </div>

               

                

                 

             </div>
                
             <div className="InvestorBy">

             <p className="Ifum">Don't be a <span className="Gambmi">Gambler</span>, Be an <span className="VES">Investor</span>. <span className="Iam">We are <span className="VES">Investors</span> and we deliver 50-100% profits 95% of the time.</span> start investing with us today.</p>
                <div className="termsApp">Terms & Conditions Apply </div>


               

             </div></div>
             :""}

             {refferal === "fort" ? 
             <div className="ILOVEP">
                 <div className="AllTrans">
                      <div><span className="REEE">Total Number Refferal:</span> 250</div>
                      <div> <span className="REEE">Active:</span> 200</div>
                      <div><span className="REEE">Inactive:</span> 50</div>
                    </div>
                 <div>
                     <ul className="TYPE_DATE">
                         <li className="STaTus">Date</li>
                         <li className="STaTus">User ID</li>
                        
                         <li className="STaTus">Commission</li>
                         <li className="STaTus">Status</li>
                     </ul>
                 </div>
                <div className="DOPOPO">
                     <ul className="DopoR">
                         <li className="SuccessId">12-07-2022</li>
                         <li className="SuccessId">ID:0000023</li>
                       
                         <li className="SuccessId">₦6000.00</li>
                         <li className="SuccessId">Active</li>
                     </ul>
                 </div>

                 <div className="DOPOPO">
                     <ul className="DopoR">
                         <li className="SuccessId">12-07-2022</li>
                         <li className="SuccessId">ID:0000023</li>
                        
                         <li className="SuccessId">₦6000.00</li>
                         <li className="SuccessId">Active</li>
                     </ul>
                 </div>
                 <div className="DOPOPO asem">
                     <ul className="DopoR">
                         <li className="SuccessId">12-07-2022</li>
                         <li className="SuccessId">ID:0000023</li>
                        
                         <li className="SuccessId">₦6000.00</li>
                         <li className="SuccessId">Inactive</li>
                     </ul>
                 </div>
                 <div className="DOPOPO">
                     <ul className="DopoR">
                         <li className="SuccessId">12-07-2022</li>
                         <li className="SuccessId">ID:0000023</li>
                        
                         <li className="SuccessId">₦6000.00</li>
                         <li className="SuccessId">Active</li>
                     </ul>
                 </div>
             </div>
             :""}

            
            </div>
               

               {modal ? 
            <div>

            <div className="Deposit_Modal" onClick={()=>setModal(!modal)}>
            </div>
                <div className="Deposit_Modal_Div_Div">
                    {deposit === "depositMe" ? 
                    <div className="FirstDivFolder">
                    <div className="DepositY">Deposit</div>
                    <p className="AnyPay">Choose any convinient payment method you want.</p>
                    <div className="DivflutterWave">
                        <div className="Wave1">
                            <p className="PinW">Flutterwave Secured Payment.</p>
                            <div className="Wave2" onClick={trig}>
                                <p className="payWithY">Pay with</p>
                                <p className="CardBankTM">Card,Bank Transfer,Bank Deposit,USSD Code Mobile Money,Paga,Paypal</p>
                            </div>
                        </div>
                    
                    </div>
                    <form>
                        {/* {active? 
                        <div className="ProccedRent">
                            <input type="text" placeholder={pinAmount} className={move? "ProccedRent1":"ProccedRent1 addFine"} disabled/></div>
                            :<div className="ProccedRent">
                            <input type="text" placeholder={pinAmount} className={move? "ProccedRent1":"ProccedRent1 addFine"} /></div>
                            } */}

                        <div className="ProccedRent">
                            <input type="text" placeholder={pinAmount} className={move? "ProccedRent1":"ProccedRent1 addFine"} value={amount} onChange={(e)=>setAmount(e.target.value)}/></div>

                        <div className="MMMYE"   onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}>Proceed</div>
                    </form>
                    </div>
                    :" "}

                    {withdraw === 'withdrawMe' ? 
                    <div className="SecondDivFolder">
                        <p className="DepositY">Withdraw</p>
                        <p className="PinW">Available Balance</p>
                        <p className="WidrawMoney">₦2,000,000.00</p>
                        <form>
                            <div className="ProccedRent"><input type="text" placeholder="EnterAmount"
                            className="ProccedRent1" value={amount} onChange={(e)=>setAmount(e.target.value)}/></div>
                            <div className="MMMYE" onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}>Withdraw</div>
                            <p className="WithdrawTextIn">Note : All withdrawals are processed authomatically within 24hrs.</p>
                        </form>

                    </div>

                    : ""}

                    {transfer === "transferMe"? 
                    <div className="ThirdDivFolder">
                        <p className="DepositY">Transfer</p>
                        <p className="PinW">Affliaite Balance</p>
                        <p className="WidrawMoney">₦2,000,000.00</p>
                        <form>
                            <div className="ProccedRent"><input type="text" placeholder="EnterAmount"
                            className="ProccedRent1"
                            value={amount}
                            onChange={(e)=>setAmount(e.target.value)}/></div>
                            <div className="MMMYE" onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}>Proceed</div>
                            
                        </form>

                    </div>
                    :""}
                </div>

                <div>

                </div>
            </div>
           :"" }
            
            </div>
        </div>
    )
}

export default WalletOverView;