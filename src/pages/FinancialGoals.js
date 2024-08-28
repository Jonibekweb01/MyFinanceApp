import React, { memo, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "../components/Navbar";
import "./Goals.css";

const FinancialGoals = memo(() => {
  const [goals, setGoals] = useState([]);
  const [form, setForm] = useState({
    name: "",
    targetAmount: "",
    targetDate: "",
    progress: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGoals([...goals, form]);
    setForm({ name: "", targetAmount: "", targetDate: "", progress: "" });
  };

  return (
    <div className="container" style={{ padding: "80px  0 30px 0" }}>
      <Navbar name={"FinancilGoals"} />
      <form
        style={{ display: "flex", flexWrap: "wrap", columnGap: "40px" }}
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label className="form-label">Goal Name</label>
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
              borderRadius: "5px",
              padding: "0 0 0 5px",
              border: "2px solid gray",
              backgroundColor: "rgb(33 37 41)",
              color: "white",
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Target Amount</label>
          <input
            type="number"
            className="form-control inp"
            name="targetAmount"
            value={form.targetAmount}
            onChange={handleChange}
            placeholder="Amount"
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
          <label className="form-label">Target Date</label>
          <input
            type="date"
            className="form-control inp"
            name="targetDate"
            value={form.targetDate}
            onChange={handleChange}
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
          <label className="form-label">Current Progress</label>
          <input
            type="number"
            className="form-control inp"
            name="progress"
            value={form.progress}
            onChange={handleChange}
            placeholder="Progress"
            style={{
              outline: "none",
              height: "45px",
              width: "610px",
              borderRadius: "5px",
              backgroundColor: "rgb(33 37 41)",
              color: "white",
              padding: "0 0 0 5px",
              border: "2px solid gray",
            }}
          />
        </div>
        <button type="submit" className="bud-btn btn btn-primary">
          Set Goal
        </button>
      </form>
      <h2>Goals</h2>
      <ul className="list-group">
        {goals.map((goal, index) => (
          <li key={index} className="list-group-item">
            {goal.name} - ${goal.targetAmount} by {goal.targetDate} - Progress:
            ${goal.progress}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default FinancialGoals;
