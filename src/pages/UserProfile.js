import React, { memo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "../components/Navbar";

const UserProfile = memo(() => {
  return (
    <div className="container" style={{ padding: "80px  0 30px 0" }}>
      <Navbar name={"User Profile"} />
      <form>
        {/* Fields for updating user information */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="inp form-control"
              placeholder="Enter email"
              style={{
                outline: "none",
                height: "45px",
                width: "610px",
                borderRadius: "5px",
                padding: "0 0 0 5px",
                border: "2px solid gray",
                backgroundColor: "rgb(33 37 41)",
                color: "white",
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="inp form-control"
              placeholder="Enter password"
              style={{
                outline: "none",
                height: "45px",
                width: "610px",
                borderRadius: "5px",
                padding: "0 0 0 5px",
                border: "2px solid gray",
                backgroundColor: "rgb(33 37 41)",
                color: "white",
              }}
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Two-Factor Authentication</label>
          <br />
          <label className="form-check-label" style={{ marginRight: "10px" }}>
            Enable
          </label>
          <input
            type="checkbox"
            className="form-check-input"
            style={{
              outline: "none",
              borderRadius: "5px",
              padding: "0 0 0 5px",
              border: "2px solid gray",
              backgroundColor: "rgb(33 37 41)",
              color: "white",
            }}
          />
        </div>
        <button type="submit" className="bud-btn btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
});

export default UserProfile;
