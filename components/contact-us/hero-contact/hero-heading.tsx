"use client";
import { Anton, Inter } from "next/font/google";
import { motion } from "motion/react";
const antonSans = Anton({
  variable: "--font-anton-sans",
  subsets: ["latin"],
  weight: ["400"],
});
const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});
const HeroHeading = () => {
  return (
    <div className="pt-12 md:pt-25">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 20,
            stiffness: 100,
            mass: 0.5,
          },
        }}
        whileHover={{
          scale: 1.05,
          textShadow: "0 4px 12px rgba(0,0,0,0.3)",
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.95 }}
        className={`text-3xl leading-12 md:text-5xl text-center  md:text-[90px] uppercase ${antonSans.className} max-w-xs md:max-w-5xl mx-auto text-white md:tracking-[3px] md:leading-28
        `}
      >
        contact us
      </motion.p>
      <p
        className={`pt-3 text-white text-center  text-base md:text-[28px] max-w-xs md:max-w-[820px] ${interSans.variable} leading-6 md:leading-10 mx-auto`}
      >
        Partner with Synurgenix to streamline your IT operations, enhance your
        digital capabilities, and achieve sustainable growth.
      </p>
    </div>
  );
};

export default HeroHeading;
