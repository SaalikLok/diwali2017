import React, { Component } from 'react';
import SiteSection from './SiteSection.js';
import './style.css';

class App extends Component {
  render() {
    return (
    <div>
      <SiteSection title="Diwali 2017" subtitle="It's gonna be sweet" color="purple"/>
    </div>
    );
  }
}

export default App;
