import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Banner from "../../Components/Banner/Banner";
import PopularCategory from "../../Components/PopularCategory/PopularCategory";
import Trending from "../../Components/Trending/Trending";
import AdsImages from "../../Components/AdsImages/AdsImages";

import HomeDecor from "../../Components/homeDecor/HomeDecor";
import { GroupsContext, ItemContext, WebContext } from "../../Root";
import { useContext } from "react";
import Title from "../../Components/title/Title";


const Home = () => {
  const grpData = useContext(GroupsContext);
  const webItmData = useContext(WebContext);
  const itemData = useContext(ItemContext);
  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-8">

     <Title title="home" />
      <Banner />
      <PopularCategory grpData={grpData} />
      <Trending grpData={grpData} webItmData={webItmData} itemData={itemData} />
      <AdsImages />
      <Trending grpData={grpData} webItmData={webItmData} itemData={itemData}/>
      <AdsImages />
      <HomeDecor grpData={grpData} webItmData={webItmData} itemData={itemData}/>
      
    </div>
  );
};

export default Home;
