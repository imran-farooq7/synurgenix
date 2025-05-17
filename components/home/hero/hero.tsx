import Navbar from "@/components/nav/nav";
import React from "react";

const Hero = () => {
  return (
    <section
      className="pt-12 bg-no-repeat bg-cover bg-center min-h-[990px]"
      style={{ backgroundImage: 'url("/hero.svg")' }}
    >
      <Navbar />
    </section>
  );
};

export default Hero;
