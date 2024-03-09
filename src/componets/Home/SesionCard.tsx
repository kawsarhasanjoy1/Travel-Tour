import { Link } from "react-router-dom";
import { TSesion } from "../../types/global";

const SesionCard = ({ img, name, des, link }: TSesion) => {
  return (
    <div className=" relative">
      <img className=" rounded-md" src={img} alt="" />
      <div className=" absolute top-8 left-8 space-y-3">
        <p className=" font-[serif] text-[19px] font-semibold">{name}</p>
        <p className=" text-[28px] font-serif w-[15ch] font-bold">{des}</p>
        <Link className="" to={`${link}`}>
          <button className=" bg-yellow-200 text-black hover:bg-yellow-400 px-6 p-2 rounded-full border-none hover:shadow-2xl transition-all mt-3">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SesionCard;
