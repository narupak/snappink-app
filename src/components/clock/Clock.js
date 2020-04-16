import React, { Component } from 'react';
import ReactStopwatch from 'react-stopwatch';

export class Clock extends Component {

  render() {
    return (
      <ReactStopwatch
        seconds={0}
        minutes={0}
        hours={0}
        onChange={({ hours, minutes, seconds }) => {
          // do something
        }}
        onCallback={() => console.log('Finish')}
        render={({ formatted, hours, minutes, seconds }) => {
          return (
            <div>{formatted}</div>
          );
        }}
      />
    );
  }
}
