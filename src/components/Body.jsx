import Restaurants from "./Restaurants";
import BestOffers from "./carousels/BestOffers";
import TopRestaurant from "./carousels/TopRestaurant";

const Body = () => {
  return (
    <div>
      <BestOffers />
      <TopRestaurant />
      <Restaurants />
    </div>
  );
};

export default Body;
