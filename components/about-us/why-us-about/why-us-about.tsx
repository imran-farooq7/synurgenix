import CardList from "@/components/home/why us/cardsList";
import Name from "@/components/shared/name";
import { whyUsAboutCard } from "@/utils/constants";
import { Anton, Inter, Poppins } from "next/font/google";
import Link from "next/link";
import WhyUsCard from "./why-us-card";
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

const WhyUsAbout = () => {
  return (
    <section
      className=" py-12 md:py-24 bg-no-repeat bg-cover bg-center min-h-[850px] md:min-h-[1060px] px-6 md:px-0"
      style={{ backgroundImage: 'url("/why us about.svg")' }}
    >
      <div className="flex items-center flex-col text-center md:mb-15 mb-7">
        <Name name="Our Services" src="setw.svg" isWhiteVariant />
        <h2
          className={`text-[27px] font-bold md:text-7xl mt-6 mb-2 uppercase text-white ${antonSans.variable}`}
        >
          Why Choose SynuRgenix?
        </h2>
        <p
          className={`text-base md:text-xl text-white text-center max-w-xs md:max-w-xl ${interSans.variable}`}
        >
          At Synurgenix, we specialize in providing comprehensive IT solutions
          tailored to your business needs.
        </p>
      </div>
      <div className="flex flex-wrap gap-8 gap-y-8 items-center justify-center">
        {whyUsAboutCard.map((item) => (
          <WhyUsCard
            key={item.title}
            description={item.desc}
            icon={item.icon}
            title={item.title}
          />
        ))}
      </div>
      <div className="flex items-center justify-center mt-10">
        <Link
          href={"/"}
          className={`bg-[#86B93E] text-center text-white  text-xs md:text-base text-nowrap px-10 py-4 rounded-xl ${poppins.variable} font-semibold`}
        >
          Schedule a Free Consultation
        </Link>
      </div>
    </section>
  );
};

export default WhyUsAbout;
