import { Inter } from "next/font/google";
import Image from "next/image";
import FB from "@/public/fb.svg";
import Link from "next/link";
import IG from "@/public/Instagram.svg";
import TWITTER from "@/public/Twitter.svg";
import LI from "@/public/Linkedin.svg";
import NEW from "@/public/north_east_white.svg";
import EMAIL from "@/public/Mail.svg";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  weight: ["300", "600"],
});
const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mx-auto max-w-7xl px-6 lg:px-0 py-12 md:py-24">
      <div
        className={`${interSans.variable} font-light text-[#6D6D6D] col-span-2 md:col-span-1 lg:col-span-2`}
      >
        <h1 className="text-5xl">Logo</h1>
        <div className="space-y-2 text-lg">
          <p className="mt-7">
            123 Artique Street, Creativity City, Designland{" "}
          </p>
          <p>info@yoursite.com</p>
          <p>0842118992011</p>
        </div>
        <div className="flex mt-4 gap-3.5">
          <Link href={"#"}>
            <Image src={TWITTER} alt="twitter" />
          </Link>
          <Link href={"#"}>
            <Image src={FB} alt="facebook" />
          </Link>
          <Link href={"#"}>
            <Image src={IG} alt="instagram" />
          </Link>
          <Link href={"#"}>
            <Image src={LI} alt="linkedinn" />
          </Link>
        </div>
      </div>
      <div className="pt-7 pb-4 md:py-0">
        <ul className={`${interSans.variable} font-light text-[#6D6D6D]`}>
          <li className="text-black text-2xl font-semibold mb-6">Company</li>
          <li className="text-[#6D6D6D] text-lg font-light mb-4">
            <Link href={"/about"}>About Us</Link>
          </li>
          <li className="text-[#6D6D6D] text-lg font-light mb-4">
            <Link href={"/careers"}>Careers</Link>
          </li>
          <li className="text-[#6D6D6D] text-lg font-light mb-4">
            <Link href={"/privacy-policy"}>Privacy Policy</Link>
          </li>
          <li className="text-[#6D6D6D] text-lg font-light mb-4">
            <Link href={"/terms-of-service"}>Terms of Service</Link>
          </li>
        </ul>
      </div>
      <div className="pt-7 pb-4 md:py-0">
        <ul className={`  text-[#6D6D6D] `}>
          <li className="text-black text-2xl font-semibold mb-6">Services</li>
          <li
            className={`text-inherit text-lg font-light mb-4 ${interSans.variable}`}
          >
            <Link href={"/about"}>IT Infrastructure Services</Link>
          </li>
          <li
            className={`text-inherit text-lg font-light mb-4 ${interSans.variable}`}
          >
            <Link href={"/careers"}>24/7 IT Helpdesk Support</Link>
          </li>
          <li
            className={`text-inherit text-lg font-light mb-4 ${interSans.variable}`}
          >
            <Link href={"/privacy-policy"}>Full-Time IT Staffing</Link>
          </li>
          <li
            className={`text-inherit text-lg font-light mb-4 ${interSans.variable}`}
          >
            <Link href={"/terms-of-service"}>Global IT Deployments</Link>
          </li>
        </ul>
      </div>
      <div className="col-span-2 md:col-span-1">
        <p
          className={`text-black text-lg ${interSans.variable} font-semibold mb-2 md:mb-6`}
        >
          Stay Updated with Our Insights
        </p>
        <p className="text-[#6D6D6D] pb-6">
          Join AdVibe's newsletter for trends, tips, and exclusive offers!
        </p>
        <div className="relative w-full max-w-md">
          <Image src={EMAIL} alt="email" className="absolute left-4 top-4" />
          <input
            type="email"
            placeholder="enter your email"
            className=" w-full xl:w-72  py-3 pl-10 border border-[#e7e7e7] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            className={`absolute flex md:hidden xl:flex max-w-24 items-center gap-1.5 right-6 md:-right-4 top-2 h-9 rounded-[10px] px-[18px] bg-[#86b93e] text-white text-base font-semibold ${interSans.variable} hover:bg-[#7aab38] transition-colors`}
          >
            Send
            <Image src={NEW} alt="send" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
