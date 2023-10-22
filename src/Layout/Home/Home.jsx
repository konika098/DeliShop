import { useEffect, useState } from "react";
import About from "../../component/AboutSection/About";
import Banner from "../../component/BannerSection/Banner";
import Brand from "../../component/BrandNameSection/Brand";

import Offer from "../../component/OfferSection/Offer";
import Review from "../../component/ReviewSection/Review";
// import BrandDetails from "../../component/BrandNameSection/BrandDetails";
import Footer from "../FooterSection/Footer";


const Home = () => {
    const [data, setData] = useState([])
    const fetchUserData = () => {
        fetch("brand.json")
          .then(response => {
            return response.json()
          })
          .then(data => {
            setData(data)
          })
      }
      useEffect(() => {
        fetchUserData()
      })
     
      
    return (
        <>
        
        <Banner/>
        <Offer/>
        {/* <Brand/> */}
        <h1 className=" text-lg lg:text-5xl font-bold italic text-center text-green-600 mt-24  ">Top Brand Name</h1>
        <hr className="bg-green-800 w-1/5  mt-4 mx-auto h-1" />

        <div className="grid grid-cols-1  mx-auto md:grid-cols-2 xl:grid-cols-3 mt-10 mb-5 -m-4">
          {
            
            data?.map(showData =><Brand key={showData.id} showData={showData}></Brand>)
          }
        </div>
        {/* <BrandDetails/> */}
        <About/>
        <Review/>
        
        
        <Footer/>
        
        </>
    );
};

export default Home;