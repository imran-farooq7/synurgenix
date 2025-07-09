import Name from "@/components/shared/name";
import { Anton, Inter } from "next/font/google";
import ServicesList from "./servicesList";
const antonSans = Anton({
  variable: "--font-anton-sans",
  subsets: ["latin"],
  weight: ["400"],
});
const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  weight: ["400"],
});

const Services = () => {
  return (
    <section
      className=" py-12 md:py-24 bg-no-repeat bg-cover bg-center min-h-[850px] md:min-h-[1060px] px-6 md:px-0"
      style={{ backgroundImage: 'url("/services bg.svg")' }}
    >
      <div className="flex items-center flex-col text-center md:mb-15 mb-7">
        <Name name="Our Services" isWhiteVariant src="setw.svg" />
        <h2
          className={`text-[27px] font-bold md:text-7xl mt-6 mb-2 uppercase text-white ${antonSans.variable}`}
        >
          Our Core Services
        </h2>
        <p
          className={`text-base md:text-xl text-white/70 text-center max-w-xs md:max-w-xl ${interSans.variable}`}
        >
          Synurgenix offers a comprehensive portfolio of managed IT services
          designed to meet the diverse needs of modern international businesses.
        </p>
      </div>
      <ServicesList />
    </section>
  );
};

export default Services;
