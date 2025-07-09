import Name from "@/components/shared/name";
import { Anton, Inter, Poppins } from "next/font/google";
import CardList from "./cardsList";
import Link from "next/link";
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

const WhyUs = () => {
  return (
    <section className="mx-auto max-w-7xl py-12 md:py-24 px-5">
      <div className="flex items-center flex-col text-center md:mb-15 mb-7">
        <Name name="Partner with Synurgenix" src="ste.svg" />
        <h2
          className={`text-[27px] max-w-3xl font-bold md:text-7xl mt-6 mb-2 uppercase text-[#1A5FC7] ${antonSans.variable}`}
        >
          Why Partner with Synurgenix?
        </h2>
        {/* <p
          className={`text-base md:text-xl text-[#6D6D6D] text-center max-w-xs md:max-w-xl ${interSans.variable}`}
        >
          At Synurgenix, we specialize in providing comprehensive IT solutions
          tailored to your business needs
        </p> */}
      </div>
      <CardList />
      <div className="flex items-center justify-center mt-10">
        <Link
          href={"/"}
          className={`bg-[#86B93E]  text-center text-white  text-xs md:text-base text-nowrap px-7 md:px-12 py-4 rounded-xl ${poppins.variable} font-semibold`}
        >
          Schedule a Free Consultation
        </Link>
      </div>
    </section>
  );
};

export default WhyUs;
