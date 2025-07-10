import { servicesCard } from "@/utils/constants";
import SolutionCard from "./solution-card";

const SolutionsList = () => {
  return (
    <div className="flex justify-center gap-6 flex-wrap ">
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
