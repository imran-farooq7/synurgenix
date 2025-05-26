"use client";
import { Anton, Inter } from "next/font/google";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import NE from "@/public/north_east.svg";

const antonSans = Anton({
  variable: "--font-anton-sans",
  subsets: ["latin"],
  weight: ["400"],
});
const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});
const HeroHeadingServices = () => {
  return (
    <div className="pt-24">
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
        className={`text-3xl leading-12 md:text-5xl text-center  md:text-[90px] uppercase ${antonSans.className} max-w-lg md:max-w-5xl mx-auto text-white md:tracking-[3px] md:leading-28
        `}
      >
        it <span className="text-[#FF8157]">infrastructure</span>
      </motion.p>
      <p
        className={`pt-3 text-white text-center  text-base md:text-[28px] max-w-xs md:max-w-[800px] ${interSans.variable} leading-6 md:leading-10 mx-auto`}
      >
        At Synurgenix, we provide robust, scalable, and secure IT infrastructure
        solutions to ensure seamless business operations.
      </p>
      <div className="flex justify-center">
        <Link
          className={`bg-white hover:scale-105 transition-all ease-in-out text-[#0A3C87] text-nowrap gap-1 items-center font-bold max-w-fit mt-4 px-5 py-3 rounded-xl flex ${interSans.variable}`}
          href={"/contact-us"}
        >
          Free Consultation
          <Image src={NE} alt="arrow" />
        </Link>
      </div>
    </div>
  );
};

export default HeroHeadingServices;
