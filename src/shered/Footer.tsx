import { CgMail } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter, FaYoutube } from "react-icons/fa6";
import { MdOutlineAddIcCall } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black space-y-6 py-10">
      <div className=" grid grid-cols-1 md:grid-cols-5 px-7 space-y-10 md:justify-items-center text-white">
        <div>
          <p className=" text-xl">Follow</p>
          <div className=" space-y-4 mt-4">
            <Link
              to={"/"}
              className=" flex items-center gap-2 hover:text-yellow-500"
            >
              <FaFacebook className=" bg-[#3b5998] w-8 h-8 p-2 rounded-full" />{" "}
              Facebook
            </Link>
            <Link
              to={"/"}
              className=" flex items-center gap-2 hover:text-yellow-500"
            >
              <FaTwitter className=" bg-[#0d6efd] w-8 h-8 p-2 rounded-full" />{" "}
              Twitter
            </Link>
            <Link
              to={"/"}
              className=" flex items-center gap-2 hover:text-yellow-500"
            >
              <FaYoutube className=" bg-red-600 w-8 h-8 p-2 rounded-full" />{" "}
              Youtube
            </Link>
          </div>
        </div>
        <div>
          <p className=" text-xl  mb-4">Discover</p>
          <div className=" flex flex-col gap-3 ">
            <Link className=" hover:underline hover:text-red-300" to={""}>
              Home
            </Link>
            <Link className=" hover:underline hover:text-red-300" to={""}>
              Experience
            </Link>
            <Link className=" hover:underline hover:text-red-300" to={""}>
              About
            </Link>
            <Link className=" hover:underline hover:text-red-300" to={""}>
              Contact Us
            </Link>
          </div>
        </div>
        <div>
          <p className=" text-2xl mb-4">Company</p>
          <div className=" flex flex-col gap-3 ">
            <Link className=" hover:underline hover:text-red-300" to={""}>
              Emi Policy
            </Link>
            <Link className=" hover:underline hover:text-red-300" to={""}>
              Privacy Policy & Cookies
            </Link>
            <Link className=" hover:underline hover:text-red-300" to={""}>
              Terms & Conditions
            </Link>
            <Link className=" hover:underline hover:text-red-300" to={""}>
              Return & Refund
            </Link>
          </div>
        </div>
        <div>
          <p className=" text-2xl mb-4">Contact</p>
          <div className=" space-y-3">
            <p>Need help to plan traveling? Contact our travel expert</p>
            <p className=" flex items-center gap-3">
              <MdOutlineAddIcCall size={30} className=" text-orange-300" />{" "}
              0(500)123-456
            </p>
            <p className=" flex items-center gap-3">
              <CgMail size={30} className=" text-orange-300" />
              testmail@gmail.com
            </p>
          </div>
        </div>
        <div>
          <p className=" text-2xl mb-4">Payment method</p>
          <div className=" space-y-3">
            <p>Secure Payment</p>
            <img
              className=" cursor-pointer"
              src="https://demo.themerox.com/travel-bird/wp-content/uploads/2023/12/payment.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr className=" w-[95%] mx-auto" />
      <p className=" text-center text-white">&copy; 2024 developed by kawsar hasa joy</p>
    </div>
  );
};

export default Footer;
