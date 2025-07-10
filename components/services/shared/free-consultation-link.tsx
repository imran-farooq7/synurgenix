import Image from "next/image";
import Link from "next/link";
import NE from "@/public/north_east.svg";
import { Inter } from "next/font/google";
const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});
const FreeConsultationLink = () => {
  return (
    <Link
      className={`bg-white hover:scale-105 transition-all ease-in-out text-[#0A3C87] text-nowrap gap-1 items-center font-bold max-w-fit mt-4 px-5 py-3 rounded-xl flex ${interSans.variable}`}
      href={"/contact-us"}
    >
      Free Consultation
      <Image src={NE} alt="arrow" />
    </Link>
  );
};

export default FreeConsultationLink;
