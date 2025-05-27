import Name from "@/components/shared/name";
import { Anton, Inter } from "next/font/google";
import EXP from "@/public/expanding.svg";
import EXPMOB from "@/public/expandingMobile.svg";
import Image from "next/image";
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

const Expanding = () => {
  return (
    <section className="mx-auto max-w-7xl py-12 md:py-24 px-5">
      <div className="flex items-center flex-col text-center md:mb-15 mb-7">
        <Name name="Expanding IT Reach" src="ads.svg" />
        <h2
          className={`text-[27px] font-bold md:text-7xl mt-6 mb-2 uppercase text-[#1A5FC7] ${antonSans.variable}`}
        >
          Expanding IT Reach
        </h2>
        <p
          className={`text-base md:text-xl text-[#6D6D6D] text-center max-w-xs md:max-w-2xl ${interSans.variable}`}
        >
          Whether your business operates locally or globally, our expert teams
          ensure smooth deployments, maintenance, and support—anytime, anywhere.
        </p>
      </div>
      <Image src={EXP} alt="Expanding IT Reach" className="hidden md:flex" />
      <Image
        src={EXPMOB}
        alt="Expanding IT Reach"
        className="md:hidden mx-auto"
      />
    </section>
  );
};

export default Expanding;
