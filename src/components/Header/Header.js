import React from "react";
import "./Header.css";

const Header = props => (
    <div className="header">{props.children}
        <div className="jumbotron">
            <h1 className="jumboText">Clicky Game!</h1> 
            <p className="jumboSmall">Click on an image to earn points, but don't click on any more than once!</p> 
        </div>
    </div>
);

export default Header;