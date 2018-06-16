import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <div className="navbar">{props.children}
        {/* <div className="col-4 navText">
            <h3 className="boldText">Clicky Game</h3>
        </div>
        <div className="col-4 navText borderDiv">
            <h3>Click An Image To Begin</h3>
        </div>
        <div className="col-4 navText">
            <h3>Score: {props.guesses} | Top Score: {props.bestScore}</h3>
        </div> */}
    </div>
);


export default Navbar;