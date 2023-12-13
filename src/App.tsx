import { useEffect, useState } from "react";
import "./App.css";
import TimeInput from "./components/TimeInput";
import { BitCoinPriceResponse } from "./typings";
import LineChart from "./components/LineChart";
import dayjs from "dayjs";

function App() {
  const [startTime, setStartTime] = useState<string>();
  const [endTime, setEndTime] = useState<string>();

  const [chartData, setChartData] = useState();

  useEffect(() => {
    fetch(
      `https://pradeex-java.onrender.com/bitcoin?startTime=${startTime}:00&endTime=${endTime}:00`
    )
      .then((res) => res.json())
      .then((res: BitCoinPriceResponse) => {
        if (res?.success) {
          const priceList = res?.data?.coinPriceList;
          const labels = priceList.map((i) =>
            dayjs(i.updatedAt).format("HH:mm:ss")
          );

          const priceChartData = {
            labels: labels,
            datasets: [
              {
                label: "United States Dollar",
                data: priceList.map((instant) => instant.usdRate),
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
              },
              {
                label: "Euro",
                data: priceList.map((instant) => instant.eurRate),
                fill: false,
                borderColor: "rgb(75, 8, 192)",
                tension: 0.1,
              },
              {
                label: "British Pound Sterling",
                data: priceList.map((instant) => instant.gbpRate),
                fill: false,
                borderColor: "rgb(75, 192, 91)",
                tension: 0.1,
              },
            ],
          };
          setChartData(priceChartData as any);
        }
      })
      .catch();
    console.log("====================================");
    console.log(startTime, endTime);
    console.log("====================================");
  }, [startTime, endTime]);
  return (
    <>
      <TimeInput setStartTime={setStartTime} setEndTime={setEndTime} />
      {chartData && <LineChart chartData={chartData} />}
    </>
  );
}

export default App;
