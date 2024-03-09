import trend from "../../../../public/Popular.json";
import PostTitle from "../../../componets/Home/PostTitle";
import TourCard from "../../../componets/Home/TourCard";
const filter = trend.filter((item) => item?.category == "trending");

const Trending = () => {
  return (
    <div>
      <PostTitle title="Trending Packages" link="/" />
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-4">
        {filter.slice(0, 8).map((trend) => (
          <TourCard Tour={trend} />
        ))}
      </div>
    </div>
  );
};

export default Trending;
