import { GoLocation } from "react-icons/go";
import { TInput } from "../types/global";

const SInput = ({ place, name, type , OnChange}: TInput) => {
  return (
    <div className=" flex justify-center">
      <GoLocation className=" absolute top-0 md:left-[22%] left-[8%] mt-5 text-black" />
      <input onChange={OnChange}
        className=" md:w-[60%] w-[90%] border-2 border-orange-400 focus:border-none h-14 rounded-full text-black md:px-14 px-9 focus:outline-none shadow-2xl"
        placeholder={place}
        type={type}
        name={name}
        id=""
      />
    </div>
  );
};

export default SInput;
