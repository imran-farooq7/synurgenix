"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import Logo from "@/public/logo.png";
import { Inter } from "next/font/google";
const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  weight: ["500"],
});

const MobileNavbar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const pathName = usePathname();

  return (
    <div className="relative">
      {/* Drawer content - white background, 270px width */}
      <div
        className={`fixed top-0 left-0 z-20 h-full w-[270px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        <div className={`${interSans.variable} font-medium`}>
          {/* <Image src={Logo} alt="logo" /> */}
          <nav className="mt-4">
            <ul>
              <li>
                <Link
                  href={"/"}
                  className={`${
                    pathName === "/" ? "bg-[#1A5FC7] text-white" : null
                  } block pl-7 py-4 `}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/about"}
                  className={`${
                    pathName === "/about" ? "bg-[#1A5FC7] text-white" : null
                  } block pl-7 py-4 `}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={"/services"}
                  className={`${
                    pathName === "/services" ? "bg-[#1A5FC7] text-white" : null
                  } block pl-7 py-4 `}
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href={"/blog"}
                  className={`${
                    pathName === "/blog" ? "bg-[#1A5FC7] text-white" : null
                  } block pl-7 py-4 `}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href={"/coverage"}
                  className={`${
                    pathName === "/coverage" ? "bg-[#1A5FC7] text-white" : null
                  } block pl-7 py-4 `}
                >
                  Our Coverage
                </Link>
              </li>
              <li>
                <Link
                  href={"/contact-us"}
                  className={`${
                    pathName === "/contact-us"
                      ? "bg-[#0A3C87] text-white"
                      : null
                  } block pl-7 py-4 `}
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
