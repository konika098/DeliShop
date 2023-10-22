
import { useLoaderData } from "react-router-dom";
import BrandDetails from "./BrandDetails";


const BrandProduct = () => {
  const brandData = useLoaderData()







  return (
    <>
    
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:w-2/4 mx-auto gap-5 mt-5 ">
        {

          brandData?.map(Data => <BrandDetails key={Data._id} Data={Data}></BrandDetails>)
        }
      </div>
    </>
  );
};

export default BrandProduct;