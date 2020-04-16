import React, { Component } from 'react';
import { HeaderLiveFit } from '../../components';
import group from '../../assets/image/group.png';
import { Col } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import * as Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import {
  Body,
  LabelStyle,
  Content,
  HeaderContent,
  LabelHeader,
  ButtonStartLive,
  ContentLive,
} from './styled';

class StartLive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joinBtn: false,
      channel: '',
      baseMode: 'avc',
      transcode: 'interop',
      attendeeMode: 'video',
      videoProfile: '480p_4',
    };
  }

  handleJoin = () => {
    if (!this.state.joinBtn) {
      return;
    }
    console.log(this.state);
    Cookies.set('channel', this.state.channel);
    Cookies.set('baseMode', this.state.baseMode);
    Cookies.set('transcode', this.state.transcode);
    Cookies.set('attendeeMode', this.state.attendeeMode);
    Cookies.set('videoProfile', this.state.videoProfile);
    window.location.hash = 'live';
  };

  render() {
    return (
      <div>
        <HeaderLiveFit></HeaderLiveFit>
        <Body>
          <div style={{ width: '100%' }}>
            <div className='row pt-3 pb-3 pl-5 pr-5 ml-2 mr-2'>
              <img src={group} alt='Logo' width='50px' />
              <Col>
                <LabelStyle>Class</LabelStyle>
                <Breadcrumb>
                  <Breadcrumb.Item href='/fit'>
                    <label style={{ fontSize: '12px' }}>Class</label>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active>
                    <label style={{ fontSize: '12px' }}>Create Class</label>
                  </Breadcrumb.Item>
                </Breadcrumb>
              </Col>
            </div>
          </div>
        </Body>
        <Content>
          <HeaderContent>
            <LabelHeader>Advance Flow Yoga</LabelHeader>
          </HeaderContent>
          <ContentLive>
            <Link to='/live/test'>
              <ButtonStartLive
                type='buton'
                onClick={this.handleJoin}
                style={{ backgroundColor: '#3ba080' }}
              >
                START
              </ButtonStartLive>
            </Link>
          </ContentLive>
        </Content>
      </div>
    );
  }
}

export default StartLive;
