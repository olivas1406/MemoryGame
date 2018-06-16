import React from "react";
import "./Cards.css";

const Cards = props => (
	<div onClick={() => props.guessedDaedra(props.id)} className="card">
		<div className="img-container">
      		<img alt={props.name} src={props.image} />
    	</div>
  </div>
);

export default Cards;