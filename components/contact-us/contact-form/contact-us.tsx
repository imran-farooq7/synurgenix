import Name from "@/components/shared/name";
import { Anton, Inter } from "next/font/google";
import IG from "@/public/Instagram.svg";
import TWITTER from "@/public/Twitter.svg";
import LI from "@/public/Linkedin.svg";
import FB from "@/public/fb.svg";
import Form from "./form";
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
  weight: ["600", "400"],
});

const ContactUs = () => {
  return (
    <section className="mx-auto max-w-7xl py-12 md:py-24">
      <div className="flex lg:flex-row flex-col justify-between gap-20 px-5 xl:px-0">
        <div className="flex flex-col basis-1/2">
          <Name name="Contact Us" src="comment.svg" />
          <h2
            className={`text-[27px] md:text-6xl mt-6 mb-8 uppercase text-[#1A5FC7] ${antonSans.variable}`}
          >
            Have Questions? We're Here to Help!
          </h2>

          <p
            className={`text-base md:text-xl ${interSans.variable} font-normal text-[#6d6d6d] leading-7`}
          >
            Our dedicated team is ready to provide the answers and support you
            need. Whether it's a quick question or a detailed concern, we're
            just a call, email, or chat away. Let us make your experience
            seamless and stress-free. We're here to help!
          </p>
          <div className="flex flex-col mt-10 gap-8">
            <div
              className="flex gap-8 md:gap-34
            "
            >
              <div className="space-y-3">
                <p className="text-[#6d6d6d] font-light">Message Us</p>
                <p className="text-[#22242F] font-medium">
                  {" "}
                  info@synugenix.com
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-[#6d6d6d] font-light">Call Us</p>
                <p className="text-[#22242F] font-medium">+1 (123) 456-7890</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-[#6d6d6d] font-light">Call Us</p>
              <p className="text-[#22242F] font-medium">
                123 Digital Avenue, Suite 456, Tech City, CA 90001, USA
              </p>
            </div>
            <div>
              <p className="text-[#86B93E] font-bold text-xl">Follow Us</p>
              <div className="flex mt-2 gap-3.5">
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
          </div>
        </div>
        <div className="basis-1/2">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
