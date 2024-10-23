import Plot from "react-plotly.js";

const PlotlyChart = ({ title, xData, yData, type }) => {
  return (
    <div className="w-full">
      <Plot
        data={[
          {
            x: xData,
            y: yData,
            type: type || "scatter",
            mode: "lines+markers",
            marker: { color: "blue" },
          },
        ]}
        layout={{ title, autosize: true }}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default PlotlyChart;
