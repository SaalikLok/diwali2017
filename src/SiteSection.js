import React from 'react';
import FirstCountdown from './FirstCountdown.js'
import './style.css';

function SiteSection(props){
    return (
      <div>
      	<section className="purple">
      			<img className="siteImg" src={require('./img/sasaLogo.png')} alt=""/>
      			<h1 className="siteHeading">{props.title}</h1>
      			<h2>{props.subtitle}</h2>
      			<FirstCountdown/>
      	</section>
      </div>
    )
}

export default SiteSection;
