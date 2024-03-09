/* eslint-disable @typescript-eslint/no-explicit-any */

const ServiceCard = ({ item }: { item: any }) => {
  return (
    <div className=" group">
      <div className=" overflow-hidden">
        <img
          className=" group-hover:scale-105 transition-all duration-300 object-cover w-full h-[250px] rounded-md"
          src={item?.image}
          alt=""
        />
      </div>
      <div>
        <p className=" text-lg font-semibold">{item?.service}</p>
        <p>{item?.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
