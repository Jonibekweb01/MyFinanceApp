import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const ExpenseTracking = lazy(() => import("./pages/ExpenseTracking"));
const Budgeting = lazy(() => import("./pages/Budgeting"));
const FinancialGoals = lazy(() => import("./pages/FinancialGoals"));
const ReportsAndInsights = lazy(() => import("./pages/ReportsAndInsights"));
const UserProfile = lazy(() => import("./pages/UserProfile"));

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/expenses" element={<ExpenseTracking />} />
            <Route path="/budgeting" element={<Budgeting />} />
            <Route path="/goals" element={<FinancialGoals />} />
            <Route path="/reports" element={<ReportsAndInsights />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
