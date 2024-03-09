const OurThem = () => {
  return (
    <div>
      <p className=" text-3xl font-semibold text-center mb-10 mt-16">Our Them</p>
      <div className=" md:grid grid-cols-4 space-y-4 md:space-y-0 gap-10 md:mx-10">
        <div>
          <img
            src="https://i.ibb.co/17sy7Bp/th1.jpg"
            className=" object-cover w-full"
            alt=""
          />
          <p className=" text-xl font-semibold">Jocelyn Schleifer</p>
          <p>Software Engineer</p>
        </div>
        <div>
          <img
            src="https://i.ibb.co/Ph9jS0P/th2.jpg"
            className=" object-cover  w-full"
            alt=""
          />
          <p className=" text-xl font-semibold">Christi Outen</p>
          <p>Head of HR & Admin</p>
        </div>
        <div>
          <img
            src="https://i.ibb.co/4VfnYjP/th3.jpg"
            className=" object-cover  w-full"
            alt=""
          />
          <p className=" text-xl font-semibold">Frank Charles</p>
          <p>Head of Design</p>
        </div>
        <div>
          <img
            src="https://i.ibb.co/Cz4RKvK/th4.jpg"
            className=" object-cover  w-full"
            alt=""
          />
          <p className=" text-xl font-semibold">Albert Heck</p>
          <p>Head of Content</p>
        </div>
      </div>
    </div>
  );
};

export default OurThem;
