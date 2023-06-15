import React from 'react'
import "./style/hamburger.css"

const Hamburger= () => {
  return (
    <div>

         <nav>
      <div className="navbar">
        <div className="container nav-container">
          <div className="logo">
            <h1>Navbar</h1>
          </div>
          <div class="menu-items">
            <li><a href="#">Home</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">blogs</a></li>
            <li><a href="#">portfolio</a></li>
            <li><a href="#">contact</a></li>
          </div>
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>  
        </div>
      </div>
    </nav>
        
    </div>
  )
}

export default Hamburger;
