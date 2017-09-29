import React from 'react';
import FirstCountdown from './FirstCountdown.js';
import './style.css';

function SiteSection(props){
    return (
      <div>
      	<section className={props.color}>
      		<img className="siteImg" src={require('./img/sasaLogo.png')} alt=""/>
      		<h1 className="siteHeading">{props.title}</h1>
      		<h2>{props.subtitle}</h2>
      		<br/>
      		<FirstCountdown/>
      		<p>Want to be part of the show?</p>
      		<a href="https://goo.gl/forms/4ZrRwnFDGaEmOTGl2" target="_blank"><div className="button">Get Involved!</div></a>
      	</section>
      </div>
    )
}

export default SiteSection;