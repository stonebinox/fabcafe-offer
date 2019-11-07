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
                <p className="lead text-center">Exclusive offer for you is ...</p>
                <div className="offer-text">{this.props.offer}*</div>
            </div>
        );
    }
}