import React from "react";
import "./Footer.css";

const Footer = props => (
    <div className="footer">{props.children}
        <div className="col-12 footerText">
            <p style={{float:'left'}}>Clicky Game!</p>
            <img src="./favicon.ico" className="image"></img>
        </div>
    </div>
);

export default Footer;