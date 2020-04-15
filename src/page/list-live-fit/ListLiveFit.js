import React, { Component } from "react";
import styled from "styled-components";
import group from "../../assets/image/group.png";
import ButtonCreateClass from "../../component/button-create-class/ButtonCreateClass";
import HeaderLiveFit from "../../component/header-live-fit/HeaderLiveFit";
import { Col } from "react-bootstrap";
import Table from "../../component/table-live-fit";

const Body = styled.div`
  width: 100%;
`;

const LabelStyle = styled.label`
  font-size: 22px;
  font-family: Roboto;
  font-weight: bold;
  margin-bottom: 0px;
  color: rgb(30, 48, 100);
`;

const TableBody = styled.div`
  background-color: white;
  margin-top: 10px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;
`;

class ListLiveFit extends Component {
  render() {
    return (
      <div>
        <HeaderLiveFit />
        <Body>
          <div style={{ width: "100%" }}>
            <div className="row pt-3 pb-3 pl-5 pr-5 ml-2 mr-2">
              <img src={group} alt="Logo" width="50px" />
              <Col>
                <LabelStyle>Class</LabelStyle>
                <ol
                  style={{
                    marginBottom: "0",
                    paddingLeft: "0",
                    fontSize: "14px",
                  }}
                >
                  Class
                </ol>
              </Col>
              <div className="pt-3">
                <ButtonCreateClass />
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

export default ListLiveFit;
