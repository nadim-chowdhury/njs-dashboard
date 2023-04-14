import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Organic", "Paid", "Reffered", "Free"],
  datasets: [
    {
      label: "Types of Customers",
      data: [12, 19, 3, 5],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
      ],
    },
  ],
};

const PieChart = () => {
  return (
    <div className="w-full col-span-1 p-4 border rounded-lg bg-white">
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
