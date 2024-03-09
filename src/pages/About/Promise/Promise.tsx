const Promise = () => {
  return (
    <div className=" bg-yellow-50 w-full py-20 mt-10 md:px-10 px-2">
      <div className="text-center">
        <p className=" text-3xl font-semibold mb-10">What we promise</p>
      </div>
      <div className=" md:grid grid-cols-3 gap-10 text-center space-y-10 md:space-y-0">
        <div className=" flex flex-col justify-center items-center">
          <img src="https://i.ibb.co/YP4wjT0/sim-removebg-preview.png" className=" w-28 h-28" alt="" />
          <p className=" text-2xl font-semibold" >Simplicity</p>
          <p>
            From discovering to booking and taking part, we're here to make the
            journey easy.
          </p>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <img src="https://i.ibb.co/f2cPDr4/tra-removebg-preview.png" className=" w-28 h-28" alt="" />
          <p className=" text-2xl font-semibold" >Authenticity</p>
          <p>
            From discovering to booking and taking part, we're here to make the
            journey easy.
          </p>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <img src="https://i.ibb.co/0X6DnKZ/c-removebg-preview.png" className=" w-28 h-28" alt="" />
          <p className=" text-2xl font-semibold" >Curiosity</p>
          <p>
            From discovering to booking and taking part, we're here to make the
            journey easy.
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default Promise;
