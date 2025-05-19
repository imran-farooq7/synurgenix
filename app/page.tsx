import About from "@/components/home/about/about";
import Hero from "@/components/home/hero/hero";
import News from "@/components/home/news/news";
import OEM from "@/components/home/oem/oem";
import Services from "@/components/home/services/services";
import WhyUs from "@/components/home/why us/why-us";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <News />
      <OEM />
    </div>
  );
};

export default Home;
