const AllNewProduct = ({ newDatas}) => {
    const { Name, shortDescription , Price, Type, Image } = newDatas
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={Image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{Name}</h2>
                    <p>{shortDescription}</p>
                    <p>{Type}</p>
                    <div>
                    <p>Price:{Price}</p>
                    
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn bg-white text-green-700 mt-5 hover:bg-white ">View Details</button>
                        <button className="btn bg-white text-green-700 mt-5 hover:bg-white ">Update Data</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllNewProduct;