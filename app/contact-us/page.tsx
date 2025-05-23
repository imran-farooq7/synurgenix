import ContactUs from "@/components/contact-us/contact-form/contact-us";
import HeroContact from "@/components/contact-us/hero-contact/hero-contact";
import Grow from "@/components/shared/grow";
import React from "react";

const ContactUsPage = () => {
  return (
    <div>
      <HeroContact />
      <ContactUs />
      <Grow image="promote.svg" />
    </div>
  );
};

export default ContactUsPage;
