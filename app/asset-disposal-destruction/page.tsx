import InfrastructureHero from "@/components/services/infracture-services/hero-infrastracture";
import KeyOfferings from "@/components/services/shared/key-offerings";
import Solutions from "@/components/services/shared/solutions/solutions";
import Grow from "@/components/shared/grow";
import ServiceDetails from "@/components/services/shared/service-details";
import ResourcesHero from "@/components/services/resources-services/resources-hero";
import FulltimeResourcesHero from "@/components/services/fulltime-resources-services/fulltime-resources-hero";
import AssetsHero from "@/components/services/assets-disposal-destruction/assets-hero";

const FulltimeResourcesPage = () => {
  return (
    <div>
      <AssetsHero />
      <ServiceDetails
        name="Committed IT Resources"
        title="End-of-Life Asset Handling"
        description="Securely retire your IT assets with confidence. Our certified disposal services ensure complete data destruction, compliance with regulations, and eco-friendly recycling—all with strict chain-of-custody controls."
      />
      <KeyOfferings
        description="Strategic, scalable staffing solutions to strengthen your IT operations."
        title1="Certified Data Destruction"
        title2="Eco-Friendly Recycling"
        title3="Chain-of-Custody Tracking"
        text1="Full-time engineers focused solely on your projects—aligned with your goals and timelines."
        text2="Quickly add or reduce resources as your needs evolve, without long-term commitments."
        text3="Eliminate hiring delays and costs—our vetted professionals integrate into your team from day one."
      />
      <Solutions />
      <Grow image="solutions.svg" />
    </div>
  );
};

export default FulltimeResourcesPage;
