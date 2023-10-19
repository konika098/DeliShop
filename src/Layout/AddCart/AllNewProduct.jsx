const AllNewProduct = ({ newDatas}) => {
    const { name, description, price, category, quantity, photo } = newDatas
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>{category}</p>
                    <div>
                    <p>price:{price}</p>
                    <p>Qun:{quantity}</p>
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