import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Logo: React.FC = () => {
    return (
       
            <div className="top-section ">
                <img src="/Logo-Final.png" alt="logo" className="logo" />
                
                <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={40} color ="white"  />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={40} color ="white"  />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={40} color ="white"  />
                </a>
            
            
            </div>
         </div>
        
    )
}

export default Logo;