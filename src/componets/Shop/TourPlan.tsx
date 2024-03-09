import { hotel, timeSlot, tourType } from "../../option/option";
import ISelect from "../ISelect/ISelect";
import Input from "../Input/Input";

const TourPlan = () => {
  return (
    <div className=" border-2 rounded-t-2xl">
      <p className=" bg-[rgb(232,231,197)] h-20 rounded-t-2xl flex justify-center items-center text-3xl font-semibold text-gray-500">
        Tour Plane
      </p>
      <form>
        <div className=" md:grid grid-cols-4 gap-4 space-y-6 md:space-y-0 py-10 px-2 md:px-5">
          <Input name="Date" place="" type="date" />
          <ISelect label="Select Hotel" value={hotel} />
          <Input
            name="PicUp"
            place="Place enter your pick up address"
            type="text"
          />
          <ISelect label="Select Hotel" value={tourType} />
          <ISelect label="Select Hotel" value={timeSlot} />
          <Input type="text" name="Adult" place="Please enter your age" />
          <Input type="text" name="Child" place="Please enter your age" />
          <Input type="text" name="Infant" place="Please enter your age" />
        </div>
        <div className=" px-2 md:px-5">
          <label htmlFor="">Special Request</label>
          <textarea
            name="text"
            id=""
            placeholder="Type here..."
            className=" w-full py-4 outline-none border-2 px-4 shadow-2xl"
            rows={5}
          ></textarea>
        </div>
        <div className=" flex justify-between md:px-5 px-2 py-4">
          <p className=" text-2xl font-semibold">Total : 50.00 AED</p>
          <button className=" bg-yellow-400 px-10 py-2 rounded-full transition-all duration-300 hover:bg-yellow-600">
            <p>Book Now</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default TourPlan;
