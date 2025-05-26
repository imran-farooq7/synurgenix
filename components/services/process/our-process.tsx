import Name from "@/components/shared/name";
import { Anton, Inter } from "next/font/google";
import ITC from "@/public/itConsult.svg";
import SP from "@/public/sp.svg";
import IMPL from "@/public/implementation.svg";
import OGS from "@/public/ogs.svg";
import Process from "./process";
const antonSans = Anton({
  variable: "--font-anton-sans",
  subsets: ["latin"],
  weight: ["400"],
});
const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  weight: ["600", "400"],
});

const OurProcess = () => {
  return (
    <section
      className=" py-12 md:py-24 bg-no-repeat bg-cover bg-center min-h-[850px] px-6 md:px-0"
      style={{ backgroundImage: 'url("/ourProcess.svg")' }}
    >
      <div className="flex items-center flex-col text-center md:mb-15 mb-7">
        <Name name="Our Process" src="setw.svg" isWhiteVariant />
        <h2
          className={`text-[27px] font-bold md:text-7xl mt-6 mb-2 uppercase text-white ${antonSans.variable}`}
        >
          Our Process
        </h2>
        <p
          className={`text-base md:text-xl mb-10 md:mb-0 text-white text-center max-w-xs md:max-w-xl ${interSans.variable}`}
        >
          At Synurgenix, we specialize in providing comprehensive IT solutions
          tailored to your business needs.
        </p>
      </div>
      <div className="flex justify-center flex-wrap gap-y-14">
        <Process
          icon={ITC}
          title="IT Consultation"
          description="Assessing your business needs and current infrastructure."
          isLast
        />

        <Process
          icon={SP}
          title="Strategy & Planning"
          description="Crafting a tailored IT strategy for performance & security,"
          isLast
        />
        <Process
          icon={IMPL}
          title="Implementation"
          description="Deploying networks, servers, and cloud solutions."
          isLast
        />
        <Process
          icon={OGS}
          title="Ongoing Support"
          description="24/7 monitoring, maintenance, and updates."
        />
      </div>
    </section>
  );
};

export default OurProcess;
