import { Anton, Montserrat, Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const antonSans = Anton({
  variable: "--font-anton-sans",
  subsets: ["latin"],
  weight: ["400"],
});
const monstSans = Montserrat({
  variable: "--font-mont-sans",
  weight: ["400", "600", "500"],
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-poppins-sans",
  weight: ["600"],
  subsets: ["latin"],
});

const Consultancy = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 mt-14">
      <div className="bg-[#326ec5] pr-8 flex gap-4 md:gap-8 rounded-2xl">
        <Image
          src="consult.svg"
          alt="consult"
          width={202}
          height={282}
          className="hidden md:flex"
        />
        <Image
          src="consult mobile.svg"
          alt="consult"
          width={109}
          height={205}
          className="md:hidden"
        />
        <div className=" text-white flex flex-col h-full">
          <p
            className={`${antonSans.variable} text-xl md:text-3xl pt-6 md:pt-9`}
          >
            Get a Free Consultation
          </p>
          <p
            className={`${monstSans.variable} text-base md:text-xl max-w-[270px] pt-3 `}
          >
            Use our AI tools to automate tasks, cut costs, and enhance your
            bottom line.
          </p>
          <div className=" mt-3 md:pt-8 flex gap-4">
            <Link
              href={"/our-services"}
              className={`bg-[#86B93E] text-xs md:text-base text-nowrap px-5 py-4 rounded-xl ${poppins.variable} font-semibold`}
            >
              Explore Our Services
            </Link>
            <Image
              src={"Metric Container.svg"}
              alt="mertic"
              width={60}
              height={60}
              className="hidden md:flex"
            />
            <Image
              src={"Metric Container mobile.svg"}
              alt="mertic"
              width={39}
              height={39}
              className=" md:hidden"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <Image
          src={"Experiences.svg"}
          alt="experiences"
          width={290}
          height={282}
          className="hidden md:flex"
        />
        <Image
          src={"Experiences mobile.svg"}
          alt="experiences"
          width={142}
          height={165}
          className="md:hidden"
        />
        <Image
          src={"stats.svg"}
          className="hidden md:flex"
          alt="stats"
          width={346}
          height={282}
          priority
        />
        <Image
          src={"stats mobile.svg"}
          className="md:hidden"
          alt="stats"
          width={206}
          height={165}
          priority
        />
      </div>
    </div>
  );
};

export default Consultancy;
