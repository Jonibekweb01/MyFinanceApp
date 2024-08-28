import React, { memo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { expensesActions } from "../redux/store";
import { Navbar } from "../components/Navbar";
import "./Expense.css";
import "./Goals.css"

const ExpenseTracker = memo(() => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses.expenses);
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);

  const handleAddExpense = () => {
    const name = inputRef.current.value;
    const amount = inputRef2.current.value;

    if (name && amount) {
      dispatch(
        expensesActions.addExpense({
          id: new Date().toISOString(), // Generate a unique ID based on timestamp
          name,
          amount,
        })
      );

      // Clear input fields after adding the expense
      inputRef.current.value = "";
      inputRef2.current.value = "";
    }
  };

  return (
    <div style={{ padding: "80px 0 30px 0" }}>
      <Navbar name={"Expense"} />
      <div className="d-flex justify-content-between">
        <div className="d-flex gap-4">
          <input
            placeholder="Expense for today . . ."
            ref={inputRef}
            type="text"
            style={{
              outline: "none",
              height: "45px",
              width: "300px",
              borderRadius: "5px",
              backgroundColor: "rgb(33 37 41)",
              color: "white",
              padding: "0 0 0 5px",
              border: "2px solid gray",
            }}
                        className="inp"
          />
          <input
            placeholder="How much?"
            ref={inputRef2}
            type="number"
            className="inp"
            style={{
              outline: "none",
              height: "45px",
              width: "110px",
              backgroundColor: "rgb(33 37 41)",
              color: "white",
              borderRadius: "5px",
              padding: "0 0 0 5px",
              border: "2px solid gray",
            }}
          />
        </div>
        <button className="expense-btn" onClick={handleAddExpense}>
          Add Expense
        </button>
      </div>
      <table className="expense-list">
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp) => (
            <tr key={exp.id}>
              <td>{exp.name}</td>
              <td>${exp.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

export default ExpenseTracker;
