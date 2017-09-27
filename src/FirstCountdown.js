import React, {Component} from 'react';
import moment from 'moment';
import './style.css';

const diwaliDate = '2017-11-10 19:10:10';
const diwaliMoment = moment(diwaliDate, 'YYYY-MM-DD HH:mm:ss').unix();
let currentMoment = moment().unix();

let diffTime = diwaliMoment - currentMoment;

class FirstCountdown extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			currentTime: moment().unix(),
			diffTime: diwaliMoment - currentMoment,
			diffDay: Math.round(diffTime/86400),
			diffHour: Math.round((diffTime%86400)/3600),
			diffMin: Math.round(((diffTime%86400)%3600)/60),
			diffSec: Math.round(diffTime%60)
		};
		this.tick = this.tick.bind(this);
	}

//What happens every tick - update the current time, and set the state of the difference between current and Diwali time.
	tick(){
		this.setState({
			currentTime: moment().unix(),
			diffTime: diwaliMoment - this.state.currentTime,
			diffDay: Math.round(this.state.diffTime/86400),
			diffSec: Math.round(this.state.diffTime%60)
		});
		
		if(this.state.diffMin === 0){
				this.setState({diffHour: this.state.diffHour - 1});
		}

		if(this.state.diffSec === 0){
				this.setState({diffMin: this.state.diffMin - 1});
		}
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
      		<h3 className="large">{this.state.diffDay} days, {this.state.diffHour} hours, {this.state.diffMin} minutes, {this.state.diffSec} seconds</h3>
		</div>
		)
	}
}

export default FirstCountdown;