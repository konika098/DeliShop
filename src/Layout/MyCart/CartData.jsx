import Swal from "sweetalert2";


const CartData = ({ ItemData, handleDetele}) => {
    const { _id, Image, Name, Price,  BrandName } = ItemData || {}

    


    return (
       <>
             
      <div className="card w-80 bg-base-100 shadow-xl  mx-auto">
        <figure >
          <img src={Image} alt="Shoes" className="w-full h-80" />
        </figure>
        <div className="card-body">
          <h2 className=" text-xl font-semibold">Brand:{BrandName}</h2>
          <p className=" text-lg font-medium">{Name}</p>
          <p className=" font-semibold">{Price}TK</p>
          <div className="lg:flex justify-between">

            <button onClick={() => handleDetele(ItemData._id)} className="btn lg:p-2 p-1 bg-green-700 hover:bg-green-600 text-white">Delete</button>

          </div>
        </div>
      </div>
    
       </>
    );
};

export default CartData;