import { Line } from "react-chartjs-2";
function LineChart({ chartData }: any) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Bitcoin Price Chart</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
export default LineChart;
