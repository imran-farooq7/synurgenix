import Name from "@/components/shared/name";
import { Anton, Inter, Poppins } from "next/font/google";
import V1 from "@/public/vision1.svg";
import V2 from "@/public/vision2.svg";
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
const poppins = Poppins({
  variable: "--font-poppins-sans",
  weight: ["600"],
  subsets: ["latin"],
});

const Vision = () => {
  return (
    <section className="mx-auto max-w-7xl py-12 md:py-24 px-5">
      <div className="flex items-center flex-col text-center md:mb-15 mb-7">
        <Name name="Our Vision for Your Future" src="ste.svg" />
        <h2
          className={`text-[27px] max-w-4xl font-bold md:text-7xl mt-6 mb-6 uppercase text-[#1A5FC7] ${antonSans.variable}`}
        >
          Our Vision for Your Future
        </h2>
        <p
          className={`text-base md:text-xl text-[#6D6D6D] text-center max-w-xs md:max-w-xl ${interSans.variable}`}
        >
          Synurgenix is more than just an IT service provider; we are architects
          of digital transformation
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-3">
        <Image src={V1} alt="our vision" />
        <Image src={V2} alt="our vision" />
      </div>
    </section>
  );
};

export default Vision;
