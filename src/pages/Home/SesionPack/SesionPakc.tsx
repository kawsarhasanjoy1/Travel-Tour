import SesionCard from "../../../componets/Home/SesionCard";

const SesionPakc = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 justify-items-center space-y-6 md:space-y-0">
      <SesionCard
        name={"Winter Package"}
        des={"Book your winter trip early"}
        link={"/"}
        img={
          "https://demo.themerox.com/travel-bird/wp-content/uploads/2023/12/super__deal.jpg"
        }
      />
      <SesionCard
        name={"Special Package"}
        des={"With Friends Tour Really Amazing"}
        link={"/"}
        img={
          "https://demo.themerox.com/travel-bird/wp-content/uploads/2023/12/big-sale.jpg"
        }
      />
      <SesionCard
        name={"Child Package"}
        des={"Explore our Latest Tour Packages"}
        link={"/"}
        img={
          "https://demo.themerox.com/travel-bird/wp-content/uploads/2023/12/super__sale.jpg"
        }
      />
    </div>
  );
};

export default SesionPakc;
