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
      id: this.props.match.params.id,
      channel: this.props.match.params.channel
    };
  }

  func = {
    event: {
      toLive: () => {
        window.location.href = `/live/${this.state.id}/${this.state.channel}`;
      },
    },
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
            <ButtonStartLive
              type='buton'
              onClick={this.func.event.toLive}
              style={{ backgroundColor: '#3ba080' }}
            >
              START
            </ButtonStartLive>
          </ContentLive>
        </Content>
      </div>
    );
  }
}

export default StartLive;
