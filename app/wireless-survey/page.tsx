import KeyOfferings from "@/components/services/shared/key-offerings";
import ServiceDetails from "@/components/services/shared/service-details";
import Solutions from "@/components/services/shared/solutions/solutions";
import WirelessHero from "@/components/services/wireless/wireless-hero";
import Grow from "@/components/shared/grow";

const ApplicationDevelopmentPage = () => {
  return (
    <div>
      <WirelessHero />
      <ServiceDetails
        name="Smart Wireless Planning"
        title="Smart Wireless Planning"
        description="Maximize wireless performance, coverage, and security—no matter where you operate. Our Wireless Survey services offer complete insights through pre-deployment planning, live validation, and hybrid assessments to ensure your network is strong and reliable."
      />
      <KeyOfferings
        description="Strategic, scalable staffing solutions to strengthen your IT operations."
        title1="Pre-Deployment Planning"
        title2="Post-Deployment Validation"
        title3="Hybrid & Predictive Assessments"
        text1="Assess your physical environment to design an optimized wireless infrastructure before installation."
        text2="Confirm performance, coverage, and security post-installation with detailed reports and adjustments."
        text3="Combine real-time testing with predictive modeling to fine-tune your wireless strategy for future demands."
      />
      <Solutions />
      <Grow image="solutions.svg" />
    </div>
  );
};

export default ApplicationDevelopmentPage;
