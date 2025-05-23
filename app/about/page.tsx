import HeroAbout from "@/components/about-us/hero-about/hero-about";
import OurTeam from "@/components/about-us/our-team/our-team";
import Who from "@/components/about-us/who-we-are/who";
import WhyUsAbout from "@/components/about-us/why-us-about/why-us-about";
import Grow from "@/components/shared/grow";

const AboutPage = () => {
  return (
    <div>
      <HeroAbout />
      <Who />
      <WhyUsAbout />
      <OurTeam />
      <Grow image="aboutBG.svg" />
    </div>
  );
};

export default AboutPage;
