import About from "../../component/AboutSection/About";
import Banner from "../../component/BannerSection/Banner";
import Brand from "../../component/BrandNameSection/Brand";

import Offer from "../../component/OfferSection/Offer";
import Review from "../../component/ReviewSection/Review";
// import BrandDetails from "../../component/BrandNameSection/BrandDetails";
import Footer from "../FooterSection/Footer";


const Home = () => {
    return (
        <>
        
        <Banner/>
        <Offer/>
        <Brand/>
        {/* <BrandDetails/> */}
        <About/>
        <Review/>
        
        
        <Footer/>
        
        </>
    );
};

export default Home;