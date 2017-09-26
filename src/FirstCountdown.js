import React, {Component} from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import './style.css';

const diwaliDate = '2017-11-10T19:00-0500';

class FirstCountdown extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			currentTime: moment().format()
		};
		this.tick = this.tick.bind(this);
	}
	

	tick(){
		this.setState({
			currentTime: moment().format()
		});
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
		</div>
		)
	}
}

export default FirstCountdown;