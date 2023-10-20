import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BrandDetails = ({Data}) => {
    const {_id,BrandName}= Data

    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{BrandName}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                         {/* <Link to={`/update/${_id}`}>
                    <button className="btn bg-white text-green-700 mt-5 hover:bg-white ">Update </button>
                    </Link> */}
                    <button className="btn bg-white text-green-700 mt-5 hover:bg-white" onClick={() => document.getElementById(`my_modal_3`).showModal()}>Update</button>
                    <Link to={`/viewDetails/${_id}`} >
                    <button className="btn bg-white text-green-700 mt-5 hover:bg-white ">View Details</button>
                    </Link>
                    </div>
                </div>
            </div>

        </>
    );
};

export default BrandDetails;
