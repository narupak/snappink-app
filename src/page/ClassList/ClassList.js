import React, { Component } from 'react';
import group from '../../assets/image/group.png';
import {
  ButtonCreateClass,
  HeaderLiveFit,
  Table,
} from '../../components';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Body, LabelStyle, TableBody } from './styled';

class ClassList extends Component {
  render() {
    return (
      <div>
        <HeaderLiveFit />
        <Body>
          <div style={{ width: '100%' }}>
            <div className='row pt-3 pb-3 pl-5 pr-5 ml-2 mr-2'>
              <img src={group} alt='Logo' width='50px' />
              <Col>
                <LabelStyle>Class</LabelStyle>
                <ol
                  style={{
                    marginBottom: '0',
                    paddingLeft: '0',
                    fontSize: '14px',
                  }}
                >
                  Class
                </ol>
              </Col>
              <div className='pt-3'>
                <Link to='/createClass'>
                  <ButtonCreateClass />
                </Link>
              </div>
            </div>
          </div>
        </Body>
        <TableBody>
          <Table />
        </TableBody>
      </div>
    );
  }
}

export default ClassList;
