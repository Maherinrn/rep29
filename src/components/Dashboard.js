import React, { useState } from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { FaThumbsUp, FaShare, FaCommentDots } from "react-icons/fa";

// Register ChartJS components
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [startDate, setStartDate] = useState("2024-01-01");
  const [endDate, setEndDate] = useState("2024-03-31");

  const pieData = {
    labels: ["Reel", "Carousel", "Static"],
    datasets: [
      {
        data: [45, 30, 25],
        backgroundColor: ["#FF5733", "#33FF57", "#3383FF"],
        hoverBackgroundColor: ["#FF8661", "#61FF86", "#61A3FF"],
      },
    ],
  };

  const lineData = {
    labels: Array.from({ length: 30 }, (_, i) => `2024-01-${i + 1}`),
    datasets: [
      {
        label: "Likes",
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 6000)),
        borderColor: "#FF5733",
        pointBackgroundColor: "#FF5733",
        tension: 0.4,
        fill: false,
      },
      {
        label: "Shares",
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 3000)),
        borderColor: "#33FF57",
        pointBackgroundColor: "#33FF57",
        tension: 0.4,
        fill: false,
      },
      {
        label: "Comments",
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 2000)),
        borderColor: "#3383FF",
        pointBackgroundColor: "#3383FF",
        tension: 0.4,
        fill: false,
      },
    ],
  };

  const barData = {
    labels: ["Reel", "Carousel", "Static"],
    datasets: [
      {
        label: "Likes",
        data: [30000, 25000, 20000],
        backgroundColor: "#FF5733",
        borderRadius: 8,
        borderWidth: 1,
        hoverBackgroundColor: "#FF8661",
        barThickness: 20, // Adjusted thickness to make bars narrower
      },
      {
        label: "Shares",
        data: [20000, 15000, 12000],
        backgroundColor: "#33FF57",
        borderRadius: 8,
        borderWidth: 1,
        hoverBackgroundColor: "#61FF86",
        barThickness: 20, // Adjusted thickness to make bars narrower
      },
      {
        label: "Comments",
        data: [15000, 10000, 8000],
        backgroundColor: "#3383FF",
        borderRadius: 8,
        borderWidth: 1,
        hoverBackgroundColor: "#61A3FF",
        barThickness: 20, // Adjusted thickness to make bars narrower
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        backgroundColor: "#121212",
        titleColor: "#00FFFF",
        bodyColor: "#FFFFFF",
      },
      legend: {
        labels: {
          fontColor: "#FFFFFF",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#FFFFFF",
        },
        grid: {
          color: "#2E2E2E",
        },
      },
      y: {
        ticks: {
          color: "#FFFFFF",
        },
        grid: {
          color: "#2E2E2E",
        },
      },
    },
  };

  const containerStyle = {
    backgroundColor: "#121212",
    color: "#FFFFFF",
    minHeight: "100vh",
    padding: "20px",
    fontFamily: "'Roboto', sans-serif",
  };

  const navbarStyle = {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#1E1E1E",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
  };

  const headerStyle = {
    color: "#00FFFF",
    fontSize: "2.5rem",
    fontWeight: "bold",
  };

  const buttonStyle = {
    backgroundColor: "#3383FF",
    color: "#FFFFFF",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s",
  };

  const buttonHoverStyle = {
    backgroundColor: "#61A3FF",
  };

  const filterContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    marginBottom: "30px",
    flexWrap: "wrap",
  };

  const inputStyle = {
    backgroundColor: "#1E1E1E",
    color: "#FFFFFF",
    border: "1px solid #00FFFF",
    borderRadius: "5px",
    padding: "5px 10px",
    width: "150px",
    textAlign: "center",
  };

  const rowStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "15px",
    marginBottom: "20px",
  };

  const chartContainerStyle = {
    backgroundColor: "#1E1E1E",
    borderRadius: "10px",
    padding: "15px",
    boxShadow: "0px 0px 15px rgba(51, 255, 255, 0.5)",
  };

  const cardStyle = {
    backgroundColor: "#1E1E1E",
    color: "#FFFFFF",
    borderRadius: "10px",
    padding: "15px",
    boxShadow: "0px 0px 10px rgba(51, 255, 255, 0.5)",
    textAlign: "center",
  };

  const smallBoxStyle = {
    backgroundColor: "#1E1E1E",
    color: "#FFFFFF",
    borderRadius: "8px",
    padding: "10px",
    boxShadow: "0px 0px 8px rgba(51, 255, 255, 0.3)",
    width: "220px",
    margin: "10px auto",
  };

  return (
    <div style={containerStyle}>
      {/* Sticky Navbar */}
      <div style={navbarStyle}>
        <div style={headerStyle}>Instametrics</div>
        <button
          style={buttonStyle}
          onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
        >
          Get Answer with AI
        </button>
      </div>

      {/* Date Filters */}
      <div style={filterContainerStyle}>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          style={inputStyle}
        />
        <span style={{ color: "#00FFFF" }}>to</span>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          style={inputStyle}
        />
      </div>

      {/* Row 1: Pie Chart, Engagement Summary, Total Engagement */}
      <div style={rowStyle}>
        <div style={chartContainerStyle}>
          <h3>Post Distribution</h3>
          <Pie data={pieData} />
        </div>
        <div style={cardStyle}>
          <h3>Engagement Summary</h3>
          <div style={smallBoxStyle}>
            <p><strong>Reel:</strong> 61,972%</p>
          </div>
          <div style={smallBoxStyle}>
            <p><strong>Carousel:</strong> 42,838%</p>
          </div>
          <div style={smallBoxStyle}>
            <p><strong>Static:</strong> 30,465%</p>
          </div>
        </div>
        <div style={cardStyle}>
          <h3>Total Engagement</h3>
          <div style={smallBoxStyle}>
            <p><FaThumbsUp /> Likes: <strong>176,549</strong></p>
          </div>
          <div style={smallBoxStyle}>
            <p><FaShare /> Shares: <strong>34,395</strong></p>
          </div>
          <div style={smallBoxStyle}>
            <p><FaCommentDots /> Comments: <strong>22,546</strong></p>
          </div>
        </div>
      </div>

      {/* Row 2: Line Graph */}
      <div style={chartContainerStyle}>
        <h3>Engagement Over Time</h3>
        <Line data={lineData} options={chartOptions} />
      </div>

      {/* Row 3: Bar Graph */}
      <div style={chartContainerStyle}>
        <h3>Engagement by Type</h3>
        <Bar data={barData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Dashboard;
