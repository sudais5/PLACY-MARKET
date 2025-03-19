import React, { useState, useEffect, useRef } from "react";
import './nav.css';

function Nav() {
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="main-nav" ref={navRef}>
                <div className="logo">
                    <h2>Placy <span>Market</span></h2>
                </div>

                {isMobile ? (
                    <>
                        <button className="menu-toggle" onClick={toggleMenu}>
                            ☰ 
                        </button>
                        {isMenuOpen && (
                            <div className="mobile-menu">
                                <nav>
                                    <ul>
                                        <li><a href="#">Find a space</a></li>
                                        <li><a href="#">List Your Space</a></li>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                    </ul>
                                </nav>
                                <div className="log-signup">
                                    <button className="login-btn">Login</button>
                                    <button className="signup-btn">Sign Up</button>
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        <div className="nav">
                            <nav>
                                <ul>
                                    <li><a href="#">Find a space</a></li>
                                    <li><a href="#">List Your Space</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="log-signup">
                            <button className="login-btn">Login</button>
                            <button className="signup-btn">Sign Up</button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default Nav;