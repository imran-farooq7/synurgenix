import InfrastructureHero from "@/components/services/infracture-services/hero-infrastracture";
import KeyOfferings from "@/components/services/shared/key-offerings";
import Solutions from "@/components/services/shared/solutions/solutions";
import Grow from "@/components/shared/grow";
import ServiceDetails from "@/components/services/shared/service-details";
import ResourcesHero from "@/components/services/resources-services/resources-hero";
import FulltimeResourcesHero from "@/components/services/fulltime-resources-services/fulltime-resources-hero";

const FulltimeResourcesPage = () => {
  return (
    <div>
      <FulltimeResourcesHero />
      <ServiceDetails
        name="Committed IT Resources"
        title="Committed IT Resources"
        description="Our Full-Time Resource Allocation service provides strategic staffing solutions, allowing you to scale your IT capabilities, fill critical skill gaps, and ensure sustained project success without the complexities of traditional recruitment."
      />
      <KeyOfferings
        description="Strategic, scalable staffing solutions to strengthen your IT operations."
        title1="Dedicated IT Talent"
        title2="Flexible Scaling"
        title3="Recruitment Simplified"
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
