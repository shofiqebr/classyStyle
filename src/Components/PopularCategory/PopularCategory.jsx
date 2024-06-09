import { Link } from "react-router-dom";

const PopularCategory = (props) => {
  // console.log(props);
  return (
    <div className="mt-16">
      <h1 className="text-3xl text-center font-bold text-[#f7941f]">
        Our Popular Categories
      </h1>
      <p className="border mt-5"> </p>
      <hr
        className="bg-red-600 h-1 -mt-1 mx-auto
           w-64"
      />

      <div className="flex items-center justify-center gap-12 flex-wrap mt-12">

      {props.grpData.map((group, index) => (
          <Link to={`/category/${index}`} key={index}>
        <div className="flex items-center flex-col">
          <h1 className="text-2xl font-bold ">{group.name}</h1>
          <img
            className="w-32 h-32 p-3 rounded-full"
            src={`https://erp.icfix.com.bd${group.image}`}
            alt=""
          />
        </div>
        </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularCategory;
