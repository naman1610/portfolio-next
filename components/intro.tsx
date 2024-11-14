"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import ProfilePictureImg from "@/public/profile-picture.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FlipWords } from "@/components/flip-words";
import {BsArrowRight, BsLinkedin} from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import {FaGithubSquare} from "react-icons/fa";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const words = ["Software Engineer", "Web Developer", "Student", "Tech Enthusiast"];
  return (
    <section
      ref={ref}
      id="home"
      className="mb-30 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.25,
            }}
          >
            <Image
              src={ProfilePictureImg}
              alt="Naman Portrait"
              width="192"
              height="192"
              quality="100"
              priority={true}
              className="h-32 w-32 rounded-full object-cover border-[0.35rem] border-white border-opacity-75 shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
           👋🏼
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-3xl font-medium !leading-[1.5] sm:text-5xl text-gray-900 dark:text-gray-100"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <div className="flex flex-col">
          <span>
            Hi, I'm <span className="font-bold"> Naman,</span>
          </span>
          <span>
            a <span className="font-bold"><FlipWords words={words} duration={2500}/></span>
          </span>
        </div>
      </motion.h1>

      <motion.div
          className="flex flex-col sm:flex-row items-center justify-center px-4 text-lg font-medium gap-5"
          initial={{opacity: 0, y: 100}}
          animate={{opacity: 1, y: 0}}
          transition={{
            delay: 0.1,
          }}
      >
        <Link
            href="#contact"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 hover:bg-gray-950 dark:bg-gray-100 dark:text-black transition-all"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
        >
          Contact me <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/>
        </Link>

        <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 transition-all cursor-pointer borderBlack dark:bg-white/10 dark:text-white"
            href="/Naman_Resume.pdf" download={true}
        >
          Download my Resume <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/>
        </a>

        <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://linkedin.com/in/naman-raj10/"
            target="_blank"
        >
          <BsLinkedin/>
        </a>

        <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-110 hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/naman1610"
            target="_blank"
        >
          <FaGithubSquare/>
        </a>
      </motion.div>
    </section>
  );
}
