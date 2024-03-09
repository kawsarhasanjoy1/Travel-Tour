/* eslint-disable @typescript-eslint/no-explicit-any */
import { TSelect } from "../../types/global";

const Select = ({
  setIsOpen,
  isOpen,
  selectedValue,
  shop,
  setSelectedValue,
}: TSelect) => {
  const options = ["Short high to low", "Short low to high"];
  return (
    <div className=" md:flex justify-between mt-28">
      <p className=" text-xl text-center md:text-start mb-4 md:mb-0">
        {shop?.length} package found
      </p>
      <div>
        {/* dropdown - btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className=" mx-auto flex w-72 items-center justify-between rounded-xl bg-white px-6 py-2 border"
        >
          <h1 className="font-medium text-gray-600">{selectedValue}</h1>
          <svg
            className={`${isOpen ? "-rotate-180" : "rotate-0"} duration-300`}
            width={25}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M7 10L12 15L17 10"
                stroke="#4B5563"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>
        {/* dropdown - options  */}
        <div
          className={`${
            isOpen ? "visible top-0 opacity-100" : "invisible -top-4 opacity-0"
          } relative mx-auto my-4 w-72 rounded-xl py-4 border duration-300 z-50`}
        >
          {options?.map((option, idx) => (
            <div
              key={idx}
              onClick={(e: any) => {
                setSelectedValue(e.target?.textContent);
                setIsOpen(false);
              }}
              className="px-6 py-2 text-gray-500 hover:bg-gray-100"
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Select;
