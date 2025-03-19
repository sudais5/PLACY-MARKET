

import React from "react";
import './header.css'
import cart from '../assets/cart.png'
function Header(){
    return(<>
    <div className="main-header">
        <div className="header-data">
           <div className="title">

           <h1>Find the <span>Perfect Space</span> <br />
           to Grow Your Business!</h1>
           <p>Whether you're a marketplace owner looking to rent out your commercial space or a <br /> 
           vendor searching for the perfect location to sell your products, we’ve got you covered.</p>
           </div>
            
            <div className="user-ssearch">
                    <div className="location">
                      <label htmlFor="location">Location</label>
                      <input type="text" placeholder="City or Area" />
                    </div>
                    <div className="price-range">
                        <label htmlFor="price range">Price Range</label>
                        <input type="number" placeholder="$100 " />
                    </div>
                    <div className="space-size">
                        <label htmlFor="Space Size">Space Size</label>
                        <input type="number" placeholder="100 - 500 sq ft"/>
                    </div>
                    <div><button className="search-btn">Search</button></div>
            </div>

        </div>
        <div className="cart-img">
            <img src={cart} alt="" />
        </div>
    </div>

    </>)
}

export default Header