import { useState, useEffect } from "react";
import socket from "../utils/socket";

import Card from "../components/Card";
import Sidebar from "../components/Sidebar";

import KecepatanAnginGraph from "../components/KecepatanAngin";
import KetinggianAirGraph from "../components/KetinggianAir";
import KelembabanGraph from "../components/Kelembaban";
import CurahHujanGraph from "../components/CurahHujan";
import TekananUdara from "../components/TekananUdara";
import MapWrapper from "../components/Map";

const Dashboard = () => {
  const [kecepatanAnginData, setKecepatanAnginData] = useState(0);
  const generateRandomKecepatanAnginData = () => {
    return (Math.random() * (5.5 - 4) + 4).toFixed(1);
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
    return (Math.random() * (1980 - 1940) + 1940).toFixed(1); 
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
    return Math.floor(Math.random() * (65 - 60) + 60);
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
    return (Math.random() * (19 - 18) + 18).toFixed(1);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newCurahHujan = generateRandomCurahHujan();
      setCurahHujanData(newCurahHujan);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);


  const [tekananUdaraData, setTekananUdaraData] = useState(0);
  const generateRandomTekananUdara = () => {
    return (Math.random() * (1005 - 1003) + 1003).toFixed(1);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTekananUdara = generateRandomTekananUdara();
      setTekananUdaraData(newTekananUdara);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);


  const [indexUVData, setIndexUVData] = useState(0);
  const generateRandomIndexUVUdara = () => {
    return (Math.random() * (7.0 - 5.5) + 5.5).toFixed(1);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndexUV = generateRandomIndexUVUdara();
      setIndexUVData(newIndexUV);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);


  const [intensitasCahayaData, setIntensitasCahayaData] = useState(0);
  const generateRandomIntensitasCahaya = () => {
    return (Math.random() * (7.0 - 5.5) + 5.5).toFixed(1);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIntensitasCahaya = generateRandomIntensitasCahaya();
      setIntensitasCahayaData(newIntensitasCahaya);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);


  const [arahAnginData, setArahAnginData] = useState(0);
  const generateRandomArahAngin = () => {
    return Math.floor(Math.random() * (230 - 220) + 220);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newArahAngin = generateRandomArahAngin();
      setArahAnginData(newArahAngin);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);


  const [hembusanAnginData, setHembusanAnginData] = useState(0);
  const generateRandomHembusanAngin = () => {
    return Math.floor(Math.random() * (230 - 220) + 220);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newHembusanAngin = generateRandomHembusanAngin();
      setHembusanAnginData(newHembusanAngin);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);


  const [suhuData, setSuhuData] = useState(0);
  const generateRandomSuhuData = () => {
    return (Math.random() * (35 - 30) + 30).toFixed(1);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newSuhuData = generateRandomSuhuData();
      setSuhuData(newSuhuData);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // const [socketData, setSocketData] = useState({});

  // useEffect(() => {
  //   socket.on("connect", () => {
  //     console.log("Connected to Socket.IO server");
  //   });

  //   socket.on("sensor_data", (mess) => {
  //     const dataArray = mess.split(",");
  //     const data = {
  //       distance:       parseFloat(dataArray[0]),
  //       lightIntensity: parseFloat(dataArray[1]),
  //       uvIndex:        parseFloat(dataArray[2]),
  //       temperature:    parseFloat(dataArray[3]),
  //       humidity:       parseFloat(dataArray[4]),
  //       windSpeed:      parseFloat(dataArray[5]),
  //       gustSpeed:      parseFloat(dataArray[6]),
  //       windDirection:  parseFloat(dataArray[7]),
  //       rainfall:       parseFloat(dataArray[8]),
  //       absPressure:    parseFloat(dataArray[9]),
  //     }
      
  //     console.log(data);

  //     setSocketData({...data})
  //   });
  // })

  // useEffect(() => {
  //   socket.on("connect", () => {
  //     console.log("Connected to Socket.IO server");
  //   });
  
  //   socket.on("sensor_data", (mess) => {
  //     // console.log("Raw sensor data received:", mess); // Log raw data
  //     const dataArray = mess.split(",");
  //     const data = {
  //       distance: parseFloat(dataArray[0]),
  //       lightIntensity: parseFloat(dataArray[1]),
  //       uvIndex: parseFloat(dataArray[2]),
  //       temperature: parseFloat(dataArray[3]),
  //       humidity: parseFloat(dataArray[4]),
  //       windSpeed: parseFloat(dataArray[5]),
  //       gustSpeed: parseFloat(dataArray[6]),
  //       windDirection: parseFloat(dataArray[7]),
  //       rainfall: parseFloat(dataArray[8]),
  //       absPressure: parseFloat(dataArray[9]),
  //     };
  
  //     setSocketData(data);
  //   });
  
  //   return () => {
  //     socket.off("sensor_data");
  //     socket.off("connect");
  //   };
  // }, []);

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
              <KecepatanAnginGraph id="windSpeed" kecepatanAnginData={kecepatanAnginData} />
            </div>
          </Card>

          <Card className="flex flex-col">
            <div className="font-semibold text-sm">Ketinggian Air</div>
            <div className="h-26 mt-3 rounded-md">
              <KetinggianAirGraph id="distance" ketinggianAirData={ketinggianData} />
            </div>
          </Card>

          <Card className="flex flex-col">
            <div className="font-semibold text-sm">Kelembaban</div>
            <div className="h-26 mt-3 rounded-md">
              <KelembabanGraph id="humidity" kelembabanData={kelembabanData} />
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
                Pengembangan alat monitoring kondisi cuaca sebagai EWS (Early Warning System) untuk penanggulangan bencana
              </div>
            </Card>

            <Card className="p-4 font-semibold text-sm">
              Indeks UV = {indexUVData}
            </Card>

            <Card className="p-4 font-semibold text-sm">
              Intensitas Cahaya = {intensitasCahayaData} lux
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
                <div className="font-semibold text-sm">‎</div>
                <div className="font-semibold text-4xl text-center align-baseline">{suhuData}° C</div>
              </Card>

              <Card className="flex flex-col justify">
                <div className="font-semibold text-sm">Tekanan Udara</div>
                <div className="font-semibold text-sm">‎ </div>
                <div className="font-semibold text-4xl text-center align-baseline">{tekananUdaraData}</div>
              </Card>

              <Card className="flex flex-col justify">
                <div className="font-semibold text-sm">Arah Angin</div>
                <div className="font-semibold text-sm">‎ </div>
                <div className="font-semibold text-4xl text-center align-baseline">{arahAnginData}°</div>
              </Card>

              <Card className="flex flex-col justify">
                <div className="font-semibold text-sm">Hembusan Angin</div>
                <div className="font-semibold text-sm">‎ </div>
                <div className="font-semibold text-4xl text-center align-baseline">{hembusanAnginData}</div>
              </Card>
            </div>
            <Card className="flex flex-col justify h-full">
              <div className="font-semibold text-sm">Presipitasi</div>
              <div className="h-26 mt-3 rounded-md">
                <CurahHujanGraph id="rainfall" curahHujanData={curahHujanData}/>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
