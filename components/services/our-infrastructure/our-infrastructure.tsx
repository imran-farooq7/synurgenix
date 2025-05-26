import Name from "@/components/shared/name";
import { Anton, Inter } from "next/font/google";
import INFRA from "@/public/infrastructure.svg";
import Image from "next/image";
import Link from "next/link";
import NEW from "@/public/north_east_white.svg";
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

const OurInfrastructure = () => {
  return (
    <section className="mx-auto max-w-7xl py-12 md:py-24">
      <div className="flex lg:flex-row flex-wrap xl:flex-nowrap flex-col gap-8 xl:gap-14 px-5 xl:px-0">
        <div className="flex flex-col">
          <Name name="Our IT Infrastructure Solutions" src="ste.svg" />
          <h2
            className={`text-[27px] md:text-7xl md:mt-6 md:mb-8 my-4 uppercase text-[#1A5FC7] ${antonSans.variable} text-nowrap`}
          >
            IT Built for Growth
          </h2>

          <p
            className={`text-base md:text-xl text-[#6d6d6d] ${interSans.variable} font-normal `}
          >
            A strong IT infrastructure is the backbone of any modern business.
            At Synurgenix, we provide end-to-end IT infrastructure solutions
            designed to improve efficiency, security, and scalability.{" "}
          </p>

          <Link
            className={`bg-[#86B93E] hover:scale-105 transition-all ease-in-out text-white text-nowrap gap-1 mt-8 items-center font-bold max-w-fit px-5 py-3 rounded-xl flex  ${interSans.variable}`}
            href={"/contact-us"}
          >
            Let’s Optimize Your IT
            <Image src={NEW} alt="arrow" />
          </Link>
        </div>
        <Image
          src={INFRA}
          alt="infrastructure"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
    </section>
  );
};

export default OurInfrastructure;
