import React, { Component } from 'react';
import SiteSection from './SiteSection.js';
import MainSection from './MainSection.js';
import './style.css';

class App extends Component {
  render() {
    return (
    <div>
      <MainSection title="Diwali 2017" subtitle="It's gonna be sweet" color="purple"/>
    </div>
    );
  }
}

export default App;
