import ServicesHero from "@/components/services/hero/services-hero";
import OurInfrastructure from "@/components/services/our-infrastructure/our-infrastructure";
import OurProcess from "@/components/services/process/our-process";
import Solutions from "@/components/services/solutions/solutions";
import Grow from "@/components/shared/grow";

const ServicesPage = () => {
  return (
    <div>
      <ServicesHero />
      <OurInfrastructure />
      <OurProcess />
      <Solutions />
      <Grow image="solutions.svg" />
    </div>
  );
};

export default ServicesPage;
