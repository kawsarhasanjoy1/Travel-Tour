import { CgMail } from "react-icons/cg";
import { FaLongArrowAltRight } from "react-icons/fa";

const GetTouch = () => {
  return (
    <div className=" md:grid grid-cols-2 space-y-4 md:space-y-0 mx-auto bg-yellow-500 md:h-48 p-10">
      <div className=" md:flex items-center gap-3 ">
        <CgMail className="mx-auto md:mx-0" size={50} />
        <div className=" space-y-1 text-center md:text-start">
          <p className=" text-3xl font-serif">Get in Touch</p>
          <p className=" font-serif">
            Sign up to our newsletter for deals, inspo and other travel treats!
          </p>
        </div>
      </div>
      <div className=" relative flex justify-center items-center">
        <input
          className=" w-[90%] h-14 focus:outline-none focus:outline-red-400 rounded-full px-4 "
          type="email"
          name=""
          id=""
          placeholder="Enter your email address"
        />
        <p className=" absolute top-1 right-5 md:right-10 md:top-[32px] px-6 bg-yellow-200 py-4 rounded-full cursor-pointer">
          <FaLongArrowAltRight />
        </p>
      </div>
    </div>
  );
};

export default GetTouch;
