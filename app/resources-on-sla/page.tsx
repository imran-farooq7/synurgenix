import InfrastructureHero from "@/components/services/infracture-services/hero-infrastracture";
import KeyOfferings from "@/components/services/shared/key-offerings";
import Solutions from "@/components/services/shared/solutions/solutions";
import Grow from "@/components/shared/grow";
import ServiceDetails from "@/components/services/shared/service-details";
import ResourcesHero from "@/components/services/resources-services/resources-hero";

const ResourcesServicePage = () => {
  return (
    <div>
      <ResourcesHero />
      <ServiceDetails
        name="SLA-Based IT Support"
        title="SLA-Based IT Support"
        description="Gain guaranteed access to our pool of IT experts with clearly defined Service Level Agreements (SLAs). We ensure you have the right talent, precisely when you need it—streamlining your IT operations with reliability and speed."
      />
      <KeyOfferings
        description="With SLAs in place, your IT support becomes more predictable, accountable, and scalable"
        title1="On-Demand Technical Support"
        title2="Help Desk Services"
        title3="Specialized IT Assistance"
        text1="Immediate access to certified experts for troubleshooting, installations, and issue resolution—24/7 availability guaranteed."
        text2="Efficient ticket-based support with SLA-tracked response and resolution times, ensuring smooth end-user experience."
        text3="Access niche skills and domain-specific expertise for projects, migrations, security, cloud."
      />
      <Solutions />
      <Grow image="solutions.svg" />
    </div>
  );
};

export default ResourcesServicePage;
