import Navbar from "@/components/nav/nav";
import WirelessHeroHeading from "./wireless-hero-heading";

const WirelessHero = () => {
  return (
    <section
      className="pt-12 bg-no-repeat bg-cover bg-center min-h-[450px] md:min-h-[663px]  px-6 md:px-0"
      style={{ backgroundImage: 'url("/servicesBg.svg")' }}
    >
      <Navbar />
      <WirelessHeroHeading />
    </section>
  );
};

export default WirelessHero;
