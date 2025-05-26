import { servicesCard } from "@/utils/constants";
import SolutionCard from "./solution-card";

const SolutionsList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-3">
      {servicesCard.map((item) => (
        <SolutionCard
          title={item.title}
          icon={item.icon}
          description={item.desc}
          key={item.title}
        />
      ))}
    </div>
  );
};

export default SolutionsList;
