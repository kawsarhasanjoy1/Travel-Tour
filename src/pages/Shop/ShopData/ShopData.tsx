/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import shop from "../../../../public/Popular.json";
import Select from "../../../componets/Shop/Select";
import TourCard from "../../../componets/Home/TourCard";
import SInput from "../../../Form/SInput";

const ShopData = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Short");
  const [isInput, setIsInput] = useState("");
  const filter = shop?.filter((field) => field?.location == isInput);
  const data = filter?.length ? filter : shop;
  const HandleToOnChange = (e: any) => {
    setIsInput(e.target.value);
  };
  return (
    <div className=" md:mx-10 mx-2 -mt-24 mb-10">
      <div>
        <div className=" relative top-0 mx-auto">
          <SInput
            OnChange={HandleToOnChange}
            type="text"
            place="Search your location"
            name="location"
          />
        </div>
      </div>
      <div>
        <Select
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          shop={shop}
        />
      </div>
      <div className=" grid md:grid-cols-4 grid-cols-1 gap-5 -mt-16">
        {data.map((shop) => (
          <TourCard Tour={shop} link="/shop" />
        ))}
      </div>
    </div>
  );
};

export default ShopData;
