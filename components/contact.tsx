"use client";

import { sendEmail } from "@/actions/sendEmail";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="my-32 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="relative h-full w-full">
        <div className="absolute z-[-2] md:scale-150 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#2d2d2e_1px,transparent_1px)]"></div>

        <SectionHeading>Contact me</SectionHeading>

        <p className="text-gray-700 dark:text-white/80 text-pretty">
          Please contact me directly at{" "}
          <a
            className="underline"
            href="mailto:naman16102003@gmail.com"
          >
            naman16102003@gmail.com
          </a>{" "}
          or through this form.
        </p>

        <form
          className="mt-10 flex flex-col dark:text-black"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent successfully!");
          }}
        >
          <input
            className="h-14 px-4 rounded-lg dark:bg-white/15 border border-black/15 dark:border-white/15 dark:text-white transition-all outline-none focus:rounded-2xl backdrop-blur-xl"
            name="senderEmail"
            type="email"
            required
            autoComplete="true"
            maxLength={100}
            placeholder="Your email"
          />
          <textarea
            className="h-52 my-3 rounded-lg p-4 dark:bg-white/15 border border-black/15 dark:border-white/15 dark:text-white transition-all outline-none resize-none focus:rounded-2xl backdrop-blur-xl"
            name="message"
            placeholder="Your message"
            required
            autoCorrect="true"
            maxLength={5000}
          />
          <SubmitBtn />
        </form>
      </div>
    </motion.section>
  );
}
