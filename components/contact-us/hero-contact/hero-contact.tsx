import Navbar from "@/components/nav/nav";
import React from "react";
import HeroHeading from "./hero-heading";

const HeroContact = () => {
  return (
    <section
      className="pt-12 bg-no-repeat bg-cover bg-center min-h-[380px] md:min-h-[684px] px-6 md:px-0"
      style={{ backgroundImage: 'url("/hero-contact-bg.svg")' }}
    >
      <Navbar />
      <HeroHeading />
    </section>
  );
};

export default HeroContact;
