import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import Logo from "../assets/images/dashboard_24dp_E8EAED.svg";
import Expenses from "../assets/images/assignment_24dp_E8EAED.svg";
import Budget from "../assets/images/paid_24dp_E8EAED.svg";
import Goals from "../assets/images/flag_circle_24dp_E8EAED.svg";
import Reports from "../assets/images/report_24dp_E8EAED.svg";
import Profile from "../assets/images/account_circle_24dp_E8EAED.svg";

export const Header = memo(() => {
  return (
    <header className="bg-dark py-3">
      <div className="container d-flex flex-column justify-content-between ps-0">
        <div
          className="d-flex align-items-center dd"
          style={{ marginBottom: "40px", marginLeft: "20px !important" }}
        >
          <NavLink
            to={"/"}
            style={{ textDecoration: "none", marginLeft: "20px !important" }}
          >
            <span
              className="text-white fs-4 ms-2"
              style={{ marginLeft: "20px !important" }}
            >
              MyFinance
            </span>
          </NavLink>
        </div>
        <ul
          style={{ height: "87vh" }}
          className="list-unstyled d-flex justify-content-between gap-3 mb-0 ms-auto"
        >
          <div>
            <li>
              <NavLink
                exact
                className="nav-link"
                activeClassName="active"
                to="/"
              >
                <img width={25} src={Logo} alt="Dashboard" />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/expenses"
              >
                <img width={25} src={Expenses} alt="Expenses" />
                Expenses
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/budgeting"
              >
                <img width={25} src={Budget} alt="Budgeting" />
                Budgeting
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/goals"
              >
                <img width={25} src={Goals} alt="Goals" />
                Goals
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/reports"
              >
                <img width={25} src={Reports} alt="Reports" />
                Reports
              </NavLink>
            </li>
          </div>
          <li>
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/profile"
            >
              <img width={25} src={Profile} alt="Profile" />
              Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
});
