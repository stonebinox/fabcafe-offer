import React, { Component } from 'react';
import './Copyright.sass';

export class Copyright extends Component {
    render() {
        const year = new Date().getFullYear();

        return (
            <div className="copyright text-muted">
                &copy; Copyright Fab Cafe, Bangalore, {year}
            </div>
        );
    }
}