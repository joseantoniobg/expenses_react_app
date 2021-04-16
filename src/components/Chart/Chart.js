import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointsValues = props.dataPoints.map((dp) => dp.value);
  const totalMaximum = dataPointsValues.reduce((a, b) => a + b, 0);

  return (
    <div className="chart">
      <div className="chart-inner">
        {props.dataPoints.map((data) => (
          <ChartBar
            key={data.label}
            value={data.value}
            maxValue={totalMaximum}
            label={data.label}
          />
        ))}
      </div>
      <div className="chart-label">
        <h2>Total Amount: {totalMaximum}</h2>
      </div>
    </div>
  );
};

export default Chart;
