"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { motion } from "framer-motion";
import { links } from "@/lib/data";


export default function SectionDivider() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <motion.div
      className="my-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <a
        className="transition-all group"
        href={links[1].hash}
        onClick={() => {
          setActiveSection(links[1].name);
          setTimeOfLastClick(Date.now());
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.25"
          stroke="currentColor"
          className="size-10 stroke-black/80 dark:stroke-white/80 group-hover:animate-bounce"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </a>
    </motion.div>
  );
}
