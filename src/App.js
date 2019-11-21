import React, { Component } from 'react';
import './App.sass';
import { Hero } from './components/Hero/Hero';
import { Offer } from './components/Offer/Offer';
import { Instructions } from './components/Instructions/Instructions';
import { Copyright } from './components/Copyright/Copyright';

class App extends Component {
  offers = [
    '20% off',
    'Free Onion Chips',
    'Free King Of The Ring',
    'Free Classic French Fries',
    'Free Peri Peri Fries',
  ];

  constructor(props) {
    super(props);

    this.getOffer();
  }

  setOffer(offer) {
    localStorage.setItem('offer-name', offer);
    localStorage.setItem('offer-date', new Date().getDate());
  }

  getOffer() {
    let offer = null;

    if (localStorage.getItem('offer-name')) {
      const currDate = new Date().getDate();
      const oldDate = parseInt(localStorage.getItem('offer-date'));

      if (currDate !== oldDate) {
        offer = this.offers[Math.floor(Math.random() * this.offers.length)];
        this.setOffer(offer);
      } else {
        offer = localStorage.getItem('offer-name');
      }
    } else {
      offer = this.offers[Math.floor(Math.random() * this.offers.length)];
      this.setOffer(offer);
    }

    return offer;
  }

  render() {
    return (
      <div className="container-fluid">
        <Hero />
        <Offer offer={this.getOffer()} />
        <Instructions />
        <Copyright />
      </div>
    );
  }
}

export default App;
