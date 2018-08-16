import React, { Component } from "react";
import cards from "../../cards.json";
import Card from "../Card";
import Scoreboard from "../Scoreboard";
import Footer from "../Footer";


class Game extends Component {

    state = {

        avatar: cards,
        matches: 0,
        guesses: 0,
        matchedAvatar: 3
    };

    getAvatar = (id) => {


        if (id === this.state.matchedAvatar) {

            let randomID = Math.floor(Math.random() * this.state.avatar.length) + 1;
            this.setState({
                matches: this.state.matches + 1,
                matchedAvatar: randomID
            });


        } else {
            this.setState({
                guesses: this.state.guesses + 1
            });

        }
    }

    render() {
        return (
            <div className="container">
                <Scoreboard
                    matches={this.state.matches}
                    guesses={this.state.guesses}
                />

                <div className="row">
                    {this.state.avatar.map(avatar => (
                        <Card
                            key={avatar.id}
                            id={avatar.id}
                            name={avatar.name}
                            image={avatar.image}
                            getAvatar={this.getAvatar}
                        />
                    ))}
                </div>
                <Footer />
            </div >

        )
    }

}

export default Game;

