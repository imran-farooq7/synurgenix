import Name from "@/components/shared/name";
import { Anton, Inter } from "next/font/google";
import NE from "@/public/north_east.svg";
import Link from "next/link";
import Image from "next/image";
const antonSans = Anton({
  variable: "--font-anton-sans",
  subsets: ["latin"],
  weight: ["400"],
});
const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  weight: ["600"],
});

const Grow = ({ image }: { image: string }) => {
  return (
    <section
      className={`py-12 md:py-24 bg-no-repeat bg-cover bg-center md:min-h-[700px] px-6 md:px-0`}
      style={{ backgroundImage: `url(/${image})` }}
    >
      <div className="flex items-center flex-col text-center mb-4">
        <Link href="/contact-us">
          <Name
            name="GROW YOUR BUSINESS TODAY  🚀"
            isWhiteVariant
            src="setw.svg"
            isPromotion
          />
        </Link>
        <h2
          className={`text-[27px] max-w-[800px] leading-10 md:leading-22 font-bold md:text-6xl mt-6 mb-2 uppercase text-white ${antonSans.variable}`}
        >
          Get a Free Consultation or Request a Demo
        </h2>
        <p
          className={`text-base md:text-xl text-white text-center max-w-sm md:max-w-3xl ${interSans.variable} font-semibold leading-6 md:leading-8`}
        >
          Discover how Synurgenix can transform your IT landscape and drive your
          business forward. Contact us today for a free consultation or request
          a demo—let our experts design a tailored IT strategy that empowers
          your digital future.
        </p>
      </div>
      <div className="flex justify-center">
        <Link
          className={`bg-white hover:scale-105 transition-all ease-in-out text-[#0A3C87] text-nowrap gap-1 items-center font-bold max-w-fit mt-4 px-5 py-3 rounded-xl flex ${interSans.variable}`}
          href={"/contact-us"}
        >
          Let’s Optimize Your IT
          <Image src={NE} alt="arrow" />
        </Link>
      </div>
    </section>
  );
};

export default Grow;
