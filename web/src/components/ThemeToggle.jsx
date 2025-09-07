import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import { useTheme } from "../context/ThemeProvider";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useTheme();
  return (
    <div
      onClick={() => {
        console.log("Clicked!");
        setDarkMode((prev) => !prev);
      }}
      className="cursor-pointer"
    >
      <AnimatedThemeToggler isDark={darkMode} />

      {/* <button
        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
        onClick={() => setDarkMode((prev) => !prev)}
      >
        {darkMode ? <FaMoon /> : <FaSun />}
      </button> */}
    </div>
  );
}
