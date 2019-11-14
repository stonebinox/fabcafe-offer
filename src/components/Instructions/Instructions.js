import React, { Component } from 'react';
import './Instructions.sass';

export class Instructions extends Component {
    render() {
        return (
            <div className="instructions">
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                        <h3 className="text-center">Instructions to get this:</h3>
                        <ul className="list-group">
                            <li className="list-group-item">On the 22nd, 23rd, or 24th, take a <strong>selfie or a photo</strong> and mention us/<strong>tag</strong> us in your <a href="https://www.instagram.com/fab_cafe/" title="Instagram">Instagram</a>/<a href="https://www.facebook.com/fabcafeblr/" title="Facebook">Facebook</a> story or photo.</li>
                            <li className="list-group-item"><strong>Show</strong> it to our manager!</li>
                            <li className="list-group-item">This offer is valid for <strong>minimum</strong> purchases of Rs. 250 and above.</li>
                        </ul>
                        <p className="text-muted text-center">Not happy with the offer you got? Scan this QR code again in <span style={{ color: '#e99938' }}>24 hours</span> and get a fresh offer!</p>
                    </div>
                </div>
            </div>
        );
    }
}