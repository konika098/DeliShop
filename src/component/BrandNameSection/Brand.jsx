import { useEffect, useState } from "react";
import BrandDetails from "./BrandDetails";

const Brand = () => {
    const [data,setData] =useState([])

    const fetchUserData = () => {
        fetch("brand.json")
          .then(response => {
            return response.json()
          })
          .then(data => {
            setData(data)
          })
      }
      useEffect(()=>{
        fetchUserData()
      })
    return (
       <>
           <h1 className=" text-lg lg:text-5xl font-bold italic text-center text-green-600 mt-20  ">Top Brand Name</h1>
        <hr className="bg-green-800 w-1/5  mt-4 mx-auto h-1"/>
      
     <div className="grid grid-cols-1  mx-auto md:grid-cols-2 xl:grid-cols-3 mt-10 mb-5 -m-4">
     {
        data.map(showData => <BrandDetails key={showData.id} showData={showData}></BrandDetails>)
      }
     </div>
       </>
    );
};

export default Brand;