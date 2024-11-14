"use client";

import { useTheme } from "@/context/theme-context";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 z-20 bg-white/75 w-[3rem] h-[3rem] bg-opacity-80 border border-white border-opacity-40 rounded-full flex items-center justify-center hover:scale-110 transition-all dark:bg-gray-950 dark:bg-white/10 dark:text-white/60 backdrop-blur-xl"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
