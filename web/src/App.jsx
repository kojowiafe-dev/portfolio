import { TerminalDemo } from "./components/TerminalDemo";
import AnimatedThemeTogglerDemo from "./components/ThemeToggle";
import { AnimatedGridPattern } from "./components/magicui/animated-grid-pattern";
// import { BentoGrid } from "./components/magicui/bento-grid"
import { Dock, DockIcon } from "./components/magicui/dock";
import ThemeToggle from "./components/ThemeToggle";
import DockTheme from "./components/DockTheme";
import { Home, Settings, Search } from "lucide-react";
import {
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaMailBulk,
  FaWhatsapp,
} from "react-icons/fa";
import Gsap from "./Pages/Gsap";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white font-bold text-4xl overflow-hidden">
      {/* <Home /> */}

      <div className="h-full">
        <div className="p-12 md:p-10 flex items-center justify-center bg-transparent fixed w-full top-0 left-0 z-50 backdrop-blur-md shadow-md transition-colors duration-300 text-white space-x-8 md:space-x-20 md:text-2xl text-xl border-b border-gray-700 ">
          <div className="">Profile</div>
          <div className="">About</div>
          <div className="">Contact</div>

          <ThemeToggle />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 pt-24 h-screen items-center justify-center">
          <div className="col-span-1 h-full flex items-center justify-center">
            <div className="relative">
              <Dock iconMagnification={60} iconDistance={100}>
                <DockIcon className="bg-black/10 dark:bg-white/10">
                  <FaGithub className="size-full" />
                </DockIcon>
                <DockIcon className="bg-black/10 dark:bg-white/10">
                  <FaLinkedin className="size-full" />
                </DockIcon>
                <DockIcon className="bg-black/10 dark:bg-white/10">
                  <FaWhatsapp className="size-full" />
                </DockIcon>
                <DockIcon className="bg-black/10 dark:bg-white/10">
                  <FaMailBulk className="size-full" />
                </DockIcon>
              </Dock>
            </div>
            {/* <DockTheme /> */}

            {/* <TerminalDemo /> */}
            {/* <AnimatedGridPattern /> */}
          </div>
          <div className="hidden md:grid border-l border-gray-700 col-span-1 h-full items-center justify-center">
            Image
          </div>
        </div>
      </div>

      <Gsap />
    </div>
  );
}

export default App;
