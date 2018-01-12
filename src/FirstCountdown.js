import React, {Component} from 'react';
import moment from 'moment';
import './style.css';

const diwaliDate = '2017-11-10 17:00:30';
const diwaliMoment = moment(diwaliDate, 'YYYY-MM-DD HH:mm:ss').unix();
let currentMoment = moment().unix();

let diffTime = diwaliMoment - currentMoment;

class FirstCountdown extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			currentTime: moment().unix(),
			diffTime: diwaliMoment - currentMoment,
			diffDay: (diffTime/86400),
			diffHour: ((diffTime%86400)/3600),
			diffMin: (((diffTime%86400)%3600)/60),
			diffSec: (diffTime%60)
		};
		this.tick = this.tick.bind(this);
	}

//What happens every tick - update the current time, and set the state of the difference between current and Diwali time.
	tick(){
		this.setState({
			currentTime: moment().unix(),
			diffTime: diwaliMoment - this.state.currentTime,
			diffDay: (this.state.diffTime/86400),
			diffHour: ((this.state.diffTime%86400)/3600),
			diffMin: (((this.state.diffTime%86400)%3600)/60),
			diffSec: (this.state.diffTime%60)
		});

		/*if(this.state.diffSec === 0){
			this.setState({diffMin: (((diffTime%86400)%3600)/60)});
		}*/
	}

	componentDidMount(){
		this.interval = setInterval(this.tick, 1000);
	}

	componentWillUnmount(){
		clearInterval(this.interval);
	}
	
	render(){
		if(this.state.diffSec < 0){
			return(
				<h3>The Show Has Completed!</h3>
			)
		}
		else{
			return(
				<div>
					  <h3>The show starts in...</h3>
					  <h3 className="large">{Math.round(this.state.diffDay)} days, {Math.round(this.state.diffHour)} hours, {Math.round(this.state.diffMin)} minutes, {Math.round(this.state.diffSec)} seconds</h3>
				</div>
				)
		}
	}
}

export default FirstCountdown;