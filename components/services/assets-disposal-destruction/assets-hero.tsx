import Navbar from "@/components/nav/nav";
import FulltimeResourcesHeroHeading from "./asset-hero-heading";
import AssetHeroHeading from "./asset-hero-heading";

const AssetsHero = () => {
  return (
    <section
      className="pt-12 bg-no-repeat bg-cover bg-center min-h-[450px] md:min-h-[663px]  px-6 md:px-0"
      style={{ backgroundImage: 'url("/servicesBg.svg")' }}
    >
      <Navbar />
      <AssetHeroHeading />
    </section>
  );
};

export default AssetsHero;
