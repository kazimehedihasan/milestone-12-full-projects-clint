import { Helmet } from "react-helmet-async";
import Banner from "../../Banner/Banner";
import Category from "../../Category/Category";
import Chef from "../../Chef/Chef";
import Contact from "../../Contact/Contact";
import OverviewServices from "../../OverviewServices/OverviewServices";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistor Boss | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <OverviewServices />
      <PopularMenu />
      <Contact />
      <Chef />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
