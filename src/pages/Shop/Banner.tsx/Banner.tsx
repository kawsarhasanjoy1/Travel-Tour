
const Banner = () => {
 
  return (
    <div
      className=" md:h-screen  object-cover w-full bg-no-repeat bg-cover mb-16"
      style={{
        backgroundImage:
          'url("https://demo.themerox.com/travel-bird/wp-content/uploads/2024/01/shop-banner-min.png")',
      }}
    >
      <div className=" flex justify-center items-center font-semibold text-white md:h-screen flex-col h-[300px]">
        <p className=" text-3xl">Shop</p>
        <p>home {">"} shop</p>
      </div>
      
    </div>
  );
};

export default Banner;
