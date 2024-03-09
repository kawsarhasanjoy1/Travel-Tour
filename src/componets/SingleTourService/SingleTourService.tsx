import ServiceCard from "../Shop/ServiceCard";
import service from "../../../public/service.json";

const SingleTourService = () => {
  return (
    <div className=" bg-yellow-500 py-16 px-6 rounded-md">
      <p className=" flex justify-center text-3xl font-semibold text-gray-500 py-10">We Offer Best Services</p>
      <div className=" md:grid grid-cols-3 gap-6 space-y-5 md:space-y-0">
        {service.map((item) => (
          <ServiceCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default SingleTourService;
