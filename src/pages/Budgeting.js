import React, { memo, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "../components/Navbar";
import "./Butdgeting.css";

const Budgeting = memo(() => {
  const [budgets, setBudgets] = useState([]);
  const [form, setForm] = useState({
    name: "",
    amount: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBudgets([...budgets, form]);
    setForm({ name: "", amount: "", startDate: "", endDate: "" });
  };

  return (
    <div className="container" style={{ padding: "80px  0 30px 0" }}>
      <Navbar name={"Budgeting"} />
      <form
        style={{ display: "flex", flexWrap: "wrap", columnGap: "40px" }}
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label className="form-label">Budget Name</label>
          <input
            type="text"
            className="form-control inp"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            style={{
              outline: "none",
              height: "45px",
              width: "610px",
              backgroundColor: "rgb(33 37 41)",
              color: "white",
              borderRadius: "5px",
              padding: "0 0 0 5px",
              border: "2px solid gray",
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Amount</label>
          <input
            placeholder="Amount"
            type="number"
            className="form-control inp"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            style={{
              outline: "none",
              height: "45px",
              backgroundColor: "rgb(33 37 41)",
              color: "white",
              width: "610px",
              borderRadius: "5px",
              padding: "0 0 0 5px",
              border: "2px solid gray",
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Start Date</label>
          <input
            placeholder="Start Date"
            type="date"
            className="form-control inp"
            name="startDate"
            value={form.startDate}
            onChange={handleChange}
            style={{
              outline: "none",
              height: "45px",
              width: "610px",
              borderRadius: "5px",
              padding: "0 0 0 5px",
              backgroundColor: "rgb(33 37 41)",
              color: "white",
              border: "2px solid gray",
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">End Date</label>
          <input
            placeholder="End Date"
            type="date"
            className="form-control inp"
            name="endDate"
            value={form.endDate}
            onChange={handleChange}
            style={{
              outline: "none",
              backgroundColor: "rgb(33 37 41)",
              color: "white",
              height: "45px",
              width: "610px",
              borderRadius: "5px",
              padding: "0 0 0 5px",
              border: "2px solid gray",
            }}
          />
        </div>
        <button type="submit" className="bud-btn btn btn-primary">
          Create Budget
        </button>
      </form>
      <h2>Budgets</h2>
      <ul className="list-group">
        {budgets.map((budget, index) => (
          <li key={index} className="list-group-item">
            {budget.name} - ${budget.amount} - {budget.startDate} to{" "}
            {budget.endDate}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Budgeting;
