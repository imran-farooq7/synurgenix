import { stats } from "@/utils/constants";
import React from "react";
import Stat from "./stat";

const Stats = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Stat title={stat.title} description={stat.desc} key={stat.title} />
      ))}
    </div>
  );
};

export default Stats;
