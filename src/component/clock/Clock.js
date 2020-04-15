import React, { Component } from 'react';
import { Button } from "react-bootstrap";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: {
        hour: 0,
        minute: 0,
        second: 0,
      },
    };

    this.getTime()
  }

  getTime() {
    if (this.state.time.second > 60) {
      this.state.time.hour += 1;
    } else if (this.state.time.minute > 60) {
      this.state.time.minute += 1;
    } else if (this.state.time.hour < 60) {
      this.state.time.second += 1;
    }else{
        this.state.time.hour = 0;
        this.state.time.minute = 0;
        this.state.time.second = 0;
    }
    return { hour : this.state.time.hour, minute : this.state.time.minute, second : this.state.time.second };
    
  }

  componentDidMount(){
    setInterval(this.setState({ time: this.getTime() }) , 1000);
    // console.log(state);
  }

//   componentWillUpdate(){
//       setInterval(this.setState({ time: this.getTime() }) , 2000);
//   }

  componentWillUnmount() {
    this.setState({ hour: 0, minute: 0, second: 0 });
  }

  startTime(){
      this.setState({ time : this.getTime() })
  }

  render() {
    return (
      <div>
        {this.state.time.hour < 9 ? `0${this.state.time.hour}` : this.state.time.hour} :{' '}
        {this.state.time.minute < 9 ? `0${this.state.time.minute}` : this.state.time.minute} :{' '}
        {this.state.time.second < 9 ? `0${this.state.time.second}` : this.state.time.second}
      </div>
    );
  }
}

export default Clock;
