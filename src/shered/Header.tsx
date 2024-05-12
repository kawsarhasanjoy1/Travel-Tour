import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { LuUserMinus } from "react-icons/lu";
import LoginModal from "../componets/Home/LoginModal";
import { Link } from "react-router-dom";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const HandleHeader = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <LoginModal openModal={openModal} setOpenModal={setOpenModal} />
      <nav className="flex items-center  px-4 py-2 text-black">
        <div className=" rounded-2xl px-3 py-2 text-xl font-semibold text-black transition-all duration-200  flex justify-between items-center">
          <p className=" flex items-center">
            Travel <span className=" text-yellow-400">Bird</span>
          </p>
        </div>
        <div className=" w-full  md:z-0 z-20 md:hidden">
          <div className=" absolute top-4 right-3">
            <span onClick={HandleHeader} className="md:hidden">
              {isOpen ? <AiOutlineClose size={25} /> : <FaBars size={25} />}
            </span>
          </div>
        </div>
        <div
          className={` md:flex  items-center justify-end  h-14  gap-10 py-2 absolute md:static md:space-y-0 space-y-4 ${
            isOpen
              ? " left-0 rounded-md z-10 right-0 top-20 w-full h-full px-5 transition-all  duration-500 bg-white"
              : "   -left-[450px] top-20 md:flex justify-between w-full"
          }`}
        >
          <ul className="md:flex  items-center mx-auto  text-slate-900 justify-center font-bold font-[Roboto]">
            <Link to={"/"}>
              <li className="cursor-pointer  rounded-full  px-6 py-2 text-black hover:bg-sky-100">
                Home
              </li>
            </Link>
            <Link to={"/about"}>
              <li className="cursor-pointer  rounded-full px-6 py-2 text-black hover:bg-sky-100">
                About Us
              </li>
            </Link>
            <Link to={"/shop"}>
              {" "}
              <li className="cursor-pointer  rounded-full px-6 py-2 text-black hover:bg-sky-100">
                Shop
              </li>
            </Link>
            <li className="cursor-pointer  rounded-full px-6 py-2 text-black hover:bg-sky-100">
              Blog
            </li>
            <Link to={"/contact"}>
              <li className="cursor-pointer  rounded-full px-6 py-2 text-black hover:bg-sky-100">
                Contact Us
              </li>
            </Link>
            <Link to={"/dashboard"}>
              <li className="cursor-pointer  rounded-full px-6 py-2 text-black hover:bg-sky-100">
                Dashboard
              </li>
            </Link>
          </ul>
          <div>
            <li
              onClick={() => setOpenModal(true)}
              className="cursor-pointer flex justify-center items-center rounded-full  text-black hover:bg-sky-100 outline-none  w-14 h-14 border-2 "
            >
              <button>
                <LuUserMinus />
              </button>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
