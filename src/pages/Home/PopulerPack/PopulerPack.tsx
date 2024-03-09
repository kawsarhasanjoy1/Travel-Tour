import popular from "../../../../public/Popular.json";
import PostTitle from "../../../componets/Home/PostTitle";
import TourCard from "../../../componets/Home/TourCard";

const PopulerPack = () => {
  return (
    <div>
      <PostTitle title="Most Popular Packages" link="/" />

      <div className=" grid grid-cols-1 md:grid-cols-4 gap-4">
        {popular.slice(0, 8).map((popular) => (
          <TourCard Tour={popular} />
        ))}
      </div>
    </div>
  );
};

export default PopulerPack;
