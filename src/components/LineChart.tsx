import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChart({ chartData }: any) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Bitcoin Price Chart</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            legend: {
              display: true,
            },
          },
        }}
      />
    </div>
  );
}
export default LineChart;
