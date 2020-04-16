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

export const Footer = styled.div`
  width: 100%;
  height: 10vh;
  text-align: right;
`;

export const ButtonConfirm = styled(Button)`
  color: white;
  font-size: 14px;
  font-family: Roboto;
  font-weight: bold;
  margin-left: 30px;
`;

export const ButtonCancel = styled(Button)`
  color: white;
  font-size: 14px;
  font-family: Roboto;
  font-weight: bold;
  margin-left: 50px;
`;

export const Content = styled.div`
  background-color: white;
  margin-top: 10px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Panel = styled.div`
  width: 100%;
  height: 50vh;
  padding: 50px;
`;
export const HeaderPanel = styled.div`
  padding-left: 10px;
  padding-top: 5px;
  background-color: #f598a4;
  width: 100%;
  height: 15%;
  border-radius: 5px;
`;

export const BodyPanel = styled.div`
  width: 100%;
  hight: 50%;
  padding-left: 50px;
  padding-top: 20px;
`;

export const ButtonAddMore = styled(Button)`
  color: white;
  font-size: 14px;
  font-family: Roboto;
  font-weight: bold;
  margin-left: 400px;
`;