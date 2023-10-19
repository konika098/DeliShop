import { Outlet } from "react-router-dom";
import Header from "../../component/HeaderSection/Header";
// import Footer from "../FooterSection/Footer";


const Root = () => {
    return (
        <>
        <Header/>
        <Outlet/>
       
        
        </>
    );
};

export default Root;