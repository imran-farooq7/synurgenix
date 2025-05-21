import { Inter } from "next/font/google";
import NEW from "@/public/north_east_white.svg";
import Image from "next/image";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  weight: ["500", "300"],
});
const Form = () => {
  return (
    <div
      className={`grid border-1 border-[#E7E7E7] rounded-2xl p-6 max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2 ${interSans.className}`}
    >
      <div className="sm:col-span-3">
        <label
          htmlFor="first-name"
          className="block text-base font-medium text-gray-900"
        >
          First name
        </label>
        <div className="mt-2">
          <input
            id="first-name"
            name="first-name"
            type="text"
            placeholder="Enter your first name"
            autoComplete="given-name"
            className="block w-full rounded-lg bg-white px-3 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-[#6d6d6d] focus:outline-2 focus:-outline-offset-2 focus:outline-[#FF8157] sm:text-sm/6"
          />
        </div>
      </div>

      <div className="sm:col-span-3">
        <label
          htmlFor="last-name"
          className="block text-base font-medium text-gray-900"
        >
          Last name
        </label>
        <div className="mt-2">
          <input
            id="last-name"
            name="last-name"
            type="text"
            placeholder="Enter your last name"
            autoComplete="family-name"
            className="block w-full rounded-lg bg-white px-3 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-[#6d6d6d] focus:outline-2 focus:-outline-offset-2 focus:outline-[#FF8157] sm:text-sm/6"
          />
        </div>
      </div>
      <div className="sm:col-span-3">
        <label
          htmlFor="email"
          className="block text-base font-medium text-gray-900"
        >
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            className="block w-full rounded-lg bg-white px-3 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-[#6d6d6d] focus:outline-2 focus:-outline-offset-2 focus:outline-[#FF8157] sm:text-sm/6"
          />
        </div>
      </div>

      <div className="sm:col-span-3">
        <label
          htmlFor="Phone Number"
          className="block text-base font-medium text-gray-900"
        >
          Last name
        </label>
        <div className="mt-2">
          <input
            id="Phone Number"
            name="Phone Number"
            type="number"
            placeholder="Enter your Phone Number"
            autoComplete="Phone Number"
            className="block w-full rounded-lg bg-white px-3 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-[#6d6d6d] focus:outline-2 focus:-outline-offset-2 focus:outline-[#FF8157] sm:text-sm/6"
          />
        </div>
      </div>

      <div className="sm:col-span-full">
        <label
          htmlFor="subject"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Subject
        </label>
        <div className="mt-2">
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Enter your subject"
            autoComplete="subject"
            className="block w-full rounded-lg bg-white px-3 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-[#6d6d6d] focus:outline-2 focus:-outline-offset-2 focus:outline-[#FF8157] sm:text-sm/6"
          />
        </div>
      </div>

      <div className="sm:col-span-full">
        <label
          htmlFor="message"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Message
        </label>
        <div className="mt-2">
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Enter your message"
            className="block w-full rounded-lg bg-white px-3 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-[#6d6d6d] focus:outline-2 focus:-outline-offset-2 focus:outline-[#FF8157] sm:text-sm/6"
          />
        </div>
        <button
          className={` flex mt-8 items-center justify-center gap-1.5 w-full h-14 rounded-[10px] px-[18px] bg-[#86b93e] text-white text-base font-semibold ${interSans.variable} hover:bg-[#7aab38] transition-colors`}
        >
          Contact Us
          <Image src={NEW} alt="send" />
        </button>
        <p className=" text-[#6d6d6d] mt-8 font-light">
          We value your privacy. Your information will be kept confidential and
          only used to respond to your inquiry.
        </p>
      </div>
    </div>
  );
};

export default Form;
