import Navbar from "../nav/nav";
import CoverageTitle from "./coverage-title";

const HeroCoverage = () => {
  return (
    <section
      className="pt-12 bg-no-repeat bg-cover bg-center min-h-[336px] md:min-h-[636px] px-6 md:px-0"
      style={{ backgroundImage: 'url("/coverage.svg")' }}
    >
      <Navbar />
      <CoverageTitle />
    </section>
  );
};

export default HeroCoverage;
