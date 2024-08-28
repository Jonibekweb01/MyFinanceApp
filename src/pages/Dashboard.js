import React, { memo, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Navbar } from "../components/Navbar";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const Dashboard = memo(() => {
  useEffect(() => {
    // Cleanup function to ensure no chart instances are left hanging
    return () => {
      // No need to manually destroy charts in most cases
    };
  }, []);

  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
    ],
    datasets: [
      {
        label: "Rating",
        data: [20, 36, 33, 34, 27, 27, 55, 40],
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 3,
        fill: false,
      },
    ],
  };

  return (
    <div style={{ padding: "50px  0 30px 0" }}>
      <Navbar name={"Dashboard"} />
      <Line data={data} />
    </div>
  );
});

export default Dashboard;
