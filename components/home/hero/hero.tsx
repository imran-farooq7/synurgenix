import Navbar from "@/components/nav/nav";
import React from "react";
import HeroTitle from "./hero-title";
import Consultancy from "./consultancy";

const Hero = () => {
  return (
    <section
      className="pt-12 bg-no-repeat bg-cover bg-center min-h-[850px] md:min-h-[990px] px-6 md:px-0"
      style={{ backgroundImage: 'url("./hero.svg")' }}
    >
      <Navbar />
      <HeroTitle />
      <Consultancy />
    </section>
  );
};

export default Hero;
