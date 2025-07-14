import Navbar from "@/components/nav/nav";
import FulltimeResourcesHeroHeading from "./fulltime-hero-heading";

const FulltimeResourcesHero = () => {
  return (
    <section
      className="pt-12 bg-no-repeat bg-cover bg-center min-h-[450px] md:min-h-[663px]  px-6 md:px-0"
      style={{ backgroundImage: 'url("/servicesBg.svg")' }}
    >
      <Navbar />
      <FulltimeResourcesHeroHeading />
    </section>
  );
};

export default FulltimeResourcesHero;
