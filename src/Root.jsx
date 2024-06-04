import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";
import Navbar2 from "./Shared/Navbar/Navbar2";
import Navbar3 from "./Shared/Navbar/Navbar3/Navbar3";
import Footer from "./Shared/Footer/Footer";
import Navbar4 from "./Shared/Navbar/Navbar4";
import MobileNavDown from "./Components/mobileNavDown/MobileNavDown";


const Root = () => {
  return (
    <div className="" >
      <Navbar4/>
      <Navbar />
      <Navbar2 />
      <Navbar3 />
      <div className="md:ml-20">
        <Outlet  />
      </div>
      <div >
        <Footer />
       
      </div>
      

      <MobileNavDown className="fixed bottom-0 w-full z-10 bg-white md:hidden" />
   
    </div>
  );
};

export default Root;
