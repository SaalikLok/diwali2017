import React from 'react';
import {Container} from 'semantic-ui-react';
import FirstCountdown from './FirstCountdown.js'
import './style.css';

function SiteSection(props){
    return (
      <div>
      	<section className="purple">
      		<Container>
      			<img className="siteImg" src={require('./img/sasaLogo.png')} alt=""/>
      			<h1 className="siteHeading">{props.title}</h1>
      			<h2>{props.subtitle}</h2>
      			<FirstCountdown/>
      		</Container>
      	</section>
      </div>
    )
}

export default SiteSection;
