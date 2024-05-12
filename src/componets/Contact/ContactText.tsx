import { MdCall, MdEmail } from "react-icons/md";
import { TiLocation } from "react-icons/ti";

const ContactText = () => {
  return (
    <div>
      <p className=" text-xl font-bold">
        In a free hour, when our power of choice is untrammelled and when
        nothing prevents our being able to do what we like best, every pleasure
        is to be welcomed
      </p>
      <hr className=" my-6" />
      <div>
        <div className=" flex items-center gap-4 space-y-2 text-gray-600">
          <p>
            <MdCall size={30} />
          </p>
          <div className=" space-y-2">
            <p className=" text-xl font-semibold">Phone Number</p>
            <p>0259340954</p>
          </div>
        </div>
        <div className=" flex items-center gap-4 space-y-2 text-gray-600">
          <p>
            <MdEmail size={30} />
          </p>
          <div className=" space-y-2">
            <p className=" text-xl font-semibold">Email</p>
            <p>kawsar@gmail.com</p>
          </div>
        </div>
        <div className=" flex items-center gap-4 space-y-2 text-gray-600">
          <p>
            <TiLocation size={30} />
          </p>
          <div className=" space-y-2">
            <p className=" text-xl font-semibold">Location</p>
            <p>02 Princes Street, Toronto, Venice, Ca 124</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactText;
