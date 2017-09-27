import React from 'react';
import FirstCountdown from './FirstCountdown.js';
import './style.css';

function SiteSection(props){
    return (
      <div>
      	<section className={props.color}>
      		<h1>{props.title}</h1>
      		<h2>{props.subtitle}</h2>
      	</section>
      </div>
    )
}

export default SiteSection;
