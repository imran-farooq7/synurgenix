import { Anton, Inter } from "next/font/google";
const antonSans = Anton({
  variable: "--font-anton-sans",
  subsets: ["latin"],
  weight: ["400"],
});
const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});
const HeroTitle = () => {
  return (
    <div className="pt-24">
      <p
        className={`text-5xl text-center  md:text-[90px] uppercase ${antonSans.className} max-w-5xl mx-auto text-white tracking-[3px] leading-28
        `}
      >
        Scalable <span className="text-[#FF8157]">IT Solutions</span> for a
        Digital-First World
      </p>
      <p
        className={`pt-3 text-white text-center text-[28px] max-w-[700px] ${interSans.variable} leading-10 mx-auto`}
      >
        Empowering businesses with seamless IT infrastructure, 24/7 support, and
        expert IT resource allocation.
      </p>
    </div>
  );
};

export default HeroTitle;
