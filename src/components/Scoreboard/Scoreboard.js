import React from "react";
import "./Scoreboard.css";

const Scoreboard = props => (
    <div className="jumbotron">
        <h1 class="display-4">Avatar Match Game!</h1>
        <p class="lead">Match twice and up the ante!</p>
        <hr class="my-4" />
        <p>Avatar Matches: {props.matches} </p>
        <p>Avatar Guesses: {props.guesses}</p>
    </div>


);


export default Scoreboard; 