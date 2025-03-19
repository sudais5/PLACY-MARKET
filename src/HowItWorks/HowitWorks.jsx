import React from "react";
import './howitworks.css'
import HowitworkImage from '../assets/howitworks.png'
import { FaSearch } from "react-icons/fa";
import sendicon from '../assets/sendicon.png'
import tagicon from '../assets/tagicon.png'
function Howitwork(){
    return(<>
    <div className="main-howitwork">
       <div className="info-howitwork"> <h1>How It Works</h1>
        <p>Sign up as a marketplace owner or vendor, browse available spaces, and send a
            <br />
             rental request. Once approved, connect with the owner to finalize the deal.</p>
             </div>

             <div className="guid-boxes">
                <div className="browse">
                    <h1>1</h1>
                    <a href="#"><FaSearch /></a>
                    <h5>Browse Available Spaces</h5>
                    <p> Search by location, price, and size.</p>

                </div>
                <div className="browse">
                    <h1>2</h1>
                    <img src={sendicon} alt="" />
                    <h5>Send a Rental Request</h5>
                    <p> Contact marketplace owners with your details.</p>

                </div>
                <div className="browse">
                    <h1>3</h1>
                    <img src={tagicon} alt="" />
                    <h5>Start Selling!</h5>
                    <p> Get approved and move in to start your business.</p>

                </div>
             </div>

             <div className="howiwork-image">
                <img src={HowitworkImage} alt="" />
             </div>
    </div>
    </>)
}

export default Howitwork