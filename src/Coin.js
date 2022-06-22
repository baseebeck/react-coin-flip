import React, { Component } from 'react';
import './Coin.css';
import { choice } from './helpers';
import CoinImg from './CoinImg';

class Coin extends Component {
    static defaultProps = {
        coins: [
            { side: 'heads', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/2017-D_Roosevelt_dime_obverse_transparent.png/220px-2017-D_Roosevelt_dime_obverse_transparent.png' },
            { side: 'tails', imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/2017-D_Roosevelt_dime_reverse_transparent.png/220px-2017-D_Roosevelt_dime_reverse_transparent.png" }
        ]
    };

    constructor(props) {
        super(props);
        this.state = { 
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0    
        }

        
        this.handleClick = this.handleClick.bind(this);
    }


    flip() {
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            return {
                currCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
                nTails: st.nTails + (newCoin.side === "tails" ? 1: 0)
            };
        });
        console.log("flipped!");
    }

    handleClick(e) {
        this.flip();
    }


    render() {
        return (
            <div className="Coin">
                <h2>Let's flip a coin!</h2>
                {this.state.currCoin && <CoinImg info={this.state.currCoin} />}
                <div>
                    <button onClick={this.handleClick}>Flip Coin</button>
                </div>
                <p>
                    Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails.
                </p>
               
            </div>
        )
    }
}

export default Coin;