import React from "react";
import "./Card.css";

const Card = props => (

    <div key={props.id} className="col-sm-4 ava-card" onClick={() => props.getAvatar(props.id)}>
        <p>{props.name}</p>
        <img src={props.image} />
    </div>


);


export default Card; 