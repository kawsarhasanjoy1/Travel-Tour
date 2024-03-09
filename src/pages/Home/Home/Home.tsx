import PopulerPack from "../PopulerPack/PopulerPack";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";
import SesionPakc from "../SesionPack/SesionPakc";
import Trending from "../TrendingPack/Trending";
import Destionation from "../Destination/Destionation";
import Testimonials from "../Testimonials/Testimonials";
import RecentPost from "../RecentPost/RecentPost";
import GetTouch from "../GetTouch/GetTouch";

const Home = () => {
  return (
    <div className=" space-y-16">
      <Banner />
      <PopulerPack />
      <Service />
      <SesionPakc />
      <Trending />
      <Destionation />
      <Testimonials />
      <RecentPost/>
      <GetTouch/>
    </div>
  );
};

export default Home;
