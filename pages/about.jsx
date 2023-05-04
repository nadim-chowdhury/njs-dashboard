import Header from "@/components/Header";
import Link from "next/link";
import { Chart } from "react-google-charts";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

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
    <div className="bg-gray-100 h-screen w-full">
      <Header />

      <div className="p-4 border rounded-lg bg-white m-4">
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
          <h3>&copy; 2023 All Rights Reserved By Nadim Chowdhury</h3>

          <div className="flex justify-center">
            <Link
              href="https://www.linkedin.com/in/nadim-chowdhury"
              className="text-xl p-2 text-gray-500 hover:text-blue-500 border-2 rounded-full"
            >
              <BsLinkedin />
            </Link>
            <Link
              href="https://github.com/nadim-chowdhury"
              className="text-xl p-2 text-gray-500 hover:text-blue-500 border-2 rounded-full"
            >
              <BsGithub />
            </Link>
            <Link
              href="https://twitter.com/nadim_ch0wdhury"
              className="text-xl p-2 text-gray-500 hover:text-blue-500 border-2 rounded-full"
            >
              <BsTwitter />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
