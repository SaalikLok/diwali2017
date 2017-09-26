import React, {Component} from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import './style.css';

const diwaliDate = '2017-11-10T19:00-0500';
const diwaliMoment = moment([2017, 11, 10, 19, 1, 1]);
let currentMoment = moment();

/*Diwali Time of the year as Seconds
const diwaliSeconds = ;
console.log(diwaliSeconds);*/

const diwaliDay = diwaliMoment.dayOfYear();
const diwaliHour = diwaliMoment.hours();
const diwaliMin = diwaliMoment.minutes();
const diwaliSec = diwaliMoment.seconds();

let diffDay = 0;
let diffHour= 0;
let diffMin = 0;
let diffSec = 0;


class FirstCountdown extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			currentTime: moment().format(),
			currentDay: moment().dayOfYear(),
			currentHour: moment().hour(),
			currentMin: moment().minutes(),
			currentSec: moment().seconds(),
		};
		this.tick = this.tick.bind(this);
	}

	tick(){
		this.setState({
			currentTime: moment().format(),
			currentDay: moment().dayOfYear(),
			currentHour: moment().hour(),
			currentMin: moment().minutes(),
			currentSec: moment().seconds()
		});

		diffDay = diwaliDay - this.state.currentDay;
		diffHour = diwaliHour - this.state.currentHour;
		diffMin = diwaliMin - this.state.currentMin;
		diffSec = diwaliSec - this.state.currentSec;

	}

	componentDidMount(){
		this.interval = setInterval(this.tick, 1000);
	}

	componentWillUnmount(){
		clearInterval(this.interval);
	}
	
	render(){
		return(
		<div>
      		<h3>The show starts in...</h3>
      		
      		<h3><Moment>{diwaliDate}</Moment></h3>
      		<h3><Moment>{this.state.currentTime}</Moment></h3>
      		<h3>Right now it is {this.state.currentDay} days, {this.state.currentHour} hours, {this.state.currentMin} minutes, {this.state.currentSec} seconds.</h3>
      		<h3>{diffDay} days, {diffHour} hours, {diffMin} minutes, {diffSec} seconds.</h3>

		</div>
		)
	}
}

export default FirstCountdown;