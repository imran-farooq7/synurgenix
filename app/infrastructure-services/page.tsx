import InfrastructureHero from "@/components/services/infracture-services/hero-infrastracture";
import KeyOfferings from "@/components/services/shared/key-offerings";
import Solutions from "@/components/services/shared/solutions/solutions";
import Grow from "@/components/shared/grow";
import ServiceDetails from "@/components/services/shared/service-details";

const ServicesPage = () => {
  return (
    <div>
      <InfrastructureHero />
      <ServiceDetails
        name="Building a Digital Foundation"
        title="Building a Digital Foundation"
        description=" We offer comprehensive, tailored solutions that span the entire infrastructure lifecycle, from initial design and implementation to ongoing management and optimization."
      />
      <KeyOfferings
        description="In today’s rapidly evolving digital landscape, a robust and resilient IT infrastructure is the bedrock of business success."
        title1="Infra Support"
        title2="Server and Storage Management"
        title3="Network Management"
        text1="Ensure continuous IT uptime through proactive monitoring, swift incident resolution, and 24/7 global support."
        text2="We manage server solutions: deployment, patching, performance, backups, and scalable storage, on-premise or cloud."
        text3="We manage network infrastructure: design, setup, and maintenance, including LAN/WAN, Wi-Fi, firewalls, and VPNs."
      />
      <Solutions />
      <Grow image="solutions.svg" />
    </div>
  );
};

export default ServicesPage;
