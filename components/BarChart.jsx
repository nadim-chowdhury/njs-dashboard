import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Previous Week",
          data: [6812, 5698, 8452, 3648, 8517, 5682, 9516],
          backgroundColor: "rgba(255, 99, 132, 0.8)",
        },
        {
          label: "Current Week",
          data: [8541, 4256, 6873, 3214, 4587, 6125, 7514],
          backgroundColor: "rgba(53, 162, 235, 0.8)",
        },
      ],
    });

    setChartOptions({
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Daily Revenue",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);

  return (
    <div className="w-full md:col-span-2 relative m-auto p-4 border rounded-lg bg-white">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
