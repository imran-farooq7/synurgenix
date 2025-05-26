import Navbar from "@/components/nav/nav";
import React from "react";
import HeroHeadingServices from "./hero-heading";

const ServicesHero = () => {
  return (
    <section
      className="pt-12 bg-no-repeat bg-cover bg-center min-h-[450px] md:min-h-[663px]  px-6 md:px-0"
      style={{ backgroundImage: 'url("/servicesBg.svg")' }}
    >
      <Navbar />
      <HeroHeadingServices />
    </section>
  );
};

export default ServicesHero;
