import React from "react";
import PropTypes from "prop-types";

export class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            score: 0
        };
        this.incrementScore = this.incrementScore.bind(this);
        this.decrementScore = this.decrementScore.bind(this);
    }

    incrementScore(event) {
        let playerId = this.props.id;
        this.props.goal(1, playerId);
    }

    decrementScore(event) {
        let player = this.props.id;
        this.props.goal(-1, player);
    }

    render() {
        return (
            <div className="player">
                <span classname="playerName">{this.props.player.name}</span>
                <button className="danger" onClick={this.decrementScore}>-</button>
                <span>{this.props.player.score}</span>
                <button className="primary" onClick={this.incrementScore}>+</button>
            </div>
        );
    }
}


Counter.propTypes = {
    player: PropTypes.object.isRequired
};