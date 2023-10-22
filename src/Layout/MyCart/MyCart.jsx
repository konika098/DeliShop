import { useLoaderData } from "react-router-dom";
import CartData from "./CartData";
import { useState } from "react";
import Swal from "sweetalert2";


const MyCart = () => {
    const cartInfo = useLoaderData();
    const [food,setFood] = useState(cartInfo)
   

    const handleDetele = id => {
      console.log(id);
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
  
          fetch(`http://localhost:5000/deleteCart/${id}`, {
            method: 'DELETE'
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
                const remaining = food.filter(food => food._id !== id)
                setFood(remaining)
              }
            })
            .catch(error=>{
              console.log(error)
            })
        }
      })
  
    }

    return (
        <div>
            <div className="grid mx-5 lg:mx-10 gap-10 lg:grid-cols-3 grid-cols-1 mt-20">
                {
                    food?.map(itemData => <CartData key={itemData._id} ItemData={itemData} food={food} handleDetele={handleDetele} setFood={setFood}></CartData>)
                }
            </div>
        </div>
    );
};

export default MyCart;