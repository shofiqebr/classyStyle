import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { TiArrowShuffle } from "react-icons/ti";
import { Link } from "react-router-dom";
// import Card from "../../Shared/Card/Card";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Trending = (props) => {
  const {grpData, webItmData, itemData} = props;
  const [tabIndex, setTabIndex] = useState(0);

  const rate = (id) => {
    let fil = itemData.find((item) => item.item_code === id);
    return fil?.standard_rate;
  };

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
            <TabList role="tablist" className="text-center md:block flex flex-wrap justify-center tabs-bordered bg-transparent mt-10  ">
              {grpData.map((grp, index) => (
                <Tab
                  key={index}
                  role="tab"
                  className="tab md:h-8 h-14  overflow-hidden text-left text-[10px] md:text-xl  md:w-auto  bg-transparent  focus:outline-none focus:ring focus:ring-transparent ">
                  {grp.name}
                </Tab>

              ))}
            </TabList>


            {grpData.map((grp, index) => (
                <TabPanel  key={index}>


                  {/* card part start */}


                  <section className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-12 ">
      


                  {webItmData
                    .filter((item) => item.item_group === grp.name)
                    .map((itm, index) => (
      
      <Link to={`/item/${itm?.item_code}`} key={index}>
      <div className="relative p-1 text-center group transform duration-500 cursor-pointer">
        <div className="absolute hidden group-hover:block top-8 right-4 rounded-md w-10 bg-white ">
          <div className="flex flex-col items-center justify-center gap-4 ">
            <div data-tip="Compare" className="tooltip tooltip-left">
            <TiArrowShuffle className="text-2xl" />
           </div>
            <div data-tip="Search" className="tooltip tooltip-left">
            <IoSearch className="text-2xl" />
            </div>
            <div data-tip="Add to Wishlist" className="tooltip tooltip-left">
            <CiHeart className="text-2xl" />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
        <img
        className="rounded-md w-60 h-72"
          src={`https://erp.icfix.com.bd${itm?.thumbnail}`}
          alt=""
        />
        </div>

        <h1 className="md:text-xl text-lg my-5 font-semibold">
        {itm.item_group}
        </h1>
        <p>
        {itm.web_item_name}
        </p>
        <h2 className="font-semibold ">
          {" "}
          <span className="text-2xl font-bold">&#2547;</span>{rate(itm.item_code)}
        </h2>
        <div className=" flex justify-center mt-2">
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
        </div>
        <div className="mt-8 flex md:flex-row flex-col gap-3 items-center justify-center">
          <div className="flex">
            <div className="text-2xl border px-3 py-1 border-l-2 rounded-l-full font-bold">
              -
            </div>
            <input
              className="border w-8 text-center"
              type="text"
              defaultValue={1}
            />
            <div className="text-2xl border px-3 py-1 border-l-2 rounded-r-full font-bold">
              +
            </div>
          </div>
          <div>

            <Link to='/cart'>
            <button className="px-6 py-2 bg-[#27aae1] transition ease-in duration-200 uppercase rounded-full text-xs md:text-base  hover:text-white border-2  focus:outline-none">
              Add to cart
            </button>
            </Link>
          </div>
        </div>
      </div>
      </Link>
     ))}
      
    </section>

                  {/* card part end */}
               
                </TabPanel>
               
                ))}
          </Tabs>




        </div>





        {/* tab area end */}



      </div>
    </div>
  );
};

export default Trending;
