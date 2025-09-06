// import Home from "./Pages/Home";
import Gsap from "./Pages/Gsap";

function App() {
  return (
    <div className="bg-gray-900 text-white font-bold text-4xl overflow-hidden">
      {/* <Home /> */}

      <div className="h-full">
        <div className="p-8 flex items-center justify-center bg-transparent fixed w-full top-0 left-0 z-50 backdrop-blur-md shadow-md transition-colors duration-300 text-white space-x-20 text-2xl">
          <div className="">Header</div>
          <div className="">Header</div>
          <div className="">Header</div>
        </div>
        <div className="bg-yellow-300 grid grid-cols-2 pt-24 h-screen">
          <div className="bg-blue-950 col-span-1">Bio</div>
          <div className="bg-blue-500 col-span-1">Image</div>
        </div>
      </div>

      <Gsap />
    </div>
  );
}

export default App;
