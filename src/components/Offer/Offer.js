import React, { Component } from 'react';
import './Offer.sass';

export class Offer extends Component {
    constructor(props) {
        super(props);

        setTimeout(function () {
            document.getElementsByClassName('offer-text')[0].className += ' active';
        }, 2000);
    }

    render() {
        return (
            <div className="offer">
                <h2 className="text-center">Meese Habba is on the 22nd, 23rd, and 24th of November!</h2>
                <p className="lead text-center">Exclusive offer for you that weekend is ...</p>
                <div className="offer-text">{this.props.offer}</div>
            </div>
        );
    }
}