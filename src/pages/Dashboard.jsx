import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import erc from "../assets/erc.svg";
import KecepatanAnginGraph from "../components/KecepatanAnginGraph";
import KetinggianAirGraph from "../components/KetinggianAirGraph";
import KelembabanGraph from "../components/KelembabanGraph";
import CurahHujanGraph from "../components/CurahHujanGraph";
import MapWrapper from "../components/Map";

const Dashboard = () => {
  const [kecepatanAnginData, setKecepatanAnginData] = useState(0);
  const generateRandomKecepatanAnginData = () => {
    return (Math.random() * 10).toFixed(2);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newKecepatanAngin = generateRandomKecepatanAnginData();
      setKecepatanAnginData(newKecepatanAngin);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);


  const [ketinggianData, setKetinggianData] = useState(0);
  const generateRandomKetinggianData = () => {
    return (Math.random() * 10).toFixed(2); 
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newKetinggian = generateRandomKetinggianData();
      setKetinggianData(newKetinggian);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);


  const [kelembabanData, setKelembabanData] = useState(0);
  const generateRandomKelembabanData = () => {
    return (Math.random() * 10).toFixed(2);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newKelembaban = generateRandomKelembabanData();
      setKelembabanData(newKelembaban);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);


  const [curahHujanData, setCurahHujanData] = useState(0);
  const generateRandomCurahHujan = () => {
    return (Math.random() * 10).toFixed(2);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newCurahHujan = generateRandomCurahHujan();
      setCurahHujanData(newCurahHujan);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-screen p-4 bg-gray-200">
      {/* Main Container */}
      <div className="flex h-full gap-4">
        {/* Sidebar */}
        <Sidebar/>

        {/* Left Column (Sensor Data) */}
        <div className="flex flex-col w-1/4 gap-4 max-h-screen">
          <Card className="flex flex-col h-20 justify-center items-center">
            <div className="text-center text-base font-semibold">
              Weather Monitoring Dashboard
            </div>
          </Card>

          <Card className="flex flex-col">
            <div className="font-semibold text-sm">Kecepatan Angin</div>
            <div className="h-26 mt-3 rounded-md">
              <KecepatanAnginGraph id="KecepatanAnginGraph1" kecepatanAnginData={kecepatanAnginData} />
            </div>
          </Card>

          <Card className="flex flex-col">
            <div className="font-semibold text-sm">Ketinggian Air</div>
            <div className="h-26 mt-3 rounded-md">
              <KetinggianAirGraph id="KetinggianAirGraph1" ketinggianData={ketinggianData} />
            </div>
          </Card>

          <Card className="flex flex-col">
            <div className="font-semibold text-sm">Kelembaban</div>
            <div className="h-26 mt-3 rounded-md">
              <KelembabanGraph id="kelembabanGraph1" kelembabanData={kelembabanData} /> {/* Pass the random yawData */}
            </div>
          </Card>
        </div>

        {/* Main Column Center Column + Right Column */}
        <div className="flex flex-grow gap-4 max-h-screen">
          {/* Center Column */}
          <div className="flex flex-col w-3/5 gap-4">
            <Card className="p-4">
              <div className="font-semibold text-base">G-Connect Project Indonesia 2024</div>
              <div className="text-md font-light">
                Electronics and Instrumentation UGM research initiative aims to develop EWS for disaster-prone areas.
              </div>
            </Card>

            <Card className="p-4 font-semibold text-sm">
              Indeks UV
            </Card>

            <Card className="p-4 font-semibold text-sm">
              Intensitas Cahaya
            </Card>

            <Card className="p-4 h-full">
              <MapWrapper/>
            </Card>
          </div>

          {/* Right Column */}
          <div className="flex flex-col w-2/5 gap-4">
            <div className="grid grid-cols-2 gap-4 h-2/5">
              <Card className="flex flex-col justify">
                <div className="font-semibold text-sm">Temperatur</div>
              </Card>

              <Card className="flex flex-col justify">
                <div className="font-semibold text-sm">Tekanan Udara</div>
              </Card>

              <Card className="flex flex-col justify">
                <div className="font-semibold text-sm">Arah Angin</div>
              </Card>

              <Card className="flex flex-col justify">
                <div className="font-semibold text-sm">Hembusan Angin</div>
              </Card>
            </div>
            <Card className="flex flex-col justify h-full">
              <div className="font-semibold text-sm">Presipitasi</div>
              <div className="h-26 mt-3 rounded-md">
                <CurahHujanGraph id="Curah Hujan" curahHujanData={curahHujanData}/>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
