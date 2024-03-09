import { AiOutlineSafety } from "react-icons/ai";
import { FaHeadset, FaRegStar } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="bg-cover h-screen w-full text-white flex justify-center items-center"
      style={{
        backgroundImage:
          'url("https://demo.themerox.com/travel-bird/wp-content/uploads/2023/12/header__banner.jpg")',
      }}
    >
      <div className=" w-full md:flex flex-col justify-center items-center">
        <p className=" md:text-[50px] text-[40px] font-[sans ,serif] font-bold text-center">
          Your Trip Starts Here
        </p>
        <div className=" md:flex  gap-5 mx-auto justify-center mt-4 space-y-6 md:space-y-0">
          <Link to={""} className=" flex items-center justify-center gaLink-2">
            <AiOutlineSafety className=" w-5 h-5 bg-yellow-500 rounded-full" />
            <Link className=" text-[15px]" to={""}>
              Secure Linkayment
            </Link>
          </Link>
          <Link to={""} className=" flex items-center justify-center gaLink-2">
            <FaHeadset className=" w-5 h-5 bg-yellow-500 rounded-full" />
            <Link className=" text-[15px]" to={""}>
              We are here 24x7
            </Link>
          </Link>
          <Link to={""} className=" flex items-center justify-center gaLink-2">
            <FaRegStar className=" w-5 h-5 bg-yellow-500 rounded-full" />
            <Link className=" text-[15px]" to={""}>
              Award-winning
            </Link>
          </Link>
        </div>
        <div className=" w-full flex justify-center relative mt-10">
          <GoLocation className=" absolute top-0 md:left-[21%] left-[8%] mt-5 text-black" />
          <input
            className=" md:w-[60%] w-[90%] border-2 border-orange-400 focus:border-none h-14 rounded-full text-black md:px-14 px-9"
            placeholder={`Search your location`}
            type="text"
            name=""
            id=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
