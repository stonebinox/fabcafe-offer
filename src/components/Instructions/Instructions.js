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
                            <li className="list-group-item">Take a selfie or a photo and mention us/tag us in your Instagram/Facebook story or photo.</li>
                            <li className="list-group-item">This offer is valid for mininimum purchases of Rs. 250 and above.</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}