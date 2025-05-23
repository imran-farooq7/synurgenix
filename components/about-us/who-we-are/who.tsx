import Name from "@/components/shared/name";
import { Anton, Inter } from "next/font/google";
import WHOWE from "@/public/who we are.svg";
import VISION from "@/public/vision.svg";
import ROCKET from "@/public/rocket.svg";
import WhoCard from "./who-card";
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

const Who = () => {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12 lg:py-24">
      <div className="space-y-8 lg:space-y-0">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <div>
            <Name src={WHOWE} name="Who We Are" />
            <h2
              className={`text-[27px] md:text-7xl mt-4 md:mt-6 mb-2.5 lg:mb-8 uppercase text-[#1A5FC7] ${antonSans.variable} font-bold`}
            >
              Who We Are
            </h2>
          </div>
          <p
            className={`text-base md:text-xl text-[#6d6d6d] ${interSans.variable} font-normal max-w-[600px]`}
          >
            Synugenix is a global IT service provider offering comprehensive
            technology solutions for businesses of all sizes. With a vast
            network of 2,000+ certified engineers across 200+ companies.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 ">
          <WhoCard
            title="Our Mission"
            icon={VISION}
            description="To help businesses thrive by providing reliable, scalable, and cost-effective IT solutions, ensuring seamless operations and continuous innovation."
          />
          <WhoCard
            title="Our Vision"
            isOrange
            icon={ROCKET}
            description="To be the world’s most trusted IT service provider, delivering secure and future-ready solutions tailored to industry needs. Ensuring data protection & compliance."
          />
        </div>
      </div>
    </section>
  );
};

export default Who;
