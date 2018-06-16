import React from "react";
import "./Header.css";

const Header = props => (
    <div className="header">{props.children}
        <div className="jumbotron">
            <h1 className="jumboText">Daedric Prince Memory Game!</h1> 
            <p className="jumboSmall">Click on an image to earn points, but don't click the same image twice!</p> 
        </div>
    </div>
);

export default Header;