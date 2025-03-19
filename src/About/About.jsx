import React from "react";
import './about.css'
import aboutImg from '../assets/about.png'
function About(){
    return(<>
    <div className="main-about">
        <div className="about-img">
        <img src={aboutImg} alt="" />
        </div>
        <div className="about-info">
            <h1>About Us</h1>
            <p>The Placy Market is designed to seamlessly connect marketplace owners, vendors, and franchise investors. Whether you're looking to rent out a commercial space, find the perfect location for your business, or invest in a franchise, our platform makes the process smooth and efficient. 

            We prioritize secure communication and privacy, allowing direct interactions only when a rental request is confirmed.Fully responsive on all devices, our platform is built to help businesses thrive in the most convenient and efficient way possible.</p>
        </div>
    </div>
    </>)
}

export default About