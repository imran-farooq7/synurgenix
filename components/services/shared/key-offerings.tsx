import Name from "@/components/shared/name";
import { Anton, Inter } from "next/font/google";
import ITC from "@/public/itConsult.svg";
import SP from "@/public/sp.svg";
import IMPL from "@/public/implementation.svg";
import OGS from "@/public/ogs.svg";
import { KeyOfferingProps } from "@/utils/types";
import Process from "../process/process";
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

const KeyOfferings = ({
  description,
  text1,
  text2,
  text3,
  title1,
  title2,
  title3,
}: KeyOfferingProps) => {
  return (
    <section
      className=" py-12 md:py-24 bg-no-repeat bg-cover bg-center min-h-[850px] px-6 md:px-0"
      style={{ backgroundImage: 'url("/ourProcess.svg")' }}
    >
      <div className="flex items-center flex-col text-center md:mb-15 mb-7">
        <Name name="Key Offerings" src="setw.svg" isWhiteVariant />
        <h2
          className={`text-[27px] font-bold md:text-7xl mt-6 mb-2 uppercase text-white ${antonSans.variable}`}
        >
          Key Offerings
        </h2>
        <p
          className={`text-base md:text-xl mb-10 md:mb-0 text-white text-center max-w-xs md:max-w-2xl ${interSans.variable}`}
        >
          {description}
        </p>
      </div>
      <div className="flex justify-center flex-wrap gap-y-14">
        <Process icon={OGS} title={title1} description={text1} isLast />
        <Process icon={ITC} title={title2} description={text2} isLast />
        <Process icon={SP} title={title3} description={text3} />
      </div>
    </section>
  );
};

export default KeyOfferings;
