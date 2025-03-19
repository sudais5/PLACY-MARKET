
import React from "react";
import './lists.css'
import downtown from '../assets/downtown.png'
import location from '../assets/location.png'
import ft from '../assets/ft.png'
import home from '../assets/home.png'


function Lists(){
    return(<>
          <div className="main-lists">
            <div className="info-list">
                <h1>Featured Marketplace Listings</h1>
                <p>Explore top marketplace listings with verified spaces, detailed descriptions, and flexible rental options to suit your business needs.</p>
            </div>

            <div className="lists">
               <div className="lists-data">
              <div className="list-iamg-price">
               <div className="list-img">
                <img src={downtown} alt="" />
               </div>
               <div className="list-info">
                <h3>Downtown Shopping Center, <br />
                New York</h3>
                <p><span>$500/month</span></p>
               </div>
               </div>
               <div className="list-specs">
                <div className="list-specs-home">
                    <img src={home} alt="" />
                    <p>Fully Furnished</p>
                </div>
                <div className="list-specs-ft">
                    <img src={ft} alt="" />
                    <p>300 sq. ft.</p>
                </div>
                <div className="list-specs-location">
                    <img src={location} alt="" />
                    <p> Near Metro</p>
                </div>
               </div>
               <div className="list-viewList">
                <p>View Listing</p>
               </div>
               </div>
               
               <hr />
               
               <div className="lists-data">
              <div className="list-iamg-price">
               <div className="list-img">
                <img src={downtown} alt="" />
               </div>
               <div className="list-info">
                <h3>Downtown Shopping Center, <br />
                New York</h3>
                <p><span>$500/month</span></p>
               </div>
               </div>
               <div className="list-specs">
                <div className="list-specs-home">
                    <img src={home} alt="" />
                    <p>Fully Furnished</p>
                </div>
                <div className="list-specs-ft">
                    <img src={ft} alt="" />
                    <p>300 sq. ft.</p>
                </div>
                <div className="list-specs-location">
                    <img src={location} alt="" />
                    <p> Near Metro</p>
                </div>
               </div>
               <div className="list-viewList">
                <p>View Listing</p>
               </div>
               </div>
           
               <hr />
               
               <div className="lists-data">
              <div className="list-iamg-price">
               <div className="list-img">
                <img src={downtown} alt="" />
               </div>
               <div className="list-info">
                <h3>Downtown Shopping Center, <br />
                New York</h3>
                <p><span>$500/month</span></p>
               </div>
               </div>
               <div className="list-specs">
                <div className="list-specs-home">
                    <img src={home} alt="" />
                    <p>Fully Furnished</p>
                </div>
                <div className="list-specs-ft">
                    <img src={ft} alt="" />
                    <p>300 sq. ft.</p>
                </div>
                <div className="list-specs-location">
                    <img src={location} alt="" />
                    <p> Near Metro</p>
                </div>
               </div>
               <div className="list-viewList">
                <p>View Listing</p>
               </div>
               </div>
               <hr />
               <div className="viewMore-btn-box">
               <button className="viewMore-btn">View More</button>
               </div>
            </div>
            </div>  
    </>)
}

export default Lists