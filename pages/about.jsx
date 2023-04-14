import Header from "@/components/Header";
import { Chart } from "react-google-charts";

export const data = [
  ["Country", "Popularity"],
  ["Finland", 600],
  ["Sweden", 600],
  ["Norway", 600],
  ["Denmark", 600],
  ["Netherlands", 600],
  ["United States", 300],
  ["United Kingdom", 300],
  ["Bangladesh", 700],
  ["Canada", 500],
  ["Australia", 500],
  ["RU", 200],
  ["Argentina", 100],
];

const about = () => {
  return (
    <div className="bg-gray-100 h-screen p-4">
      <Header />

      <div className="w-full p-4 border rounded-lg bg-white">
        <div>
          <Chart
            chartEvents={[
              {
                eventName: "select",
                callback: ({ chartWrapper }) => {
                  const chart = chartWrapper.getChart();
                  const selection = chart.getSelection();
                  if (selection.length === 0) return;
                  const region = data[selection[0].row + 1];
                  console.log("Selected : " + region);
                },
              },
            ]}
            chartType="GeoChart"
            width="100%"
            height="400px"
            data={data}
          />
        </div>

        <div className="text-center mt-20">
          <p>&copy;2023 All Rights Reserved by Nadim Chowdhury</p>
          <p>https://github.com/Nadim-Chowdhury</p>
          <p>https://www.linkedin.com/in/nadim-chowdhury</p>
        </div>
      </div>
    </div>
  );
};

export default about;
