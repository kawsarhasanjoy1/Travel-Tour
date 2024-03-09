import { IoIosStarOutline } from "react-icons/io";
import { TiLocationOutline } from "react-icons/ti";
import { MdOutlineAccessTime } from "react-icons/md";
import img from "../../../public/neture1.jpg";
import allTrend from "../../../public/Popular.json";
import { TPopular } from "../../types/global";
const filter = allTrend.filter((trend) => trend.category === "trending");

const AllTrend = () => {
  return (
    <div>
      <div>
        <img src={img} alt="" />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        {filter.map((Trend: TPopular) => {
          return (
            <div className=" space-y-4 group overflow-auto">
              <div>
                <img
                  className=" h-[257px] w-[100%] rounded-[5px] group-hover:scale-110 transition-all duration-300"
                  src={Trend?.image}
                  alt=""
                />
              </div>
              <div className=" space-y-3">
                <div className=" flex items-center gap-3">
                  <p className=" flex items-center">
                    <TiLocationOutline /> {Trend?.location}
                  </p>
                  ।
                  <p className=" flex items-center gap-1">
                    <MdOutlineAccessTime />
                    <p>{Trend?.days} Days</p>
                  </p>
                </div>
                <p className=" text-[18px] font-semibold hover:text-red-400">
                  {Trend?.hotelQuality}
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
                  <p className=" font-bold text-xl ">{Trend?.Aed}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTrend;
