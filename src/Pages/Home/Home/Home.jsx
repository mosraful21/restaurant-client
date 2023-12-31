import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import ParallaxItem from "../ParallaxItem/ParallaxItem";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Restaurant | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <ParallaxItem />
      <PopularMenu />
      <Featured/>
      <Testimonials />
    </div>
  );
};

export default Home;
