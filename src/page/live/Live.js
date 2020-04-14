import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderLiveFit from '../../component/header-live-fit/HeaderLiveFit';
import group from '../../assets/image/group.png';
import { Button, Form, Row, Col } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import StreamVideo from '../../component/stream-video/StreamVideo';
import ChannelForm from '../../component/stream-video/ChannelForm';

const Body = styled.div`
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
  padding-left: 50px;
  padding-top: 20px;
  padding-right: 50px;
`;

const HeaderSideLeft = styled.div`
  text-align: left;
  float: left;
`;

const LabelStyle = styled.div`
  font-size: 30px;
  font-family: Roboto;
  font-weight: bold;
`;

const Content = styled.div`
  width: 100%;
  background-color: white;
  height: 100vh;
  margin-top: 50px;
`;

const HeaderBody = styled.div`
  width: 100%;
  height: 10vh;
`;

const HeaderContent = styled.div`
  width: 100%;
  background-color: #f598a4;
  height: 10%;
  color: white;
  line-height: unset;
  padding-top: 20px;
  padding-left: 20px;
`;

const LabelHeader = styled.div`
  font-size: 20px;
  font-family: Roboto;
  font-weight: bold;
`;

const ButtonStartLive = styled(Button)`
  background-color: #3ba080;
  color: white;
  font-size: 50px;
  font-family: Roboto;
  font-weight: bold;
  margin-left: 50px;
  height: 200px;
`;

const ContentLive = styled.div`
  padding-top: 250px;
  text-align : center;
  width: 100%;
  height: 100vh;
`;

class Live extends Component {

  constructor(){
    super()
    this.state = {
      channel: ""
    };
  }

  selectChannel = channel => {
    this.setState({ channel });
  };


  render() {
    return (
      <div>
        <HeaderLiveFit></HeaderLiveFit>
        <Body>
          <HeaderBody>
            <HeaderSideLeft>
              <Row>
                <img src={group} alt='Logo' width='50px' height='50px' />
                <Col>
                  <LabelStyle>Class</LabelStyle>
                  <Breadcrumb>
                    <Breadcrumb.Item href='/class'>
                      <label style={{ fontSize: '12px' }}>Class</label>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                      <label style={{ fontSize: '12px' }}>Start live</label>
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </Col>
              </Row>
            </HeaderSideLeft>
          </HeaderBody>
          <Content>
            <HeaderContent>
              <LabelHeader>Advance Flow Yoga</LabelHeader>
            </HeaderContent>
            <ContentLive>
              <ButtonStartLive>START</ButtonStartLive>
            </ContentLive>
            <ChannelForm selectChannel={this.selectChannel} />
            <StreamVideo channel={this.state.channel} />
          </Content>
        </Body>
      </div>
    );
  }
}

export default Live;
