import React, { Component } from 'react';
import { StreamVideo } from '../../components';
import './meeting.css';
class Live extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoProfile: '720p_2',
      channel: this.props.match.params.channel,
      transcode: 'interop',
      attendeeMode: 'video',
      baseMode: 'al',
      appId: 'b0eee4d29b954766add16ff1f0dc8ef0',
      uid: undefined,
      id: this.props.match.params.id,
    };
  }

  render() {
    return (
      <div className='wrapper meeting'>
        <div className='ag-main'>
          <div className='ag-container'>
            <StreamVideo
              videoProfile={this.state.videoProfile}
              transcode={this.state.transcode}
              attendeeMode={this.state.attendeeMode}
              baseMode={this.state.baseMode}
              appId={this.state.appId}
              uid={this.state.uid}
              id={this.state.id}
              channel={this.state.channel}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Live;
