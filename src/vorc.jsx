import React, { useState } from "react";
import "./style/vorc.css";
import { Link } from "react-router-dom";
import Footer from "./footer";


const Vic = () => {
  const [register, setRegister] = useState(false);

  const [show1, setShow1] = useState("ultimate");
  const [show12, setShow12] = useState("");
  const [show13, setShow13] = useState("");
  const [show14, setShow14] = useState("");
  const [show15, setShow15] = useState("");
  const [show16, setShow16] = useState("");
  const [show17, setShow17] = useState("");
  const [show18, setShow18] = useState("");
  const [show19, setShow19] = useState("");
  const [show20, setShow20] = useState("");
 






 

const  display1 = ()=>{
  setShow12("backbet")
  setShow1("")
  setShow13("")
  setShow14("")
  setShow15("")
  setShow16("")
  setShow17("")
  setShow18("")
}
const  display2 = ()=>{
  setShow12("")
  setShow1("ultimate")
  setShow13("")
  setShow14("")
  setShow15("")
  setShow16("")
  setShow17("")
  setShow18("")
}
const  display3 = ()=>{
  setShow12("")
  setShow1("")
  setShow13("")
  setShow14("bonusBet")
  setShow15("")
  setShow16("")
  setShow17("")
  setShow18("")
}
const  display4 = ()=>{
  setShow12("")
  setShow1("")
  setShow13("")
  setShow14("")
  setShow15("dutching")
  setShow16("")
  setShow17("")
  setShow18("")
}
const  display5 = ()=>{
  setShow12("")
  setShow1("")
  setShow13("")
  setShow14("")
  setShow15("")
  setShow16("hedging")
  setShow17("")
  setShow18("")
}
const  display6 = ()=>{
  setShow12("")
  setShow1("")
  setShow13("")
  setShow14("")
  setShow15("")
  setShow16("")
  setShow17("")
  setShow18("staking")
}
const  display7 = ()=>{
  setShow12("")
  setShow1("")
  setShow13("")
  setShow14("")
  setShow15("")
  setShow16("")
  setShow17("lay")
  setShow18("")
}
const  display8 = ()=>{
  setShow12("")
  setShow1("")
  setShow13("odd")
  setShow14("")
  setShow15("")
  setShow16("")
  setShow17("")
  setShow18("")
}
const ppp =[ display1,display2,display3,display4,display5,display6,display7,display8 ]

  const shed = () => {
    document.getElementById("throwup").style.position = "relative";
  };

  const odds = [
    { id: 1, selection: "selection1", stake: "stake" },
    { id: 2, selection: "selection2", stake: "stake" },
    { id: 3, selection: "selection3", stake: "stake" },
    { id: 4, selection: "selection4", stake: "stake" },
    { id: 5, selection: "selection5", stake: "stake" },
    { id: 6, selection: "selection6", stake: "stake" },
    { id: 7, selection: "selection7", stake: "stake" },
    { id: 8, selection: "selection8", stake: "stake" },
    { id: 9, selection: "selection9", stake: "stake" },
    { id: 10, selection: "selection10", stake: "stake" },
    { id: 11, selection: "selection11", stake: "stake" },
    { id: 12, selection: "selection12", stake: "stake" },
    { id: 13, selection: "selection13", stake: "stake" },
    { id: 14, selection: "selection14", stake: "stake" },
  ];

  const odd1 = [
    { id: 1, selection: "selection1", stake: "stake" },
    { id: 2, selection: "selection2", stake: "stake" },
  ];

  return (
    <div className="Cover_BackgroundColor" style={{backgroundImage: "linear-gradient(to right, rgba(106, 116, 167, 0.34), rgba(119, 135, 182, 0.95))"}}>
  

      {/* mobile view */}
      


 



      <div className="Du">
        <ul className="Bet_CC">
          <li className="VirtualP" onClick={display2}>Ultimate Virtual Bet</li>
          <li className="VirtualP" onClick={display1}>2Chance Bet</li>
          <li className="VirtualP" >Arbitrage Bet </li>
          <li className="VirtualP" onClick={display3}>Bonus Bet</li>
          <li className="VirtualP" onClick={display4}>Dutching Bet</li>
          <li className="VirtualP" onClick={display5}>Hedging Bet</li>
          <li className="VirtualP" onClick={display6}>Staking Bet</li>
          <li className="VirtualP" onClick={display7}>Lay Bet</li>
          <li className="VirtualP" onClick={display8}>Odd Calculator</li>
        </ul>
      </div>
      <div className="Car">
      <select id="cars" name="cars" className="Car2" onChange={ppp}>
           <option value="volvo" onClick={display2}>Ultimate Virtual Bet</option>
           <option value="saab" onClick={display1}>2Chance Bet</option>
           <option value="fiat">Arbitrage Bet</option>
           <option value="audi" onClick={display3}>Bonus Bet</option>
           <option value="fiat" onClick={display4}>Dutching Bet</option>
           <option value="audi" onClick={display5}>Hedging Bet</option>
           <option value="fiat" onClick={display6}>Staking Bet</option>
           <option value="audi" onClick={display7}>lay Bet</option>
           <option value="fiat" onClick={display8}>Odd Calculator</option>
           
  </select>
      </div>
      {/* <fieldset>
    <legend>Personalia:</legend>
    <label for="fname">First name:</label><br/>
    <input type="text" id="fname" name="fname" value="John"/><br/>
    <label for="lname">Last name:</label><br/>
    <input type="text" id="lname" name="lname" value="Doe"/><br/><br/>
    <input type="submit" value="Submit"/>
  </fieldset> */}
 

      <div className="New_Month">

     {show1 === "ultimate"? 
        <div className="Enter_Expected_Profit">
          <p className="ExposeMass">Enter Expected profit</p>
          <div className="ExposeMass1">
            <div className="infu1">
              <span>Recommended :</span>
            </div>
            <div className="nfu2">
              <input type="text" placeholder="₦50" className="infu3" />
            </div>
            <div className="infu1">
              <span className="Editj">Edit</span>
            </div>
          </div>
          <div className="Team_Odd_Tip">
            <div className="Win_Loss">
              <p className="Win_Loss1">Team Odd</p>
              <div className="school24">
                <input type="text" placeholder="Enter odd" className="infu3" />
              </div>
              <div className="Team_Odd_Tip">
                <div className="school245">
                  <button className="Win_ButTON addWin">WIN</button>
                </div>
                <div className="school245">
                  <button className="Win_ButTON addWin12">LOSE</button>
                </div>
              </div>
              <div className="Total56">
                <div className="Wefe">Total : 15</div>
                <div className="Wefe">Total : 45</div>
              </div>
            </div>
            <div className="Win_Loss">
              <p className="Win_Loss1">Beting Amount</p>
              <div className="school24">
                <input
                  type="text"
                  placeholder="Enter amount"
                  className="infu3"
                />
              </div>
              <p className="InvestTotal">Total Investment</p>
              <p className="moneyInBank">₦50000</p>
            </div>
          </div>

          <div className="Streak_Loss">Lossing Streak To Capital Ratio</div>
          <div className="NumLosDiv addingOne">
            <div className="DivNumbering ">Number of losses</div>
            <div className="DivNumbering">Minimum Capital</div>
          </div>
          <div className="NumLosDiv">
            <div className="DivNumbering">0 - 5</div>
            <div className="DivNumbering">₦500</div>
          </div>
          <div className="NumLosDiv addingOne">
            <div className="DivNumbering">5 - 10</div>
            <div className="DivNumbering">₦4,500</div>
          </div>
          <div className="NumLosDiv">
            <div className="DivNumbering">10 - 15</div>
            <div className="DivNumbering">₦19,500</div>
          </div>
          <div className="NumLosDiv addingOne">
            <div className="DivNumbering">15 - 20</div>
            <div className="DivNumbering">₦49,500</div>
          </div>
          <div className="NumLosDiv">
            <div className="DivNumbering">20 - 25</div>
            <div className="DivNumbering">₦99,750</div>
          </div>
          <div className="NumLosDiv addingOne">
            <div className="DivNumbering">25 - 30</div>
            <div className="DivNumbering">₦190,750</div>
          </div>
          <div className="NumLosDiv">
            <div className="DivNumbering">30 - 35</div>
            <div className="DivNumbering">₦390,750</div>
          </div>
          <div className="NumLosDiv addingOne">
            <div className="DivNumbering">35 - 40</div>
            <div className="DivNumbering">₦990,750</div>
          </div>
        </div>
        :""}
        
        {show12 === "backbet" ? (
          <div className="backBet">
            <div className="betBackF">
              <div className="betBackFIN">
                <p className="marTop bottomMargin boldFont">Back Bet</p>
                <p className="bottomMargin1">Bet:</p>
                <div>
                  <form>
                    <input
                      type="number"
                      placeholder="5"
                      className="cityTouch"
                    />
                    <div className="bottomMargin">
                      {" "}
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label for="vehicle1"> Calculate</label>
                    </div>
                    <p className="bottomMargin1">Odds:(the higher)</p>
                    <input
                      type="number"
                      placeholder="5.6"
                      className="cityTouch"
                    />
                  </form>
                </div>
              </div>
              <div className="betBackFIN">
                <p className="marTop bottomMargin boldFont">Lay Bet</p>
                <p className="bottomMargin1">Bet:</p>
                <div>
                  <form>
                    <input
                      type="number"
                      placeholder="78"
                      className="cityTouch"
                    />
                    <div className="bottomMargin">
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label for="vehicle1"> Calculate</label>
                    </div>
                    <p className="bottomMargin1">Odds:(the higher)</p>
                    <input
                      type="number"
                      placeholder="16"
                      className="cityTouch"
                    />
                    <p className="bottomMargin1">Commission: %</p>
                    <input
                      type="number"
                      placeholder="0"
                      className="cityTouch"
                    />
                    <p>Total bet:22.5</p>
                  </form>
                </div>
              </div>
            </div>

            <div className="betTotalDiv">
              <div className="ratesAt">
                <p className="boldFont">Profit Breakdown</p>
                <p>
                  <span className="bolding">Rate :</span>155.45
                </p>
                <p>
                  {" "}
                  <span className="bolding">Total bet :</span>22.45e
                </p>
              </div>
              <div>
                <table>
                  <tr>
                    <th></th>
                    <th>Back</th>
                    <th>Lay</th>
                    <th></th>
                    <th>Total</th>
                    <th>Profits</th>
                  </tr>
                  <tr>
                    <td>If Back Bet wins</td>
                    <td>+28$</td>
                    <td>-17.5$</td>
                    <td>=</td>
                    <td>+10.5$</td>
                    <td>+5.5$</td>
                  </tr>
                  <tr>
                    <td>If Lay Bet wins</td>
                    <td>+28$</td>
                    <td>-17.5$</td>
                    <td>=</td>
                    <td>+10.5$</td>
                    <td>+5.5$</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}


    {show13 === "odd"? 
      <div>
        <div className="backBet diviveNax">
          <div className="DeciFac">Decimal to Fraction</div>
          <div className="FracDeci">
            <form>
              <input
                type="number"
                placeholder="odd eg 2.5* "
                className="deciNum_Input"
              />

              <div className="ButtonShift">
                <div className="Deci_DivButton">
                  <button className="calB">Calculator</button>
                  <button className="calB">Clear</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="backBet ">
          <div className="DeciFac">Fraction to Decimal</div>
          <div className="FracDeci">
            <form>
              <div className="ChangeFracDi">
                <div className="toty">
                  <input type="number" placeholder=" " className="AMQ" />
                </div>
                <div className="divide">/</div>
                <div className="toty">
                  {" "}
                  <input type="number" placeholder="" className="AMQ" />
                </div>
              </div>

              <div className="ButtonShift">
                <div className="Deci_DivButton">
                  <button className="calB">Calculator</button>
                  <button className="calB">Clear</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        </div>
    :""}

     {show14 === "bonusBet"? 
        <div className="backBet ">
          <div className="DeciFac">Bonus Bet</div>
          <div className="FracDeci">
            <form>
              <div className="ChangeFracDi">
                <div className="outYre2">
                  <label className="" id="">
                    Bonus Bet
                  </label>
                  <input type="number" placeholder=" " className="AMQ lin" />
                </div>
                <div className="outYre2">
                  <label className="" id="">
                    Outcome 1
                  </label>
                  <input type="number" placeholder=" " className="AMQ lin" />
                </div>

                <div className="outYre2">
                  <label className="" id="">
                    Odds
                  </label>
                  <input type="number" placeholder=" " className="AMQ lin" />
                </div>
              </div>
              <div className="ChangeFracDi">
                <div className="outYre2"></div>
                <div className="outYre2">
                  <label className="" id="">
                    Outcome 2
                  </label>
                  <input type="number" placeholder=" " className="AMQ lin" />
                </div>

                <div className="outYre2">
                  <label className="" id="">
                    Odds
                  </label>
                  <input type="number" placeholder=" " className="AMQ lin" />
                </div>
              </div>

              <div className="ButtonShift">
                <div className="Deci_DivButton">
                  <button className="calB">Calculator</button>
                  <button className="calB">Clear</button>
                </div>
              </div>
            </form>
          </div>
        </div>
       :""}


     { show15 === "dutching"? 
        <div className="backBet ">
          <div className="DeciFac">Dutching</div>
          <div className="FracDeci">
            <form>
              {odds.map((rate) => (
                <div className="foorms" key={rate.id}>
                  <div className="Stake_Dive">
                    <input
                      type="number"
                      placeholder={rate.selection}
                      className="foorms_input"
                    />
                  </div>
                  <div className="Stake_Dive">
                    <div className="Div_Stake">{rate.stake}</div>
                  </div>
                </div>
              ))}
              <div className="ButtonShift">
                <div className="Deci_DivButton">
                  <button className="calB">Calculator</button>
                  <button className="calB">Clear</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        :""}


      {show16 === "hedging"? 
        <div className="backBet ">
          <div className="DeciFac">Hedging</div>
          <div className="FracDeci">
            <form>
              {odd1.map((rate) => (
                <div className="foorms" key={rate.id}>
                  <div className="Stake_Dive">
                    <label>Back Stake</label>
                    <input
                      type="number"
                      placeholder={rate.selection}
                      className="foorms_input"
                    />
                  </div>
                  <div className="Stake_Dive">
                    <label>Back Price</label>
                    <input
                      type="number"
                      placeholder={rate.selection}
                      className="foorms_input"
                    />
                  </div>
                </div>
              ))}
              <div className="ButtonShift">
                <div className="Deci_DivButton">
                  <button className="calB">Calculator</button>
                  <button className="calB">Clear</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        :""}


      {show17 === "lay"? 
        <div className="backBet ">
          <div className="DeciFac">Lay</div>
          <div className="FracDeci">
            <form>
              <div className="ChangeFracDi">
                <div className="outYre2">
                  <label className="" id="">
                    {" "}
                    Bet Stake*
                  </label>
                  <input type="number" placeholder="" className="AMQ lin" />
                </div>
                <div className="outYre2">
                  <label className="" id="">
                    Back odds*
                  </label>
                  <input type="number" placeholder=" " className="AMQ lin " />
                </div>

                <div className="outYre2">
                  <label className="" id="">
                    Back Commission*
                  </label>
                  <input type="number" placeholder=" " className="AMQ lin" />
                </div>
              </div>
              <div className="ChangeFracDi">
                <div className="outYre2"></div>
                <div className="outYre2">
                  <label className="" id="">
                    Lay Odds*
                  </label>
                  <input type="number" placeholder=" " className="AMQ lin" />
                </div>

                <div className="outYre2">
                  <label className="" id="">
                    Lay Commission*
                  </label>
                  <input type="number" placeholder=" " className="AMQ lin" />
                </div>
              </div>

              <div className="ButtonShift">
                <div className="Deci_DivButton">
                  <button className="calB">Calculator</button>
                  <button className="calB">Clear</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        :""}
       {show18 === "staking"?
        <div className="backBet ">
          <div className="DeciFac">Staking</div>
          <div className="FracDeci">
            <form>
              <div className="foorms">
                <div className="Stake_Dive">
                  <label>Bank Balance</label>
                  <input
                    type="number"
                    placeholder=""
                    className="foorms_input"
                  />
                </div>
                <div className="Stake_Dive">
                  <label>Aggressive</label>
                  <input
                    type="number"
                    placeholder=""
                    className="foorms_input"
                  />
                </div>
              </div>

              <div className="ButtonShift">
                <div className="Deci_DivButton">
                  <button className="calB">Calculator</button>
                  <button className="calB">Clear</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        :""}
      </div>
      <div></div>

      <Footer />
    </div>
  );
};

export default Vic;
