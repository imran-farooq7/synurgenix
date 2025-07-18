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

const ServiceDetails = ({
  name,
  description,
  title,
  img,
  href,
  withBG,
  isWhiteVariant,
}: ServiceDetailsProps) => {
  return (
    <section
      style={{
        backgroundImage: withBG ? 'url("/ourservicesbg2.svg")' : undefined,
      }}
      className={`${withBG ? "bg-no-repeat bg-center md:min-h-[660px]" : null}`}
    >
      <div className="mx-auto max-w-7xl py-8 md:py-24">
        <div className="flex lg:flex-row flex-wrap xl:flex-nowrap flex-col gap-8 xl:gap-14 px-5 xl:px-0">
          <div className={`flex flex-col ${withBG ? "order-2" : null}`}>
            <Name
              name={name}
              src={withBG ? "setw.svg" : "ste.svg"}
              isWhiteVariant={isWhiteVariant}
            />
            <h2
              className={`text-[27px] md:text-6xl md:mt-6 md:mb-4  uppercase ${
                withBG ? "text-white" : "text-[#1A5FC7]"
              } font-bold ${antonSans.variable}`}
            >
              {title}
            </h2>

            <p
              className={`text-base md:text-[21px]  ${
                withBG ? "text-white/80" : "text-[#6d6d6d]"
              } ${interSans.variable} font-normal `}
            >
              {description}
            </p>
            <LetOptimizeLink href={href} />
          </div>
          <Image
            src={img ?? INFRA}
            alt="infrastructure"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
