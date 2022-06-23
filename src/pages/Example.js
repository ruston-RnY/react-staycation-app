import React, { Component } from "react";
// import InputNumber from "../elements/Form/InputNumber/index";
import InputDate from "../elements/Form/InputDate/index";

export default class Example extends Component {
  // tes input number
  // state = {
  //   value: "1",
  // };

  // tes input date
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            {/* <InputNumber
              max={30}
              suffix=" night"
              isSuffixPlural
              onChange={this.handleChange}
              name="value"
              value={this.state.value}
            /> */}
            <InputDate
              max={30}
              onChange={this.handleChange}
              name="value"
              value={this.state.value}
            />
          </div>
        </div>
      </div>
    );
  }
}
