import StreamVideo from '../../component/stream-video/StreamVideo';
import React, { Component } from 'react';
import "./meeting.css";
import * as Cookies from 'js-cookie';
class Live extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoProfile : '1440p_1',
      channel : this.props.match.params.channel,
      transcode : 'interop',
      attendeeMode : 'video',
      baseMode : 'al',
      appId : 'b0eee4d29b954766add16ff1f0dc8ef0',
      uid : undefined
    }
    // if (!this.appId) {
    //   return alert("Get App ID first!");
    // }
  }

  componentDidMount() {
    this.setState({channel : this.props.match.params.channel });
  }

  // componentWillReceiveProps(){
  //   this.setState({attendeeMode : this.props.match.params.attendeeMode });
  // }

  render() {
    return (
      <div className='wrapper meeting'>
        <div className='ag-main'>
          <div className='ag-container'>
            <StreamVideo
              videoProfile={this.state.videoProfile}
              channel={this.state.channel}
              transcode={this.state.transcode}
              attendeeMode={this.state.attendeeMode}
              baseMode={this.state.baseMode}
              appId={this.state.appId}
              uid={this.state.uid}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Live;
