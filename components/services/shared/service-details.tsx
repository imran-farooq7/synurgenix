import Name from "@/components/shared/name";
import { Anton, Inter } from "next/font/google";
import INFRA from "@/public/infrastructure.svg";
import Image from "next/image";
import { ServiceDetailsProps } from "@/utils/types";
import LetOptimizeLink from "./let-optimize-link";
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

const ServiceDetails = ({ name, description, title }: ServiceDetailsProps) => {
  return (
    <section className="mx-auto max-w-7xl py-12 md:py-24">
      <div className="flex lg:flex-row flex-wrap xl:flex-nowrap flex-col gap-8 xl:gap-14 px-5 xl:px-0">
        <div className="flex flex-col">
          <Name name={name} src="ste.svg" />
          <h2
            className={`text-[27px] md:text-6xl md:mt-6 md:mb-1.5 my-4 uppercase text-[#1A5FC7] font-bold ${antonSans.variable}`}
          >
            {title}
          </h2>

          <p
            className={`text-base md:text-[21px]  text-[#6d6d6d] ${interSans.variable} font-normal `}
          >
            {description}
          </p>
          <LetOptimizeLink />
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

export default ServiceDetails;
