import React, { Component } from 'react';

class CoinImg extends Component {
    render() {
        return <img src={this.props.info.imgSrc} alt={this.props.info.side} />
    }
}

export default CoinImg;