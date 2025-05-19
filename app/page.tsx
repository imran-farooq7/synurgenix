import About from "@/components/home/about/about";
import Hero from "@/components/home/hero/hero";
import Services from "@/components/home/services/services";
import WhyUs from "@/components/home/why us/why-us";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <WhyUs />
    </div>
  );
};

export default Home;
