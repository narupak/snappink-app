import React, { Component } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import IconSort from "./icons";

const customStyles = {
  headCells: {
    style: {
      fontWeight: "bold",
      display: "flex",
      justifyContent: "center",
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
    width: "10%",
  },
  {
    name: "CLASSNAME",
    selector: "className",
    sortable: true,
  },
  {
    name: "TRAINER",
    selector: "trainer",
    sortable: true,
  },
  {
    name: "PRICE (THB)",
    selector: "price",
    sortable: true,
  },
  {
    name: "PRODUCTION TIME",
    selector: "productionTime",
    sortable: true,
  },
  {
    name: "LIVE STATUS",
    sortable: true,
    cell: (row) => {
      if (row.liveStatus === 1) {
        return <span style={{ color: "rgb(59, 160, 128)" }}>Live Now</span>;
      }
      if (row.liveStatus === 2) {
        return <span style={{ color: "rgb(243, 198, 75)" }}>Soon</span>;
      } else {
        return <span style={{ color: "rgb(170, 170, 170)" }}>Lived</span>;
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
    };
  }

  componentDidMount() {
    fetch(
      "https://api-staging.snappink.com/api/gym_class/v1/filter?gym_id=5cde402aac0c020001be1a77"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Get gym class success.") {
          console.log(data)
          const tmp = data.result.items.map((val,index) => {
             return {
              id: val.id,
              index : index+1,
              className: val.name,
              trainer: val.trainer_name,
              price: val.snappink_price,
              productionTime : val.exp_day_amt,
              liveStatus: "-",
              liveTime: "-",
              liveDate: "-",
            };
          });
          this.setState({ allData : tmp });
        }
      })
      .catch(console.log);
  }

  render() {
    return (
      <DataTable
        sortIcon={<IconSort />}
        pagination={true}
        columns={columns}
        data={this.state.allData}
        theme="solarized"
        customStyles={customStyles}
      />
    );
  }
}

export default Table;
