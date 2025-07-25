"use client";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import MobileNavbar from "./nav-mobile";
import { useState } from "react";
import HB from "@/public/hamburger menu.svg";
import Logo from "@/public/Synurgenijjx-final.png";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});
const Navbar = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav
        className={`mx-auto px-5 xl:px-0 max-w-7xl flex md:items-center justify-between ${interSans.className}  `}
      >
        {/* <Image src={Logo} alt="logo" /> */}
        <h1 className="text-3xl font-bold text-white">Logo</h1>
        <div className="lg:flex hidden gap-10 text-white text-lg font-medium items-center">
          <Link
            href={"/"}
            className={`${
              pathName === "/" ? "bg-[#0A3C87] px-6 py-2 rounded-2xl" : null
            }`}
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className={`${
              pathName === "/about"
                ? "bg-[#0A3C87] px-6 py-2 rounded-2xl"
                : null
            }`}
          >
            About
          </Link>
          <Link
            className={`${
              pathName === "/our-services"
                ? "bg-[#0A3C87] px-6 py-2 rounded-2xl"
                : null
            }`}
            href={"/our-services"}
          >
            Services
          </Link>
          <Link href={"/blog"}>Blog</Link>
          <Link
            href={"/coverage"}
            className={`${
              pathName === "/coverage"
                ? "bg-[#0A3C87] px-6 py-2 rounded-2xl"
                : null
            }`}
          >
            Our Coverage
          </Link>
        </div>
        <Link
          href={"/contact-us"}
          className=" gap-3 hidden md:flex bg-white px-6 py-3 rounded-xl text-[#0A3C87]"
        >
          Contact us{" "}
          <Image src={"north_east.svg"} alt="arrow" width={24} height={24} />
        </Link>
        <Image
          onClick={() => setIsOpen(!isOpen)}
          src={HB}
          alt="menu"
          className="md:hidden "
        />
      </nav>
      <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
