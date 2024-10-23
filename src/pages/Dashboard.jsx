import React from "react";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import erc from "../assets/erc.svg";
import PlotlyChart from "../components/PlotlyChart";

const Dashboard = () => {
  // Example data for different charts
  const windSpeedData = { x: ["12:00", "13:00", "14:00"], y: [5, 10, 15] };
  const waterHeightData = { x: ["12:00", "13:00", "14:00"], y: [0.5, 0.6, 1.0] };
  const rainfallData = { x: ["12:00", "13:00", "14:00"], y: [10, 20, 30] };
  const humidityData = { x: ["12:00", "13:00", "14:00"], y: [70, 65, 80] };

  return (
    <div className="h-screen p-4 bg-gray-200">
      {/* Main Container */}
      <div className="flex h-full gap-4">
        {/* Sidebar */}
        <Sidebar />

        {/* Left Column (Sensor Data) */}
        <div className="flex flex-col w-1/4 gap-4 max-h-screen">
          <Card className="flex flex-col h-24 justify-center items-center">
            <div className="text-center text-lg font-bold">
              Weather Monitoring Dashboard
            </div>
          </Card>

          <Card className="flex flex-col">
            <div className="font-semibold text-sm font-bold">Kecepatan Angin</div>
            <div className="h-16 mt-3 rounded-md">
              {/* <PlotlyChart xData={windSpeedData.x} yData={windSpeedData.y} type="line" /> */}
            </div>
          </Card>

          <Card className="flex flex-col">
            <div className="font-semibold text-sm font-bold">Ketinggian Air</div>
            <div className="h-16 mt-3 rounded-md">
              {/* <PlotlyChart xData={waterHeightData.x} yData={waterHeightData.y} type="bar" /> */}
            </div>
          </Card>

          <Card className="flex flex-col">
            <div className="font-semibold text-sm font-bold">Tingkat Curah Hujan</div>
            <div className="h-16 mt-3 rounded-md">
              {/* <PlotlyChart xData={rainfallData.x} yData={rainfallData.y} type="scatter" /> */}
            </div>
          </Card>

          <Card className="flex flex-col">
            <div className="font-semibold text-sm font-bold">Kelembaban</div>
            <div className="h-16 mt-3 rounded-md">
              {/* <PlotlyChart xData={rainfallData.x} yData={rainfallData.y} type="scatter" /> */}
            </div>
          </Card>
        </div>

        {/* Main Column */}
        <div className="flex flex-col w-3/4 gap-4 max-h-screen">
          {/* Project Description */}
          <Card className="p-4">
            <div className="font-semibold text-base font-bold">G-Connect Project Indonesia 2024</div>
            <div className="text-md font-light text-sm">
              Electronics and Instrumentation UGM research initiative aims to develop early warning systems for disaster-prone areas.
            </div>
          </Card>

          <div className="flex gap-4 h-full">
            {/* Map and Weather */}
            <div className="flex flex-col w-3/5 gap-4">
              <div className="flex gap-4 h-1/4">
                <Card className="w-1/2 flex flex-col justify-center">
                  <div className="font-semibold text-sm font-bold">Powered by</div>
                  <img src={erc} alt="ERC Logo" className="w-full h-full object-contain" />
                </Card>
                
                <Card className="w-1/2 flex flex-col justify">
                  <div className="font-semibold text-sm font-bold">Cuaca Hari Ini</div>
                </Card>
              </div>

              {/* Map placeholder */}
              <Card className="flex-1 p-4">
                <div className="rounded-lg h-full">
                  {/* Map component will go here */}
                </div>
              </Card>
            </div>

            {/* Other Data (Temperature, Node, Wind Direction, etc.) */}
            <div className="flex flex-col gap-4 w-2/5">
              <div className="grid grid-cols-2 gap-4 h-2/3">
                <Card className="flex flex-col justify">
                  <div className="font-semibold text-sm font-bold">Temperatur</div>
                  {/* <div className="text-4xl font-semibold mt-3">20°C</div> */}
                </Card>

                <Card className="flex flex-col justify">
                  <div className="font-semibold text-sm font-bold">G-Connect Node 1</div>
                  <div className="h-5/6 mt-3 rounded-md">
                    {/* Node 1 content */}
                  </div>
                </Card>

                <Card className="flex flex-col justify">
                  <div className="font-semibold text-sm font-bold">Arah Angin</div>
                  <div className="h-4/5 mt-3 rounded-md">
                    {/* Radar chart for wind direction */}
                  </div>
                </Card>

                <Card className="flex flex-col justify">
                  <div className="font-semibold text-sm font-bold">Kelembaban Tanah</div>
                  <div className="h-4/5 mt-3 rounded-md">
                    {/* Gauge for soil humidity */}
                  </div>
                </Card>
              </div>

              {/* Accelerometer */}
              <Card className="flex-1 flex flex-col justify">
                <div className="font-semibold text-sm font-bold">Akselerometer</div>
                <div className="h-5/6 mt-3 rounded-md">
                  {/* Chart will be inserted here */}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
