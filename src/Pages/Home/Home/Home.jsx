import MenuItem from "../MenuItems/MenuItem";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefService from "../Chef-Service/ChefService";
import CallUs from "../Chef-Service/CallUs";
import Recommends from "../Recommends/Recommends";
import Features from "../Features/Features";
import Testimonial from "../Testimonial";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="space-y-20">
      <Helmet>
        <title>BISTRO BOSS | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <ChefService />
      <MenuItem />
      <CallUs />
      <Recommends />
      
      <Features />
      <Testimonial />
    </div>
  );
};

export default Home;
