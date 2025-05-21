import ContactUs from "@/components/contact-us/contact-form/contact-us";
import HeroContact from "@/components/contact-us/hero-contact/hero-contact";
import Promote from "@/components/contact-us/promote/promte";
import React from "react";

const ContactUsPage = () => {
  return (
    <div>
      <HeroContact />
      <ContactUs />
      <Promote />
    </div>
  );
};

export default ContactUsPage;
