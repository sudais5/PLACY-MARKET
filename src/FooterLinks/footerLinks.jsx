
import React from 'react'
import './footerLinks.css'
import FacebookIcon from '../assets/facebookicon.png'
import Instagramicon from '../assets/instagramicon.png'
import LinkedinIcon from '../assets/linkedinicon.png'
import locationIcon from '../assets/locationicon.png'
import phoneIcon from '../assets/phoneicon.png'
import emailIcon from '../assets/emailicon.png'
function FooterLinks(){
    return(<>
    <div className="end-footer">
        <div className="main-footerLinks">
            <div className="footerlinks-data">
                <div className="footer-socialmedia-links">
                    <h1>Placy <span>Market</span></h1>
                    <p>This platform makes it easy for marketplace owners to rent out <br />
                    Their commercial spaces, vendors to find the perfect selling
                    <br />
                    Location, and investors to discover franchise opportunities.</p>
                    <div className="socialmedia-links">
                        <img src={Instagramicon} alt="" />
                        <img src={FacebookIcon} alt="" />
                        <img src={LinkedinIcon} alt="" />
                    </div>
                </div>
                <div className="footer-our-links">
                    <h1>Our Links</h1>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Listing</li>
                        <li>Blogs</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="footer-contactus">
                    <h1>Contact US</h1>
                    <div className="contactus-location">
                        <img src={locationIcon} alt="" />
                        <p>Maple Street Shopping Square, Houston</p>
                    </div>
                    <div className="contactus-phone-nummber">
                        <img src={phoneIcon} alt="" />
                        <p>+12 345 6789</p>
                    </div>
                    <div className="contactus-email">
                        <img src={emailIcon} alt="" />
                        <p>support@marketplaceplatform.com</p>
                    </div>
                </div>
            </div>
        </div>
             <hr />
            <div className="endrights">
            <p className='rights-end'>Copyright@2025. All Rights Reserved.</p>
    </div>
    </div>
    
    
    </>)
}

export default FooterLinks