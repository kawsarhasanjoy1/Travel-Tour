import { AiFillSafetyCertificate } from "react-icons/ai";
import { FcCustomerSupport } from "react-icons/fc";
import { RiContactsBook2Fill } from "react-icons/ri";

const Service = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3">
      <div className=" border h-56 flex flex-col justify-center items-center">
        <AiFillSafetyCertificate size={40} className="text-[#F0A731] " />
        <div className=" text-center">
          <p className=" font-['Albert Sans, Sans-serif'] text-[22px] w-[100%]">
            Best Price Guarantee
          </p>
          <p className=" md:w-[46ch] w-[35ch] ">
            Neguiled and demoralized by the charms of pleasure of the moment
          </p>
        </div>
      </div>
      <div className=" border h-56 flex flex-col justify-center items-center">
        <RiContactsBook2Fill size={40} className="text-[#F0A731] mx-auto" />
        <div className=" text-center">
          <p className=" font-['Albert Sans, Sans-serif'] text-[22px] w-[100%]">
            Easy & Quick Booking
          </p>
          <p className=" md:w-[46ch] w-[35ch] mx-auto">
            But in certain circumstances and owing to the claims of duty
          </p>
        </div>
      </div>
      <div className=" border h-56 flex flex-col justify-center items-center">
        <FcCustomerSupport size={40} className="text-[#F0A731] mx-auto" />
        <div className=" text-center">
          <p className=" font-['Albert Sans, Sans-serif'] text-[22px] w-[100%]">
            Customer Care 24/7
          </p>
          <p className=" md:w-[46ch] w-[35ch]">
            Obligations of business it will frequently occur that pleasure
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
