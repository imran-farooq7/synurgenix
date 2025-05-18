import Name from "@/components/shared/name";
import { Anton, Inter } from "next/font/google";
import Team from "@/public/team.svg";
import Image from "next/image";
import Stats from "./stats";
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

const About = () => {
  return (
    <section className="mx-auto max-w-7xl py-12 md:py-24">
      <div className="flex lg:flex-row flex-col gap-5 xl:gap-12 px-5 xl:px-0">
        <div className="flex flex-col">
          <Name name="About Us" src="ste.svg" />
          <h2
            className={`text-[27px] md:text-7xl mt-6 mb-8 uppercase text-[#1A5FC7] ${antonSans.variable}`}
          >
            About Synurgenix
          </h2>

          <p
            className={`text-base md:text-xl ${interSans.variable} font-normal`}
          >
            At Synurgenix, we specialize in providing comprehensive IT solutions
            tailored to your business needs. Whether you require IT
            infrastructure management, on-demand IT support, or full-time IT
            staffing, our global team of experts ensures your business remains
            operational and secure.
          </p>
        </div>
        <Image
          src={Team}
          alt="team"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <Stats />
    </section>
  );
};

export default About;
