import { NewsCardProps } from "@/utils/types";
import { Inter } from "next/font/google";
import Image from "next/image";
const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  weight: ["700", "600", "400"],
});

const NewsCard = ({ date, description, image, title }: NewsCardProps) => {
  return (
    <div className="bg-white/10 flex max-w-sm pt-3 flex-col pb-8 rounded-2xl px-3">
      <Image src={image} alt={title} width={363} height={265} />
      <p
        className={`text-base mt-4 mb-2  ${interSans.variable} font-bold text-[#FF8157]`}
      >
        {date}
      </p>

      <p
        className={`text-lg md:text-xl mb-1.5 text-white ${interSans.variable} font-semibold`}
      >
        {title}
      </p>
      <p className={`text-base ${interSans.variable} text-white font-normal`}>
        {description}
      </p>
    </div>
  );
};

export default NewsCard;
