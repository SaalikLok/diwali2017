import React, {Component} from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import './style.css';

const diwaliDate = '2017-11-10 19:10:10';
const diwaliMoment = moment(diwaliDate, 'YYYY-MM-DD HH:mm:ss');
let currentMoment = moment().unix();

const diwaliDay = diwaliMoment.dayOfYear();
const diwaliHour = diwaliMoment.hours();
const diwaliMin = diwaliMoment.minutes();
const diwaliSec = diwaliMoment.seconds();

let diffTime = diwaliMoment - currentMoment;
console.log(diffTime);
let duration = moment.duration(diffTime * 1000, "milliseconds");
console.log(duration.humanize());

let diffDay = duration.day;
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
      		
      		{/*<h3><Moment>{diwaliDate}</Moment></h3>
      		<h3><Moment>{this.state.currentTime}</Moment></h3>
      		<h3>Right now it is {this.state.currentDay} days, {this.state.currentHour} hours, {this.state.currentMin} minutes, {this.state.currentSec} seconds.</h3>
      		*/}

      		<h3 className="large">{diffDay} days!</h3>

		</div>
		)
	}
}

export default FirstCountdown;