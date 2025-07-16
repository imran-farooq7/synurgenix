import InfrastructureHero from "@/components/services/infracture-services/hero-infrastracture";
import KeyOfferings from "@/components/services/shared/key-offerings";
import Solutions from "@/components/services/shared/solutions/solutions";
import Grow from "@/components/shared/grow";
import ServiceDetails from "@/components/services/shared/service-details";
import ResourcesHero from "@/components/services/resources-services/resources-hero";
import FulltimeResourcesHero from "@/components/services/fulltime-resources-services/fulltime-resources-hero";
import AssetsHero from "@/components/services/assets-disposal-destruction/assets-hero";
import ApplicationHero from "@/components/services/application-development/application-hero";

const ApplicationDevelopmentPage = () => {
  return (
    <div>
      <ApplicationHero />
      <ServiceDetails
        name="Custom App Development"
        title="Custom App Development"
        description="Turn your ideas into powerful, tailor-made software solutions. From concept to launch—and beyond—we build web, mobile, and enterprise apps that boost performance and elevate user experience."
      />
      <KeyOfferings
        description="Strategic, scalable staffing solutions to strengthen your IT operations."
        title1="Certified Data Destruction"
        title2="Full Lifecycle Development"
        title3="Enterprise-Grade Solutions"
        text1="Full-time engineers focused solely on your projects—aligned with your goals and timelines."
        text2="From ideation and UX/UI design to development, testing, deployment, and updates."
        text3="High-performance systems built to support complex operations and long-term growth."
      />
      <Solutions />
      <Grow image="solutions.svg" />
    </div>
  );
};

export default ApplicationDevelopmentPage;
