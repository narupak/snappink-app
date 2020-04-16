import React, { Component } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import IconSort from "./icons";
import "./styles.css";
import { Pencil, TrashFill } from "react-bootstrap-icons";
import Pagination from "react-js-pagination";

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
    sortable: true,
    width: "17%",
  },
  {
    name: <div className="text-center ml-3">PRICE (THB)</div>,
    selector: "price",
    sortable: true,
    center: true,
  },
  {
    name: <div className="text-center ml-3">PRODUCTION TIME</div>,
    selector: "productionTime",
    sortable: true,
    center: true,
  },
  {
    name: "LIVE STATUS",
    sortable: true,
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
    selector: "liveTime",
    sortable: true,
  },
  {
    name: "LIVE DATE",
    selector: "liveDate",
    sortable: true,
    center: true,
  },
  {
    name: "OPERATION",
    center: true,
    cell: (row) => {
      return (
        row.liveStatus === "Soon" && (
          <div className="text-center">
            <button type="button" className="btn btn btn-link btn-sm">
              <Pencil style={{ color: "rgb(30, 48, 100)" }} />
            </button>
            <button type="button" className="btn btn btn-link btn-sm">
              <TrashFill style={{ color: "rgb(30, 48, 100)" }} />
            </button>
          </div>
        )
      );
    },
  },
];

createTheme("solarized", {
  text: {
    primary: "rgb(30, 48, 100)",
    secondary: "rgb(30, 48, 100)",
  },
});

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
      page: 1,
      size: 10,
      search: this.props.search,
      obj_flag: "",
      activePage: 15,
    };
  }

  componentDidMount() {
    this.handleTable();
  }

  componentWillReceiveProps() {
    console.log(this.props.search);
    this.handleTable();
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  handleTable = () => {
    let gymId = localStorage.getItem("user");
    gymId = JSON.parse(gymId).gym_id;
    gymId = "gym_id=" + gymId;
    let page = "&page=" + this.state.page;
    let size = "&size=" + this.state.size;
    let url =
      "https://api-staging.snappink.com/api/gym_class/v1/filter?" +
      gymId +
      page +
      size +
      "&obj_flag=";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Get gym class success.") {
          console.log(data);
          const tmp = data.result.items.map((val, index) => {
            return {
              id: val.id,
              index: index + 1,
              className: val.name,
              trainer: val.trainer_name,
              price: val.snappink_price,
              productionTime: val.exp_day_amt,
              liveStatus: val.live_status,
              liveTime: "-",
              liveDate: "-",
            };
          });
          this.setState({ allData: tmp });
        }
      })
      .catch(console.log);
  };

  editClass = (id) => {
    console.log(id);
  };

  removeClass = (id) => {
    console.log(id);
  };

  render() {
    return (
      <div>
        <DataTable
          sortIcon={<IconSort />}
          columns={columns}
          data={this.state.allData}
          theme="solarized"
          customStyles={customStyles}
          noHeader={true}
          pagination={false}
          noDataComponent={"Not data"}
        />
        <div style={{ backgroundColor: "white" }} className="card-footer">
          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={10}
            totalItemsCount={450}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default Table;
