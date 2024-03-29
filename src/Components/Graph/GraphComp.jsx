import React, { useState } from "react";
import { Form } from "react-bootstrap";
import ChartComp from "./Chart";
import DatePicker from "./DatePicker";
import "./GraphComp.css";

const GraphComp = () => {
  // State to manage the selected chart type
  const [selectedChartType, setSelectedChartType] = useState("line");

  return (
    <div className="container mt-3 d-flex flex-wrap w-100">
      {/* Date Picker Component */}
      <div className="pickerStyle">
        <DatePicker />
      </div>

      {/* Dropdown to select the chart type */}
      <div className="dropDownStyle">
        <div>
          <Form.Label>Select Graph Type</Form.Label>
          <select
            className="form-select w-100"
            aria-label="Default select example"
            onChange={(e) => setSelectedChartType(e.target.value)}
            value={selectedChartType}
          >
            <option value="line">Line</option>
            <option value="bar">Bar</option>
            <option value="donut">Donut</option>
            <option value="area">Area</option>
          </select>
        </div>
      </div>

      {/* Chart display section */}
      <div className="w-100">
        <h1>
          Chart:{" "}
          <span style={{ color: "#008ffb" }}>
            {selectedChartType.toLocaleUpperCase()}
          </span>
        </h1>
        <hr />
        <div className="w-100 d-flex justify-content-center align-items-center w-100">
          {/* Chart Component */}
          <ChartComp graphType={selectedChartType} />
        </div>
      </div>
    </div>
  );
};

export default GraphComp;