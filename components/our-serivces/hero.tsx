import Navbar from "@/components/nav/nav";
import React from "react";
import OurServicesHeroTitle from "./hero-title";

const OurServicesHero = () => {
  return (
    <section
      className="pt-12 bg-no-repeat bg-cover bg-center min-h-[350px] md:min-h-[630px] px-6 md:px-0"
      style={{ backgroundImage: 'url("/bgServices.svg")' }}
    >
      <Navbar />
      <OurServicesHeroTitle />
    </section>
  );
};

export default OurServicesHero;
