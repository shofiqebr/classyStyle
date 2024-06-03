import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Banner from "../../Components/Banner/Banner";
import PopularCategory from "../../Components/PopularCategory/PopularCategory";
import Trending from "../../Components/Trending/Trending";
import AdsImages from "../../Components/AdsImages/AdsImages";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-8">

            <Helmet>
                <meta charSet="utf-8" />
                <title>Classy Style | Home</title>
             
            </Helmet>
      <Banner />
      <PopularCategory />
      <Trending />
      <AdsImages />
      <Trending />
      <AdsImages />
      <Trending />
    </div>
  );
};

export default Home;
