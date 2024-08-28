import React, { memo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "../components/Navbar";

const ReportsAndInsights= memo(() => {
  return (
    <div className="container" style={{ padding: "80px  0 30px 0" }}>
      <Navbar name={"Reports and Insights"} />
      <div
        className="card p-3 mb-3"
        style={{
          borderRadius: "5px",
          padding: "0 0 0 5px",
          border: "2px solid gray",
          backgroundColor: "rgb(33 37 41)",
          color: "white",
        }}
      >
        <h2>Generate Report</h2>
        <form>
          {/* Form for generating reports */}
          <div className="mb-3">
            <label className="form-label">Date Range</label>
            <input
              type="date"
              className="form-control"
              style={{
                outline: "none",
                height: "45px",
                backgroundColor: "rgb(33 37 41)",
                color: "white",
                borderRadius: "5px",
                padding: "0 0 0 5px",
                border: "2px solid gray",
              }}
            />
            <input
              type="date"
              className="form-control mt-2"
              style={{
                outline: "none",
                height: "45px",
                backgroundColor: "rgb(33 37 41)",
                color: "white",
                borderRadius: "5px",
                padding: "0 0 0 5px",
                border: "2px solid gray",
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Category</label>
            <select
              className="form-select"
              style={{
                outline: "none",
                height: "45px",
                backgroundColor: "rgb(33 37 41)",
                color: "white",
                borderRadius: "5px",
                padding: "0 0 0 5px",
                border: "2px solid gray",
              }}
            >
              <option value="">All</option>
              {/* Add options for categories */}
            </select>
          </div>
          <button type="submit" className=" bud-btn btn btn-primary">
            Generate
          </button>
        </form>
      </div>
      <h2>Insights</h2>
      {/* Display insights and recommendations */}
    </div>
  );
});

export default ReportsAndInsights;
