import { news } from "@/utils/constants";
import NewsCard from "./news-card";

const NewsList = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center flex-wrap gap-10">
      {news.map((item) => (
        <NewsCard
          date={item.date}
          description={item.desc}
          image={item.icon}
          title={item.title}
          key={item.title}
        />
      ))}
    </div>
  );
};

export default NewsList;
