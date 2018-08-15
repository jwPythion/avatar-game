import React, { Component } from "react";
import cards from "../../cards.json";


class Game extends Component {

    state = {

        avatar: cards
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.avatar.map(avatar => (
                        <div className="col-sm-4 ava-card">
                            <p>{avatar.name}</p>
                            <img src={avatar.image} />
                        </div>

                    ))}
                </div>
            </div>

        )
    }

}

export default Game;

