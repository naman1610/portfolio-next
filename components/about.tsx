"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { TextGenerateEffect } from "./text-generate-effect";

export default function About() {
  const { ref, inView } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="py-32 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <TextGenerateEffect
        words="I'm Naman Raj, a 21-year-old pursuing Computer Science at Vellore Institute of Technology. I’m proficient in multiple programming languages, including Java, Python, and C/C++, and have experience with popular frameworks and libraries like ReactJS, Node.js, and Scikit-learn. My certifications in AWS have equipped me with skills in cloud-based development, and I’m always eager to expand my expertise in this dynamic field. When I'm not coding, you might find me exploring new developments in AI or working on my next project. My goal is to create innovative solutions that improve user experiences and make technology more accessible. I’m excited to continue learning and growing in the tech industry and look forward to collaborating with like-minded individuals to bring new ideas to life."
        inView={inView}
      ></TextGenerateEffect>
    </motion.section>
  );
}
