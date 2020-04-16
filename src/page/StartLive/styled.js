import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const Body = styled.div`
  width: 100%;
`;

export const LabelStyle = styled.div`
  font-size: 22px;
  font-family: Roboto;
  font-weight: bold;
  margin-bottom: 0px;
  color: rgb(30, 48, 100);
`;

export const Content = styled.div`
  background-color: white;
  margin-top: 10px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 30px;
  height: 100%;
`;

export const HeaderContent = styled.div`
  width: 100%;
  background-color: #f598a4;
  color: white;
  line-height: unset;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
`;

export const LabelHeader = styled.div`
  font-size: 20px;
  font-family: Roboto;
  font-weight: bold;
`;

export const ButtonStartLive = styled(Button)`
  color: white;
  font-size: 50px;
  font-family: Roboto;
  font-weight: bold;
  height: 150px;
`;

export const ContentLive = styled.div`
  padding-top: 200px;
  text-align: center;
  width: 100%;
  height: 100vh;
`;