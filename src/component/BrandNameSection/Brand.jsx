// import { useEffect, useState } from "react";
// import BrandDetails from "./BrandDetails";
// import { useLoaderData } from "react-router-dom";
// import BrandProduct from "./BrandProduct";

import { Link } from "react-router-dom";

const Brand = ({showData}) => {
  const { image, Brand_Name } = showData
 

 
 
  return (
    <>
      <Link to='/BrandProduct' className="mx-auto mb-20">
                    <img className="h-[200px] w-80" src={image} alt="" />
                    {/* <p className="text-center font-semibold text-3xl">{ Brand_Name}</p> */}

                </Link>
      
    </>
  );
};

export default Brand;