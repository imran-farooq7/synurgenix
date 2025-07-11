import { whyUs } from "@/utils/constants";
import Card from "./card";

const CardList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8">
      {whyUs.map((item) => (
        <Card title={item.title} description={item.desc} key={item.title} />
      ))}
    </div>
  );
};

export default CardList;
