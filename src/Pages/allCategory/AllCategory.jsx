import { TfiMenuAlt } from "react-icons/tfi";
import category1 from '../../assets/category1.png'
import { FaChevronDown } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet";

const AllCategory = () => {
    return (
        <div className="bg-[#F2F2F2] p-10">

            <Helmet>
                <meta charSet="utf-8" />
                <title>Classy Style | All Category</title>
             
            </Helmet>




            <div className="bg-white max-w-[1100px] mx-auto p-3 pb-8">


            <div className="flex justify-start items-center gap-2 text-xl text-[#F15B2D] py-5">
            <div><TfiMenuAlt /></div>
            <div>সকল ক্যাটাগরি</div>
                </div>    

                <hr className="pt-5" />

                {/* category div start */}
                <div className="grid grid-cols-4 gap-5
                ">

                    <Link to='/category'>
                    <div>
                         <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-3">

                        <a href="#"><img className="w-7" src={category1} alt="" /></a>
                        <a href="#" className="text-sm hover:text-[#F15B2D]">ছেলেদের ফ্যাশন</a>
                        </div>
                        <a href="#"><FaChevronDown className="text-blue-500 text-sm" /></a>
                    </div>
                    <hr />

                    </div>
                    </Link>
                    <div>
                         <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-3">

                        <a href="#"><img className="w-7" src={category1} alt="" /></a>
                        <a href="#" className="text-sm hover:text-[#F15B2D]">ছেলেদের ফ্যাশন</a>
                        </div>
                        <a href="#"><FaChevronDown className="text-blue-500 text-sm" /></a>
                    </div>
                    <hr />

                    </div>
                    <div>
                         <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-3">

                        <a href="#"><img className="w-7" src={category1} alt="" /></a>
                        <a href="#" className="text-sm hover:text-[#F15B2D]">ছেলেদের ফ্যাশন</a>
                        </div>
                        <a href="#"><FaChevronDown className="text-blue-500 text-sm" /></a>
                    </div>
                    <hr />

                    </div>
                    <div>
                         <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-3">

                        <a href="#"><img className="w-7" src={category1} alt="" /></a>
                        <a href="#" className="text-sm hover:text-[#F15B2D]">ছেলেদের ফ্যাশন</a>
                        </div>
                        <a href="#"><FaChevronDown className="text-blue-500 text-sm" /></a>
                    </div>
                    <hr />

                    </div>
                    <div>
                         <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-3">

                        <a href="#"><img className="w-7" src={category1} alt="" /></a>
                        <a href="#" className="text-sm hover:text-[#F15B2D]">ছেলেদের ফ্যাশন</a>
                        </div>
                        <a href="#"><FaChevronDown className="text-blue-500 text-sm" /></a>
                    </div>
                    <hr />

                    </div>
                    <div>
                         <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-3">

                        <a href="#"><img className="w-7" src={category1} alt="" /></a>
                        <a href="#" className="text-sm hover:text-[#F15B2D]">ছেলেদের ফ্যাশন</a>
                        </div>
                        <a href="#"><FaChevronDown className="text-blue-500 text-sm" /></a>
                    </div>
                    <hr />

                    </div>
                    <div>
                         <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-3">

                        <a href="#"><img className="w-7" src={category1} alt="" /></a>
                        <a href="#" className="text-sm hover:text-[#F15B2D]">ছেলেদের ফ্যাশন</a>
                        </div>
                        <a href="#"><FaChevronDown className="text-blue-500 text-sm" /></a>
                    </div>
                    <hr />

                    </div>
                    <div>
                         <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-3">

                        <a href="#"><img className="w-7" src={category1} alt="" /></a>
                        <a href="#" className="text-sm hover:text-[#F15B2D]">ছেলেদের ফ্যাশন</a>
                        </div>
                        <a href="#"><FaChevronDown className="text-blue-500 text-sm" /></a>
                    </div>
                    <hr />

                    </div>
                   

                </div>
                {/* category div end */}
            </div>
            
        </div>
    );
};

export default AllCategory;