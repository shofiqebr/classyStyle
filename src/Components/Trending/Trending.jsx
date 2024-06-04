import { useState } from "react";
import Card from "../../Shared/Card/Card";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Trending = () => {

  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="mt-16">
      <div>
        <h1 className="text-3xl text-center font-bold text-[#f7941f]">
          Trending
        </h1>
        <p className="border mt-5"> </p>
        <hr
          className="bg-red-600 h-1 -mt-1 mx-auto
           w-64"
        />

{/* tab area start */}

        <div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList role="tablist" className="text-center md:block flex  justify-center tabs-bordered bg-transparent mt-10  ">
            
              <Tab
                
                role="tab"
                className="tab md:h-8 h-14  overflow-hidden text-left text-[10px] md:text-xl  md:w-auto  bg-transparent  ">
                New Product
              </Tab>
              <Tab
                
                role="tab"
                className="tab md:h-8 h-14  overflow-hidden text-left text-[10px] md:text-xl  md:w-auto  bg-transparent ">
                Top Rated Product
              </Tab>
          
          </TabList>

    <TabPanel>
    <Card />
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>



          
        </div>





{/* tab area end */}



      </div>
    </div>
  );
};

export default Trending;
