// import React from "react";
// import "./Navbar.css";

// const Navbar = props => (
//     <div>
//         <ul className="nav nav-bar nav-justified">
//             <li><a href="/">Clicky Game</a></li>
//             <li
//                 className={props.message.indexOf('incorrectly') !== -1 ? 
//                     "desc-incorrect" : 
//                     props.message.indexOf('correctly') !== -1 ?
//                         "desc-correct" :
//                         "desc-normal"}
//             >
//                 {props.message}
//             </li>
//             <li>Score: <span style={{color: "yellow"}}>{props.guesses}</span> | Top Score: {props.topScore}</li>
//         </ul>
//     </div>
// );

// export default Navbar;


import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <div className="navbar">{props.children}
        <div className="col-4 navText">
            <h3 className="boldText">Clicky Game</h3>
        </div>
        <div className="col-4 navText borderDiv">
            <h3>Click An Image To Begin</h3>
        </div>
        <div className="col-4 navText">
            <h3>Score: | Top Score: </h3>
        </div>
    </div>
);


export default Navbar;