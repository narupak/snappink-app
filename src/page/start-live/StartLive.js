import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderLiveFit from '../../component/header-live-fit/HeaderLiveFit';
import group from '../../assets/image/group.png';
import { Button, Form, Row, Col } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import * as Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const Body = styled.div`
  width: 100%;
`;

const LabelStyle = styled.div`
  font-size: 22px;
  font-family: Roboto;
  font-weight: bold;
  margin-bottom: 0px;
  color: rgb(30, 48, 100);
`;

const Content = styled.div`
  background-color: white;
  margin-top: 10px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 30px;
  height: 100%;
`;

const HeaderContent = styled.div`
  width: 100%;
  background-color: #f598a4;
  color: white;
  line-height: unset;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
`;

const LabelHeader = styled.div`
  font-size: 20px;
  font-family: Roboto;
  font-weight: bold;
`;

const ButtonStartLive = styled(Button)`
  color: white;
  font-size: 50px;
  font-family: Roboto;
  font-weight: bold;
  height: 150px;
`;

const ContentLive = styled.div`
  padding-top: 200px;
  text-align: center;
  width: 100%;
  height: 100vh;
`;

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
            <Link to='/live/Cycling'>
              <ButtonStartLive type='buton' onClick={this.handleJoin} style={{ backgroundColor : "#3ba080"}}>
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
