import { services } from "@/utils/constants";
import ServiceCard from "./card";

const ServicesList = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center flex-wrap gap-8">
      {services.map((item) => (
        <ServiceCard
          title={item.title}
          description={item.desc}
          key={item.title}
          href={item.href}
          icon={item.icon}
          number={item.number}
        />
      ))}
    </div>
  );
};

export default ServicesList;
