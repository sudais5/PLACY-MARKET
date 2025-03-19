import React from 'react';
import './footer.css';
import FooterBackground from '../assets/FooterBackground.png';
import FooterBackground1 from '../assets/FooterBackground 2.png';
const Footer = () => {
    return (
        <>
        <div className="main-footer">
             <img src={FooterBackground} alt="" className='first-footerImg'/>
           
            <div className="footer-data">
                <h1>Ready to Grow Your Business?</h1>
                <p>Sign up today and start connecting with the right <br />marketplace partners!</p>
                <div className='signup-footer'>
                    <input type="text" placeholder='Sign Up To Find a Marketplace' />
                    <button className="signup-footer-btn">Sign Up</button>
                </div>
            </div>
            <img src={FooterBackground1} className='second-footerImg' alt="" /> 
        </div>
        </>
    );
};

export default Footer