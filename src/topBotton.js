import React, { Component } from 'react';

import {$,jQuery} from 'jquery';


import goUpNarrrowImage from './images/pistachios.jpg';

class GoTopButton extends Component {
  constructor() {
    super();

    this.onclick = this.onclick.bind(this);
  }

  render() {

    return ( 
      <button onclick={this.onclick}>
        <img src={goUpNarrrowImage} style={{
          display: "inline-block",
          marginRight: "10px"
        }} />
        наверх
      </button>
    );
  }

  onclick() {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  }
}

export default GoTopButton;