import React, { Component } from 'react';
import styled from 'styled-components';
import FormLogin from '../../component/form-login/FormLogin';

const WallPaper = styled.div`
  background-color: #fbefef;
  width: 100%;
  height: 100vh;
`;
class Login extends Component {
  render() {
    return (
      <div className='App'>
        <WallPaper>
            <FormLogin/>
        </WallPaper>
      </div>
    );
  }
}

export default Login;
