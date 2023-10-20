import { useLoaderData } from "react-router-dom";
import ViewData from "./viewData";

const ViewDetails = () => {
    const view =useLoaderData()
    return (
        <>
        {
            
            view.map(data=><ViewData key={data._id} Data={data} ></ViewData>)
        }
        </>
    );
};

export default ViewDetails;