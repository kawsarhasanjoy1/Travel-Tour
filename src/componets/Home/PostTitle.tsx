import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TTitle } from "../../types/global";

const PostTitle = ({ title, link }: TTitle) => {
  return (
    <div className=" md:flex justify-between font-['Proza Libre, Sans-serif'] mb-8 mx-10 text-center">
      <p className=" md:text-[34px] text-2xl">{title}</p>
      <Link
        className=" flex items-center gap-3 text-[14px] hover:text-red-400 justify-center"
        to={link}
      >
        View All Packages <FaLongArrowAltRight />
      </Link>
    </div>
  );
};

export default PostTitle;
