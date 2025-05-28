import Expanding from "@/components/coverage/expanding/expanding";
import HeroCoverage from "@/components/coverage/hero-coverage";
import Region from "@/components/coverage/region/region";
import AFRICA from "@/public/africa.svg";
import AFRICAMOB from "@/public/africaMobile.svg";
import ASIA from "@/public/asia.svg";
import ASIAMOB from "@/public/asiaMobile.svg";
import EU from "@/public/europe.svg";
import EU_MOB from "@/public/europeMobile.svg";
import AMERICAS from "@/public/americas.svg";
import AMERICASMOB from "@/public/americasMobile.svg";
import Grow from "@/components/shared/grow";

const Coverage = () => {
  return (
    <div>
      <HeroCoverage />
      <Expanding />
      <Region title="Africa" img={AFRICA} imgMobile={AFRICAMOB} />
      <Region title="Asia-Pacific" img={ASIA} imgMobile={ASIAMOB} />
      <Region title="Europe" img={EU} imgMobile={EU_MOB} />
      <Region title="Americas" img={AMERICAS} imgMobile={AMERICASMOB} />
      <Grow image="promo.svg" />
    </div>
  );
};

export default Coverage;
