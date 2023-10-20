import Swal from 'sweetalert2'

const UpdateModal = ({ProductData}) => {
    const {_id, name, brandName, image, shortDescription } = ProductData

    const handleUpdate = (event) => {
        event.preventDefault()
        const form = event.target;

        const name = form.name.value;
        const description = form.description.value;
        const price = form.price.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const photo = form.photo.value;
        const code = form.code.value;

        const updateData ={name,description,price,category,quantity,photo,code}
        console.log(updateData)

        fetch(
          `http://localhost:5000/food${_id}`,
          {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updateData),
          }
        )
          .then((res) => res.json())
          .then((result) => {
            if(result.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'User Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                }
            // if (result.modifiedCount > 0) {
            //   setControl(!control);
            //   Swal.fire("Success!", "You updated the Toy!", "success");
            // } else {
            //   alert("Please change something to update data");
            // }
          });
      };
    return (
        <div>
           
            
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-green-700">
                <form >
                     <div className="mt-4">
                            <label className="text-white" >Name</label>
                            <input defaultValue={name} placeholder="Product name" name="name" className="w-full bg-base-100 rounded-md border-green-700 text-black px-2 py-1" type="text" />
                        </div>
                        <div className="mt-4">
                            <label className="text-white">Short Description</label>
                            <textarea defaultValue={shortDescription} placeholder="Enter your product description" name="description" className="w-full bg-base-100 rounded-md border-green-700 text-black px-2 py-1" id="address" defaultValue={""} />
                        </div>
                        <div className="mt-4 flex flex-row space-x-2">
                           
                            <div className="flex-1">
                                <label className="text-white" >Brand Name</label>
                                <input defaultValue={brandName} placeholder="product brandName" name="brandName" className="w-full bg-base-100 rounded-md border-green-700  text-black px-2 py-1" id="state" type="text" />
                            </div>
                        </div>
                        
                          
                       
                        <div className="mt-4">
                            <label className="text-white">Photo URL</label>
                            <textarea defaultValue={image} placeholder="Enter your product photo" name="photo" className="w-full bg-base-100 rounded-md border-green-700 text-black px-2 py-1" id="address"  />
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button className="bg-base-100 text-black rounded-md px-4 py-1 hover:bg-green-800 hover:text-white transition-all duration-200" type="submit">Submit</button>
                        </div>
                     </form>
                    {/* <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
                </div>
            </dialog>
        </div>
    );
};

export default UpdateModal;