import Sidebar from "./components/Sidebar"
function App() {
  return (
    <div class="h-screen flex flex-col">
      {/* Navbar Start */}
      <nav class="bg-white pt-4 pb-4 border-b-2 border-slate-700 h-14">
        <div class="container flex items-center gap-3 ml-2">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <div class="font-mono font-semibold text-lg">G-Connect Project 2024</div>
        </div>
      </nav>
      {/* Navbar End */}

      {/* Container Start */}
      <div class="flex flex-row flex-1">
        <div class="flex flex-col mt-1 max-w-full p-4 flex-1">
          <div class="flex flex-row h-3/4 p-3 gap-5">
            <div class="w-2/3 border-2 border-black rounded-4xl"></div>
            <div class="w-1/3 flex flex-col gap-5">
              <div class="h-1/2 border-2 border-black rounded-4xl"></div>
              <div class="h-1/2 border-2 border-black rounded-4xl"></div>
            </div>
            <div class="w-2/3 border-2 border-black rounded-4xl"></div>
            <div class="w-1/3 flex flex-col gap-5">
              <div class="h-1/2 border-2 border-black rounded-4xl"></div>
              <div class="h-1/2 border-2 border-black rounded-4xl"></div>
            </div>
          </div>
          <div class="flex flex-row flex-1 p-3 gap-4">
            <div class="w-1/2 border-2 border-black rounded-4xl"></div>
            <div class="flex flex-row flex-1 gap-5">
              <div class="w-1/3 border-2 border-black rounded-4xl"></div>
              <div class="w-1/3 border-2 border-black rounded-4xl"></div>
              <div class="w-1/3 border-2 border-black rounded-4xl"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Container End */}
    </div>
  );
}

export default App;
