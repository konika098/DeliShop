import { useLoaderData } from "react-router-dom";
import ViewData from "./viewData";

const ViewDetails = () => {
    const view =useLoaderData()
    return (
        <>
        {
            // viewData.map(data=><ViewData key={data._id} Data={data}></ViewData>)
            view.map(data=><ViewData key={data._id} Data={data} ></ViewData>)
        }
        </>
    );
};

export default ViewDetails;