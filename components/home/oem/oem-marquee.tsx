import Image from "next/image";
import Marquee from "react-fast-marquee";
import BIA from "@/public/bianco.svg";
import MICRO from "@/public/microsoft.svg";
import EMC from "@/public/emc.svg";
import ENK from "@/public/enkahu.svg";
import DLINK from "@/public/dlink.svg";
import FUJI from "@/public/fuji.svg";

const OemMarquee = () => {
  return (
    <Marquee>
      <Image className="mx-10" src={BIA} alt="biancoo" />
      <Image className="mx-10" src={MICRO} alt="microsoft" />
      <Image className="mx-10" src={EMC} alt="emc" />
      <Image className="mx-10" src={ENK} alt="enkahu" />
      <Image className="mx-10" src={DLINK} alt="dlink" />
      <Image className="mx-10" src={FUJI} alt="fuji" />
    </Marquee>
  );
};

export default OemMarquee;
