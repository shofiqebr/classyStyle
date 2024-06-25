/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import { TbCategoryMinus } from "react-icons/tb";
import { GroupsContext } from "../../App";
import { Link } from "react-router-dom";

const Navbar4 = () => {
 
  const grpData = useContext(GroupsContext);

  return (
    <div className="fixed hidden lg:top-0 md:block lg:left-0 z-[9999] h-screen md:h-full group w-20 bg-white shadow-2xl rounded-md hover:w-64 transform duration-500 px-4 p-3 ">
      <div className="">
        <div className="flex flex-col  gap-8">
          <div className="p-2 border w-14 bg-[#2794E9EA] transform duration-500 group-hover:w-56 rounded-full">
            <div className="flex items-center">
              <div>
                <MdMenu className="text-4xl text-white " />
              </div>
              <div className="group-hover:ml-3 hidden group-hover:block font-bold text-white">
                Menu
              </div>
            </div>
          </div>
          <div className="flex  hover:text-[#2794E9EA] cursor-pointer">
            <div>
              <TbCategoryMinus className="text-2xl ml-2" />
            </div>
            <div className="group-hover:ml-3 text-sm hidden group-hover:block  font-bold">
              All Category
            </div>
          </div>
          {
            grpData.map((group,index)=>(

          <Link to={`/category/${index}`} key={index}>
          <div  className="flex hover:text-[#2794E9EA] cursor-pointer">
            <div>
              <img
                className="w-7 ml-2"
                src={`https://erp.icfix.com.bd${group.image}`}
                alt=""
              />
            </div>
            <div className="group-hover:ml-3 text-sm hidden group-hover:block  font-bold">
              {group.name}
            </div>
          </div>
          </Link>
            ))}

{/* {props.grpData.map((group, index) => (
          <Link to={`/category/${index}`} key={index}>
        <div className="flex items-center flex-col">
          <h1 className="text-lg font-semibold pb-5">{group.name}</h1>
          <img
            className="w-36 h-36 p-3 rounded-full"
            src={`https://erp.icfix.com.bd${group.image}`}
            alt=""
          />
        </div>
        </Link>
        ))} */}


         <div className="flex hover:text-[#2794E9EA] cursor-pointer">
            <div>
              <img
                className="w-6 ml-2"
                src="https://i.ibb.co/cXPH927/accessories.png"
                alt=""
              />
            </div>
            <div className="group-hover:ml-3 text-sm hidden group-hover:block  font-bold">
              Others
            </div>
          </div>
          <div className="flex hover:text-[#2794E9EA] cursor-pointer">
            <div>
              <BsThreeDots className="text-2xl ml-2" />
            </div>
            <div className="group-hover:ml-3 hidden group-hover:block  font-bold">
              <div className="group-hover:ml-3 text-sm hidden group-hover:block  font-bold">
                All Product
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar4;
