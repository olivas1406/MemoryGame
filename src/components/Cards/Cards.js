import React from "react";
import "./Cards.css";

// const Cards = props => (
//   <div className="card">
//     <div className="img-container">
//     <span onClick={() => props.guessFriend(props.id)} className="guess">
//       <img alt={props.name} src={props.image} />
//       </span>
//     </div>
//   </div>
// );


const Cards = props => (
  <div className="card">
      <div className="img-container">
          <a onClick={() => props.pickedFriends(props.id)} 
              className={props.score === 0}
          >
              <img alt={props.name} src={props.image} />
          </a>
      </div>
  </div>
);

export default Cards;