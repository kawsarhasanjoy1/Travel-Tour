import { IoIosStarOutline } from "react-icons/io";
import { TiLocationOutline } from "react-icons/ti";
import { MdOutlineAccessTime } from "react-icons/md";
import { TPopular } from "../../types/global";
import { Link } from "react-router-dom";

const TourCard = ({ Tour, link }: { Tour: TPopular; link?: string }) => {
  return (
    <Link to={`${link}/${Tour?.id}`}>
      <div className=" space-y-4 group overflow-hidden">
        <div
          className="
        aspect-square 
        w-full 
        relative 
        overflow-hidden 
        rounded-[5px]
      "
        >
          <img
            className="
          object-cover 
          h-full 
          w-full 
          group-hover:scale-110 
          transition
          duration-300
        "
            src={Tour?.image}
            alt="Place"
          />
          <div
            className="
        absolute
        top-3
        right-3
      "
          ></div>
        </div>
        <div className=" space-y-3">
          <div className=" flex items-center gap-3">
            <p className=" flex items-center">
              <TiLocationOutline /> {Tour?.location}
            </p>
            ।
            <p className=" flex items-center gap-1">
              <MdOutlineAccessTime />
              <p>{Tour?.days} Days</p>
            </p>
          </div>
          <p className=" text-[18px] font-semibold hover:text-red-400">
            {Tour?.hotelQuality}
          </p>
          <div className=" flex gap-2">
            <IoIosStarOutline className=" cursor-pointer text-yellow-400" />
            <IoIosStarOutline className=" cursor-pointer text-yellow-400" />
            <IoIosStarOutline className=" cursor-pointer text-yellow-400" />
            <IoIosStarOutline className=" cursor-pointer text-yellow-400" />
            <IoIosStarOutline className=" cursor-pointer text-yellow-400" />
          </div>
          <div className=" flex items-center gap-2">
            <p className=" text-[15px]">From</p>
            <p className=" font-bold text-xl ">{Tour?.Aed}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TourCard;
