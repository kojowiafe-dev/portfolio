import { TerminalDemo } from "./components/TerminalDemo";
import Gsap from "./Pages/Gsap";

function App() {
  return (
    <div className="bg-gray-900 text-white font-bold text-4xl overflow-hidden">
      {/* <Home /> */}

      <div className="h-full">
        <div className="p-8 flex items-center justify-center bg-transparent fixed w-full top-0 left-0 z-50 backdrop-blur-md shadow-md transition-colors duration-300 text-white space-x-20 text-2xl border-b border-gray-700">
          <div className="">Header</div>
          <div className="">Header</div>
          <div className="">Header</div>
        </div>
        <div className="bg-black grid grid-cols-2 pt-24 h-screen items-center justify-center">
          <div className="bg-black col-span-1 h-full flex items-center justify-center">
            <TerminalDemo />
          </div>
          <div className="bg-black border-l border-gray-700 col-span-1 h-full flex items-center justify-center">
            Image
          </div>
        </div>
      </div>

      <Gsap />
    </div>
  );
}

export default App;
