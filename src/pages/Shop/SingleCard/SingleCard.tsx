import { Carousel } from "../../../componets/Carousel/Carousel";
import AddReview from "../../../componets/Shop/AddReview";
import TourPlan from "../../../componets/Shop/TourPlan";
import SingleTourService from "../../../componets/SingleTourService/SingleTourService";


const SingleCard = () => {
  return (
    <div>
      <div className=" space-y-6 mb-32">
        <Carousel />
        <TourPlan/>
        <SingleTourService/>
        <AddReview/>
      </div>
    </div>
  );
};

export default SingleCard;
