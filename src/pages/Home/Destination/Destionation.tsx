import { Link } from "react-router-dom";

const Destionation = () => {
  return (
    <div
      className=" bg-cover w-full md:h-screen py-10"
      style={{
        backgroundImage:
          'url("https://demo.themerox.com/travel-bird/wp-content/uploads/2023/12/promo__banner.jpg")',
      }}
    >
      <div className=" md:pt-28 pt-6 ml-6 md:ml-28 space-y-6">
        <p className=" md:text-[40px] text-[24px] w-[18ch] font-bold font-serif">Grab up to 35% off on your favourite Destination</p>
        <p className=" md:w-[50ch] w-full">
          On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled
        </p>
        <Link className="" to={'/shop'}><button className=" px-6 py-2 rounded-full bg-black text-white hover:bg-white hover:text-black">Book Now</button></Link>
      </div>
    </div>
  );
};

export default Destionation;
