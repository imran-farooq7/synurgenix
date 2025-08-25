import { StatProps } from "@/utils/types";
import { Anton, Inter } from "next/font/google";
import SlotCounter from "react-slot-counter";
const antonSans = Anton({
  variable: "--font-anton-sans",
  subsets: ["latin"],
  weight: ["400"],
});
const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  weight: ["300"],
});

const Stat = ({ title, description }: StatProps) => {
  return (
    <div className="text-[#86B93E] mt-6 lg:mt-12 flex flex-col gap-2 items-center">
      <SlotCounter
        value={title}
        charClassName="text-6xl md:text-7xl"
        animateOnVisible={{
          triggerOnce: false,
          rootMargin: "0px 0px -100px 0px",
        }}
      />
      {/* <p  className={`text-6xl md:text-7xl ${antonSans.variable}`}>{title}</p> */}
      <p className={`text-base md:text-2xl ${interSans.variable} font-light`}>
        {description}
      </p>
    </div>
  );
};

export default Stat;
