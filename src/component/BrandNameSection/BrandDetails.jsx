
import { Link } from "react-router-dom";
import UpdateModal from "../../Layout/UpdateProduct/UpdateModal";


const BrandDetails = ({Data}) => {
    const {_id,BrandName,Name,Image,shortDescription}= Data
   
    console.log(Data)
   

    return (
        <>
            <div className="card w-80 bg-base-100 shadow-xl  mx-auto">
                <figure><img className="h-80 w-full" src={Image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h1>{Name}</h1>
                    <h2 className="card-title">{BrandName}</h2>
                    <p>{shortDescription}</p>
                    <div className="card-actions justify-end">
                     
                  {/* <Link to={`/update/${_id}`}> */}
                  <button className="btn bg-white text-green-700 mt-5 hover:bg-white"  onClick={() => document.getElementById('my_modal_5').showModal()}> Update</button>
                  {/* </Link> */}
                    <Link to={`/viewDetails/${_id}`} >
                    <button className="btn bg-white text-green-700 mt-5 hover:bg-white ">View Details</button>
                    </Link>
                    <UpdateModal Data={Data}/>
                    </div>
                </div>
            </div>

        </>
    );
};

export default BrandDetails;
