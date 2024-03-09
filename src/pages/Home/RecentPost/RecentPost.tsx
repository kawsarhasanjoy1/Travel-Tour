import PostTitle from "../../../componets/Home/PostTitle";
import recent from "../../../../public/Popular.json";
import TourCard from "../../../componets/Home/TourCard";

const RecentPost = () => {
  return (
    <div>
      <PostTitle title="Recent Blog Posts" link="/" />
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-4">
        {recent.slice(0,4).map((recent) => (
          <TourCard Tour={recent} />
        ))}
      </div>
    </div>
  );
};

export default RecentPost;
