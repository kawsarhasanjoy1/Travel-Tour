const Banner = () => {
  return (
    <div className=" ">
      <div
        style={{
          backgroundImage: 'url("https://i.ibb.co/YP1pYSz/a.jpg")',
        }}
        className=" h-screen bg-cover object-cover relative z-[-1]"
      >
        <div className=" flex flex-col justify-center h-screen text-white px-5 md:px-20 space-y-4">
          <p className=" text-3xl font-semibold z-10">About Us</p>
          <p className=" z-10 md:w-[70ch]">
            Our hassle-free managed hosting saves you time and money so you can
            focus on growing your agency or e-commerce business.
          </p>
        </div>
        <div className=" bg-black h-full w-full absolute top-0  opacity-50"></div>
      </div>
      <div className=" md:grid grid-cols-12 w-[90%]  md:max-w-6xl gap-10 mx-auto bg-[#ffffff] shadow-2xl -mt-20 rounded-2xl">
        <div className="  col-span-4">
          <img
            className=" rounded-2xl relative"
            src="https://demo.themerox.com/travel-bird/wp-content/uploads/2023/11/man-women-standing.jpg"
            alt=""
          />
          <div className=" flex flex-col justify-center items-center -mt-32 bg-yellow-100 p-10 rounded-md w-52 h-32 border-2 absolute">
            <p className=" text-xl font-bold">24/7/365</p>
            <p>Customer Support</p>
          </div>
        </div>
        <div className=" col-span-8 space-y-5 pt-16 px-3">
          <p className=" text-2xl">Mission & Vision</p>
          <p className=" text-2xl font-bold">
            On the other hand, we denounce with righteous indignation and
            dislike
          </p>
          <p className="text-2xl font-bold">Mission</p>
          <p className="">
            TravelBird will be known for its focus on service delivery quality,
            our proven travel-sector expertise and latest technological travel
            solutions curating customer centered designs; with focus on customer
            delight. Investment in technology is and will be the major part of
            the equation for the company to constantly upgrade and be on the
            lookout for the advantage that we can offer to our customers for new
            experiences.
          </p>
          <p className="text-2xl font-bold">Vision</p>
          <p>
            We intend to keep up the applause with Royal Deliverance with each
            safari and each sailing. To get better at our deliverables with each
            passing day redefining the hospitality of this great; land offering
            love and warmth to every guests setting his or her foot on this
            magical land of UAE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
