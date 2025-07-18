import OurServicesHero from "@/components/our-serivces/hero";
import ServiceDetails from "@/components/services/shared/service-details";
import INFRAIMG from "@/public/ifraservice.svg";
import RLA from "@/public/rla.svg";
import FTRA from "@/public/ftra1.svg";
import ADAD from "@/public/adad.svg";
import APPDEV from "@/public/appdevs.svg";
import WLS from "@/public/wls.svg";

const OurSerivcesPage = () => {
  return (
    <div>
      <OurServicesHero />
      <ServiceDetails
        title="Infrastructure Services"
        description="Our Infrastructure Services provide the foundational strength your organization needs to operate seamlessly, scale efficiently, and innovate continuously. We offer comprehensive, tailored solutions that span the entire infrastructure lifecycle, from initial design and implementation to ongoing management and optimization."
        name="Infrastructure Services"
        img={INFRAIMG}
        href="/infrastructure-services"
      />
      <ServiceDetails
        title="Resources on SLA"
        description="Our Resources on SLA offering ensures you have the right talent, precisely when you need it, for on-demand support, help desk services, and specialized technical assistance—delivering predictable performance and rapid resolution for your critical IT needs"
        name="Resources on SLA"
        img={RLA}
        href="/resources-on-sla"
        withBG
        isWhiteVariant
      />
      <ServiceDetails
        title="Full-Time Resource Allocation"
        description="Augment your in-house teams with dedicated, full-time IT engineers and specialists from Synurgenix. Our Full-Time Resource Allocation service provides strategic staffing solutions, allowing you to scale your IT capabilities, fill critical skill gaps, and ensure sustained project success without the complexities of traditional recruitment."
        name="Full-Time Resource Allocation"
        img={FTRA}
        href="/fulltime-resources-allocation"
      />
      <ServiceDetails
        title="Asset Disposal and Destruction"
        description="Our Asset Disposal and Destruction services ensure complete data obliteration through certified destruction methods, responsible equipment recycling, and meticulous chain-of-custody protocols. Protect your sensitive information and meet environmental regulations with confidence."
        name="Asset Disposal and Destruction"
        img={ADAD}
        href="/asset-disposal-destruction"
        withBG
        isWhiteVariant
      />
      <ServiceDetails
        title="Application Development"
        description="Our Application Development services cover the entire lifecycle, from conceptualization and design to deployment and ongoing maintenance. We specialize in creating robust web, mobile, and enterprise applications that drive efficiency, enhance user experience, and provide a competitive edge."
        name="Application Development"
        img={APPDEV}
        href="/application-development"
      />
      <ServiceDetails
        title="Wireless Survey"
        description="Our Wireless Survey services provide comprehensive analysis of your wireless environment, including pre-deployment planning, post-deployment validation, and hybrid assessments. We ensure your wireless network is reliable, secure, and capable of supporting your business operations."
        name="Wireless Survey"
        img={WLS}
        href="/asset-disposal-destruction"
        withBG
        isWhiteVariant
      />
    </div>
  );
};

export default OurSerivcesPage;
