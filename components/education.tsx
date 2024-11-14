"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Education() {
  const { ref, inView } = useSectionInView("Education");
  const { theme } = useTheme();

  return (
    <section
      id="education"
      ref={ref}
      className="scroll-mt-32 my-32 sm:mb-40"
    >
      <SectionHeading>My education</SectionHeading>
      <VerticalTimeline
        lineColor=""
        animate={true}
      >
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
            visible={inView}
              contentStyle={{
                background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                borderRadius: "10px",
              }}
              contentArrowStyle={{
                borderRight: theme === "light" ? "0.4rem solid #f3f4f6" : "0.4rem solid rgba(255, 255, 255, 0.05)",
              }}
              date={item.date}
              dateClassName="text-sky-900 dark:text-sky-100"
              icon={item.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize text-sky-900 dark:text-sky-100">{item.title}</h3>
              <p className="font-normal !mt-0 text-sky-900 dark:text-sky-100">{item.location}</p>
              <p className="!mt-1 !font-normal text-sky-900/75 dark:text-sky-100/75">{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
