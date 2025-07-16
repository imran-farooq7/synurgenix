import Navbar from "@/components/nav/nav";
import FulltimeResourcesHeroHeading from "./application-hero-heading";
import AssetHeroHeading from "./application-hero-heading";
import ApplicatioHeroHeading from "./application-hero-heading";

const ApplicationHero = () => {
  return (
    <section
      className="pt-12 bg-no-repeat bg-cover bg-center min-h-[450px] md:min-h-[663px]  px-6 md:px-0"
      style={{ backgroundImage: 'url("/servicesBg.svg")' }}
    >
      <Navbar />
      <ApplicatioHeroHeading />
    </section>
  );
};

export default ApplicationHero;
