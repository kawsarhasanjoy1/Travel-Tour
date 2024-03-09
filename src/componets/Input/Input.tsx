import { TIInput } from "../../types/global";

const Input = ({ type, name, place, className }: TIInput) => {
  return (
    <div>
      <label htmlFor="" className=" font-semibold text-gray-500">
        {name}
      </label>
      <input
        type={type}
        placeholder={place}
        className={`outline-none border-2 rounded-md w-full px-6 h-10 shadow-2xl ${className}`}
        name={name}
        id=""
      />
    </div>
  );
};

export default Input;
