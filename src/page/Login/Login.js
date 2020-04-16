import React, { Component } from 'react';
import { FormLogin } from '../../components';
import {
  WallPaper
} from './styled'

class Login extends Component {
  render() {
    return (
      <div className='App'>
        <WallPaper>
            <FormLogin {...this.props}/>
        </WallPaper>
      </div>
    );
  }
}

export default Login;
