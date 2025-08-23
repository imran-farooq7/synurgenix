import Name from "@/components/shared/name";
import { Anton, Inter } from "next/font/google";
import Team from "@/public/team.svg";
import Image from "next/image";
import Stats from "./stats";
import Link from "next/link";
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
          <Link href="/about-us">
            <Name name="About Us" src="ste.svg" />
            <h2
              className={`text-[27px] md:text-[60px] font-bold mt-3 md:mt-6 mb-2 md:mb-8 uppercase text-[#1A5FC7] ${antonSans.variable}`}
            >
              About Synurgenix
            </h2>
          </Link>

          <p
            className={`text-base md:text-xl text-[#6D6D6D] ${interSans.variable} font-normal max-w-7xl`}
          >
            At Synurgenix, we build robust, agile IT foundations to drive global
            business success. As a leading Managed Service Provider (MSP), we
            deliver tailored, cutting-edge solutions backed by 3,300+ expert
            engineers and 24/7 support—ensuring your operations stay secure,
            efficient, and always on.
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
