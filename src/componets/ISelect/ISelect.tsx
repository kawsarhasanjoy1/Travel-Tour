import { TISelect } from "../../types/global";

const ISelect = ({ value, label }: { value: TISelect; label: string }) => {
  return (
    <div>
      <label htmlFor="" className="font-semibold text-gray-500">
        {label}
      </label>
      <select className="  outline-none bg-white shadow-2xl backdrop border-dashed border-2 border-black w-full md:px-6 px-2 h-10">
        {value.map((item) => {
          return (
            <option className="" value={item?.value}>
              {item?.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ISelect;
