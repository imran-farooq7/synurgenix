import CardList from "@/components/home/why us/cardsList";
import Name from "@/components/shared/name";
import { ourTeam } from "@/utils/constants";
import { Anton, Inter, Poppins } from "next/font/google";
import Link from "next/link";
import TeamCard from "./team-card";
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

const OurTeam = () => {
  return (
    <section className="mx-auto max-w-7xl py-12 md:pt-24 md:pb-18 px-5">
      <div className="flex items-center flex-col text-center md:mb-15 mb-7">
        <Name name="Our Team" src="ste.svg" />
        <h2
          className={`text-[27px] font-bold md:text-7xl mt-6 mb-2 uppercase text-[#1A5FC7] ${antonSans.variable}`}
        >
          MEET OUR TEAM
        </h2>
        <p
          className={`text-base md:text-xl text-[#6D6D6D] text-center max-w-xs md:max-w-xl ${interSans.variable}`}
        >
          At Synurgenix, we specialize in providing comprehensive IT solutions
          tailored to your business needs
        </p>
      </div>
      <div className="flex  flex-wrap xl:flex-nowrap  gap-6 md:gap-8 items-center justify-center">
        {ourTeam.map((member) => (
          <TeamCard
            key={member.name}
            image={member.image}
            name={member.name}
            position={member.position}
          />
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
