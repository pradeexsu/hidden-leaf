import { useEffect, useState } from "react";
import "./App.css";
import TimeInput from "./components/TimeInput";
import { BitCoinPriceResponse, CoinPriceList } from "./typings";
import LineChart from "./components/LineChart";
import dayjs from "dayjs";

function App() {
  const [startTime, setStartTime] = useState<string>();
  const [endTime, setEndTime] = useState<string>();

  const [chartData, setChartData] = useState();

  const buildLineChartData = (priceList: CoinPriceList[]) => {
    const labels = priceList.map(
      (i) =>
        dayjs(i.updatedAt).format("HH:mm:ss") +
        `Cheapest Currency : ${i.cheapestCurrency}\nCheapest Rate In USD : ${i.cheapestRateInUsd}\nExpensive Currency : ${i.expensiveCurrency}\nExpensive Rate In USD : ${i.expensiveRateInUsd}`
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
          label: "Euro price in USD",
          data: priceList.map((instant) => instant.eurRate),
          fill: false,
          borderColor: "rgb(75, 8, 192)",
          tension: 0.1,
        },
        {
          label: "British Pound price in USD",
          data: priceList.map((instant) => instant.gbpRate),
          fill: false,
          borderColor: "rgb(75, 192, 91)",
          tension: 0.1,
        },
      ],
    };
    return priceChartData;
  };
  useEffect(() => {
    fetch(
      `https://pradeex-java.onrender.com/bitcoin?startTime=${startTime}:00&endTime=${endTime}:00`
    )
      .then((res) => res.json())
      .then((res: BitCoinPriceResponse) => {
        if (res?.success) {
          const priceChartData = buildLineChartData(
            res?.data?.coinPriceList.slice(1, 10)
          );
          setChartData(priceChartData);
        }
      })
      .catch();
  }, [startTime, endTime]);
  return (
    <>
      <TimeInput setStartTime={setStartTime} setEndTime={setEndTime} />
      {chartData && <LineChart chartData={chartData} />}
    </>
  );
}

export default App;
