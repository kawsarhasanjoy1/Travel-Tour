import { useState } from "react";
import { FaUserCog } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { SiSpringsecurity } from "react-icons/si";
import { Link } from "react-router-dom";
import SingUp from "./SingUp";

/* eslint-disable @typescript-eslint/no-explicit-any */
const LoginModal = ({
  openModal,
  setOpenModal,
}: {
  openModal: boolean;
  setOpenModal: any;
}) => {
  const [openSingUpModal, setSingUpOpenModal] = useState(false);
  return (
    <div className="w-72 mx-auto flex items-center justify-center">
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed flex justify-center items-center z-[100] ${
          openModal ? "visible opacity-1" : "invisible opacity-0"
        } inset-0 w-full h-full backdrop-blur-sm bg-black/20 duration-100`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-full lg:w-[500px] bg-white drop-shadow-2xl rounded-lg ${
            openModal
              ? "opacity-1 duration-300 translate-y-0"
              : "-translate-y-20 opacity-0 duration-150"
          }`}
        >
          <form className="p-12">
            <RxCross1
              size={20}
              onClick={() => setOpenModal(false)}
              className="w-10 mx-auto mr-0 cursor-pointer"
            />
            <h1 className="backdrop-blur-sm text-4xl pb-8">Login</h1>
            <div className="space-y-5">
              <label htmlFor="email" className="block">
                Email
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  placeholder="example@gmail.com"
                  className="p-3 block w-full pl-10 drop-shadow-lg rounded-lg outline-none"
                />
                <span className="absolute top-1/4 left-2">
                  <FaUserCog size={20} />
                </span>
              </div>
              <label htmlFor="password" className="block">
                Password
              </label>
              <div className="relative">
                <input
                  id="pass"
                  type="password"
                  placeholder=".............."
                  className="p-3 block w-full pl-10 drop-shadow-lg rounded-lg outline-none"
                />
                <span className="absolute top-1/4 left-2">
                  <SiSpringsecurity size={20} />
                </span>
              </div>
              <p>
                do you want to crate account{" "}
                <Link
                  onClick={() => setSingUpOpenModal(true)}
                  className=" text-yellow-400"
                  to={""}
                >
                  Register Now
                </Link>
              </p>
            </div>
            {/* button type will be submit for handling form submission*/}
            <button
              type="button"
              className=" bg-yellow-400 w-full h-12 mt-8 rounded-full font-bold hover:bg-yellow-500 transition-all outline-none shadow-2xl"
            >
              Login
            </button>
          </form>
          <SingUp
            openModal={openSingUpModal}
            setOpenModal={setSingUpOpenModal}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
