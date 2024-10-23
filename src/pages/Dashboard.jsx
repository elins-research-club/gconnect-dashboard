import Card from "../components/Card";
import erc from "../assets/erc.svg";
import map from "../assets/map.svg";
import node1 from "../assets/node1.svg";

const Dashboard = () => {
  return (
    <div className="h-screen p-4 bg-E5E5E5 font-outfit">
      {/* Container Utama */}
      <div className="flex h-full gap-3.5">
        {/* Sidebar - 5% */}
        <div className="w-1/20 h-full bg-white p-4 flex flex-col items-center rounded-4xl shadow-md shadow-slate-400">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div className="flex flex-col gap-8 justify-center flex-grow">
            <div className="w-10 h-10 bg-gray-300 rounded-3xl"></div>
            <div className="w-10 h-10 bg-gray-300 rounded-3xl"></div>
            <div className="w-10 h-10 bg-gray-300 rounded-3xl"></div>
            <div className="w-10 h-10 bg-gray-300 rounded-3xl"></div>
          </div>
        </div>
        {/* Sidebar END */}

        {/* Baris Kiri - 25% */}
        <div className="flex flex-col w-1/4 gap-3.5">
          <Card className="w-full flex-1 rounded-3xl p-4 shadow-md shadow-slate-400">
            <div className="text-center font-semibold text-2xl">
              Weather Monitoring Dashboard
            </div>
          </Card>

          <Card className="w-full h-22/100 rounded-3xl p-4 shadow-md shadow-slate-400">
            <div className="font-semibold text-lg">Kecepatan Angin</div>
            <div className="h-3/4 mt-3 rounded-md">
              {" "}
              {/* Tempatkan chart di sini */}{" "}
            </div>
          </Card>

          <Card className="w-full h-22/100 rounded-3xl p-4 shadow-md shadow-slate-400">
            <div className="font-semibold text-lg">Ketinggian Air</div>
            <div className="h-3/4 mt-3 rounded-md">
              {" "}
              {/* Tempatkan chart di sini */}{" "}
            </div>
          </Card>

          <Card className="w-full h-22/100 rounded-3xl p-4 shadow-md shadow-slate-400">
            <div className="font-semibold text-lg">Tingkat Curah Hujan</div>
            <div className="h-3/4 mt-3 rounded-md">
              {" "}
              {/* Tempatkan chart di sini */}{" "}
            </div>
          </Card>

          <Card className="w-full h-22/100 rounded-3xl p-4 shadow-md shadow-slate-400">
            <div className="font-semibold text-lg">Kelembaban</div>
            <div className="h-3/4 mt-3 rounded-md">
              {" "}
              {/* Tempatkan chart di sini */}{" "}
            </div>
          </Card>
        </div>
        {/* Baris Kiri END */}

        {/* Baris Tengah - 70% */}
        <div className="flex flex-col w-7/10 max-h-screen gap-3.5">
          <Card className="w-full rounded-3xl shadow-md shadow-slate-400 items-center justify-center p-2">
            <div className="font-semibold text-lg text-start">
              G-Connect Project Indonesia 2024
            </div>
            <div className="text-md text-start font-light">
              Electronics and Instrumentation UGM research initiative, which aim
              to provide early warning system for disaster-prone areas.
            </div>
          </Card>

          <div className="flex h-95/100 flex-row gap-3.5">
            <div className="flex flex-col w-3/5 gap-3.5">
              <div className="flex flex-row gap-3.5 h-22/100">
                <Card className="h-full rounded-3xl gap-1 p-4 flex items-center w-1/2 shadow-md shadow-slate-400 flex-col">
                  <div className="text-center font-semibold self-start text-3xl">
                    Powered by
                  </div>
                  <img src={erc} alt="My Icon" className="w-full h-full" />
                </Card>

                <Card className="h-full rounded-3xl p-4 flex items-center w-1/2 shadow-md shadow-slate-400">
                  <div className="text-center font-semibold text-xl self-start">
                    Cuaca Hari Ini
                  </div>
                  <div className="text-lg"></div>
                </Card>
              </div>

              <div className="flex-1">
                <Card className="h-full w-full p-4 rounded-3xl shadow-md shadow-slate-400">
                  <div className="rounded-xl h-full">
                    {/* <img src={map} alt="My map" className="w-11/12" /> */}
                  </div>
                </Card>
              </div>
            </div>

            <div className="flex flex-col gap-3.5 flex-1">
              <div className="grid grid-cols-2 gap-3.5 w-full h-3/5">
                <Card className="w-full rounded-3xl p-4 shadow-md shadow-slate-400 items-center">
                  <div className="font-semibold text-xl self-start">
                    Temperatur
                  </div>
                  <div className="h-4/5 mt-3 rounded-md text-4xl text-center font-semibold">
                    20°C
                  </div>
                </Card>

                <Card className="w-full rounded-3xl shadow-md shadow-slate-400">
                  <div className="font-semibold text-center text-xl w-full h-max">
                    G-Connect Node 1
                  </div>
                  <div className="h-5/6 rounded-md">
                    {/* <img src={node1} alt="My node" className="h-full" /> */}
                  </div>
                </Card>

                <Card className="w-full rounded-3xl p-4 shadow-md shadow-slate-400">
                  <div className="font-semibold text-xl">Arah Angin</div>
                  <div className="h-4/5 mt-3 rounded-md">
                    {" "}
                    {/* Tempatkan radar chart di sini */}{" "}
                  </div>
                </Card>

                <Card className="w-full rounded-3xl p-4 shadow-md shadow-slate-400">
                  <div className="font-semibold text-center text-xl">
                    Kelembaban Tanah
                  </div>
                  <div className="h-4/5 mt-3 rounded-md">
                    {" "}
                    {/* Tempatkan gauge di sini */}{" "}
                  </div>
                </Card>
              </div>
              <div className="flex flex-1">
                <Card className="w-full rounded-3xl p-4 shadow-md shadow-slate-400">
                  <div className="font-semibold text-xl">Akselerometer</div>
                  <div className="h-5/6 mt-3 rounded-md">
                    {" "}
                    {/* Tempatkan chart di sini */}{" "}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
        {/* Baris Tengah END */}
      </div>
    </div>
  );
};

export default Dashboard;
