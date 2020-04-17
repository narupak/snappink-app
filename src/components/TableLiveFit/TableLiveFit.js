import React, { Component } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import IconSort from "./icons";
import "./styles.css";
import { Pencil, TrashFill, Search } from "react-bootstrap-icons";
import Pagination from "react-js-pagination";
import axios from "axios";
import Moment from "react-moment";
import logoNoData from "./icons/partner-nodata-ico.5048444f.svg";
import { Link } from "react-router-dom";
import {
  InputGroup,
  Button,
  FormControl,
  Row,
  Col,
  Form,
  Modal,
} from "react-bootstrap";

const customStyles = {
  headCells: {
    style: {
      fontWeight: "bold",
    },
  },
  headRow: {
    style: {
      background: "rgb(238, 238, 238)",
    },
  },
};

const columns = [
  {
    name: "#",
    selector: "index",
    center: true,
    width: "5%",
  },
  {
    name: "CLASSNAME",
    selector: "className",
    sortable: true,
    width: "17%",
  },
  {
    name: "TRAINER",
    selector: "trainer",
    width: "17%",
  },
  {
    name: <div className="text-center">PRICE (THB)</div>,
    selector: "price",
    center: true,
  },
  {
    name: <div className="text-center">PRODUCTION TIME</div>,
    selector: "productionTime",
    center: true,
  },
  {
    name: "LIVE STATUS",
    center: true,
    cell: (row) => {
      if (row.liveStatus === "Live Now") {
        return <span style={{ color: "rgb(59, 160, 128)" }}>Live Now</span>;
      }
      if (row.liveStatus === "Soon") {
        return <span style={{ color: "rgb(243, 198, 75)" }}>Soon</span>;
      }
      if (row.liveStatus === "Lived") {
        return <span style={{ color: "rgb(170, 170, 170)" }}>Lived</span>;
      } else {
        return <span>-</span>;
      }
    },
  },
  {
    name: "LIVE TIME",
    center: true,
    cell: (row) => {
      return (
        <div>
          <Moment format="HH:MM">{row.liveOpenTime}</Moment> -{" "}
          <Moment format="HH:MM">{row.liveCloseTime}</Moment>
        </div>
      );
    },
  },
  {
    name: "LIVE DATE",
    selector: "liveDate",
    center: true,
    cell: (row) => {
      return (
        <div>
          <Moment format="ll">{row.liveOpenTime}</Moment>
        </div>
      );
    },
  },
  {
    name: "OPERATION",
    center: true,
    width: "12%",
    selector: "btn",
  },
];

createTheme("solarized", {
  text: {
    primary: "rgb(30, 48, 100)",
    secondary: "rgb(30, 48, 100)",
  },
});

export class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
      page: 1,
      sizePage: 10,
      search: "",
      objFlag: "",
      activePage: 1,
      totalPage: 0,
      sort: "",
      url: "https://api-staging.snappink.com/api/gym_class/v1/filter?",
      modal: false,
      delId: "",
    };
  }

  componentDidMount() {
    this.handleTotalPage();
    this.handleTable();
  }

  handleSearch = (e) => {
    this.setState(
      {
        search: e.target.value,
      },
      () => {
        this.handleTable();
      }
    );
  };

  handleFilter = (e) => {
    this.setState(
      {
        objFlag: e.target.value,
      },
      () => {
        this.handleTable();
      }
    );
  };

  handleSort = (obj, sort) => {
    this.setState(
      {
        sort: sort,
      },
      () => {
        this.handleTable();
      }
    );
  };

  handlePageChange = (pageNumber) => {
    this.setState({ page: pageNumber }, () => {
      this.handleTable();
    });
  };

  handleTotalPage = async () => {
    let gymId = localStorage.getItem("user");
    gymId = JSON.parse(gymId).gym_id;
    gymId = "gym_id=" + gymId;
    let url = this.state.url + gymId;
    try {
      const response = await axios.get(url);
      response.data.result.total &&
        this.setState({ totalPage: response.data.result.total });
    } catch (error) {
      console.error(error);
    }
  };

  handleTable = async () => {
    let page = "&page=" + this.state.page;
    let size = "&size=" + this.state.sizePage;
    let search = this.state.search ? "&s=" + this.state.search : "";
    let objFlag = this.state.objFlag ? "&obj_flag=" + this.state.objFlag : "";
    let sort = "";
    if (this.state.sort) {
      sort = this.state.sort === "asc" ? "&sort_by=name" : "&sort_by=-name";
    }
    let gymId = localStorage.getItem("user");
    gymId = JSON.parse(gymId).gym_id;
    gymId = "gym_id=" + gymId;
    let url = this.state.url + gymId + page + size + search + objFlag + sort;
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        // console.log(response);
        const res = response.data.result.items.map((val, index) => {
          return {
            id: val.id,
            index: this.state.page * 10 + (index + 1) - 10,
            className: val.name,
            trainer: val.trainer_name,
            price: val.snappink_price,
            productionTime: val.exp_day_amt,
            liveStatus: val.live_status,
            liveOpenTime: val.live_open_time,
            liveCloseTime: val.live_close_time,
            liveDate: val.live_day_name,
            classId: val._id,
            btn: val.live_status === "Soon" && (
              <div className="text-center">
                <Link to={`/createClass/${val._id}`}>
                  <button type="button" className="btn btn btn-link btn-sm">
                    <Pencil style={{ color: "rgb(30, 48, 100)" }} />
                  </button>
                </Link>
                <button
                  onClick={() => this.modalDelClass(val._id)}
                  type="button"
                  className="btn btn btn-link btn-sm ml-4"
                >
                  <TrashFill style={{ color: "rgb(30, 48, 100)" }} />
                </button>
              </div>
            ),
          };
        });
        this.setState({ allData: res });
        this.setState({ totalPage: response.data.result.total });
      }
    } catch (error) {
      console.log(error);
    }
  };

  modalDelClass = (id) => {
    this.setState({
      modal: true,
    });
    this.setState({
      delId: id,
    });
  };

  handleClose = () => {
    this.setState({ modal: false });
  };

  deleteApi = async () => {
    let url =
      "https://api-staging.snappink.com/api/gym_class/v1/" + this.state.delId;
    let token = localStorage.getItem("user");
    token = JSON.parse(token).token;
    axios.delete(url, {
      headers: {
        token: token,
      },
    });
    this.handleTable();
  };

  hadleDelClass = () => {
    this.setState(
      {
        modal: false,
      },
      () => {
        this.deleteApi();
        this.handleTable();
      }
    );
  };

  render() {
    return (
      <div>
        <Row>
          <Col></Col>
          <Col xs={3}>
            <InputGroup className="mb-3 mt-3">
              <InputGroup.Prepend
                style={{ border: "1px solid rgb(206, 212, 218)" }}
              >
                <Button
                  style={{ backgroundColor: "white", pointerEvents: "none" }}
                >
                  <Search style={{ color: "rgb(30, 48, 100)" }} />
                </Button>
              </InputGroup.Prepend>
              <FormControl
                onChange={this.handleSearch}
                aria-label="Text input with checkbox"
              />
            </InputGroup>
          </Col>
          <Col xs={2}>
            <Form.Control
              onChange={this.handleFilter}
              className="mb-3 mt-3"
              as="select"
            >
              <option value="">All</option>
              <option value="300">Live Now</option>
              <option value="0">Soon</option>
              <option value="500">Lived</option>
            </Form.Control>
          </Col>
        </Row>
        <DataTable
          sortIcon={<IconSort />}
          columns={columns}
          data={this.state.allData}
          theme="solarized"
          customStyles={customStyles}
          noHeader={true}
          pagination={false}
          onSort={this.handleSort}
          sortFunction={(rows, field, direction) => {
            return rows;
          }}
          onRowClicked={(row) => {
            if (row.liveStatus === "Live Now") {
              window.location.href = "startLive/" + row.classId;
            }
          }}
          noDataComponent={
            <div
              className="text-center mt-5"
              style={{ width: "100%", height: "200px" }}
            >
              <div className="col-12">
                <img src={logoNoData} alt={logoNoData} />
              </div>
              <div className="col-12">No Data</div>
            </div>
          }
        />
        <div style={{ backgroundColor: "white" }} className="card-footer">
          <Pagination
            activePage={this.state.page}
            itemsCountPerPage={this.state.sizePage}
            totalItemsCount={this.state.totalPage}
            pageRangeDisplayed={6}
            onChange={this.handlePageChange.bind(this)}
          />
        </div>
        <Modal centered show={this.state.modal} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>Confirm delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="text-center mt-4">Are you sure want to delete?</div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="cancel"
              onClick={() => {
                this.setState({ modal: false });
              }}
              style={{ width: "110px", backgroundColor: "rgb(50, 66, 113)" }}
            >
              Cancel
            </Button>
            <Button
              style={{ width: "110px", backgroundColor: "rgb(245, 152, 164)" }}
              onClick={this.hadleDelClass}
            >
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
