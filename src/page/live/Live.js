import StreamVideo from '../../component/stream-video/StreamVideo';
import React, { Component } from 'react';
import "./meeting.css";
import * as Cookies from 'js-cookie';
class Live extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoProfile : '480p_1',
      channel : 'test',
      transcode : 'interop',
      attendeeMode : this.props.match.params.attendeeMode,
      baseMode : 'al',
      appId : '8f252f1317184044836d2a18d3edc506',
      uid : undefined
    }
    // if (!this.appId) {
    //   return alert("Get App ID first!");
    // }
  }

  componentDidMount() {
    this.setState({attendeeMode : this.props.match.params.attendeeMode });
  }

  componentWillReceiveProps(){
    this.setState({attendeeMode : this.props.match.params.attendeeMode });
  }

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
