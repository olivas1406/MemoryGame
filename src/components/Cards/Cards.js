import React from "react";
import "./Cards.css";

const Cards = props => (
  <div className="card">
    <div className="img-container">
    <span onClick={() => props.guessFriend(props.id)} className="guess">
      <img alt={props.name} src={props.image} />
      </span>
    </div>
  </div>
);

export default Cards;