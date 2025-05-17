"use client";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});
const Navbar = () => {
  const pathName = usePathname();
  return (
    <nav
      className={`mx-auto px-5 xl:px-0 max-w-7xl flex items-center justify-between ${interSans.className}  `}
    >
      {/* <img src={"Synurgenix.svg"} alt="logo" /> */}
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
        <Link href={"/about"}>About</Link>
        <Link href={"/services"}>Services</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/coverage"}>Our Covertage</Link>
      </div>
      <Link
        href={"/contact-us"}
        className="flex gap-3 bg-white px-6 py-3 rounded-xl text-[#0A3C87]"
      >
        Contact us{" "}
        <Image src={"north_east.svg"} alt="arrow" width={24} height={24} />
      </Link>
    </nav>
  );
};

export default Navbar;
