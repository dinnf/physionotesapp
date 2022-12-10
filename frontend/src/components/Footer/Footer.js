import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="Footer">
            <h2 className="FooterTitle">PhysioNB</h2>
            <div className="Router">
                <span className="Routes">About</span>
                <span className="Routes">Contact</span>
            </div>
        </div>
    );
};

export default Footer;
