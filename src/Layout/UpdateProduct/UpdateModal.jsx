/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Swal from 'sweetalert2'

const UpdateModal = ({ Data }) => {
    const { _id, Name, BrandName, Image, } = Data
    console.log(Data);


    const handleUpdate = (event) => {
        event.preventDefault()
        const form = event.target;

        const Name = form.Name.value;




        const Image = form.Image.value;
        const BrandName = form.BrandName.value;


        const updateData = { Name: Name, BrandName: BrandName, Image: Image, }
        console.log(updateData)

        fetch(
            `http://localhost:5000/update/${_id}`,
            {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(updateData),
            }
        )
            .then((res) => res.json())
            .then((result) => {
                console.log(result)
                if (result.acknowledged) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product updated  Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }

            });
    };
    return (

        <>
           {/* Open the modal using document.getElementById('ID').showModal() method */}
           
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-green-700">
                    <form onSubmit={handleUpdate}>
                    <div className="mt-4">
                             <label className="text-white" >Name</label>
                            <input defaultValue={Name} name="Name" className="w-full bg-base-100 rounded-md border-green-700 text-black px-2 py-1" type="text" />
                         </div>
                        {/* <div className="mt-4">
                           <label className="text-white">Short Description</label>
                             <textarea defaultValue={shortDescription}  name="description" className="w-full bg-base-100 rounded-md border-green-700 text-black px-2 py-1" id="address" defaultValue={""} />
                         </div> */}
                         <div className="mt-4 flex flex-row space-x-2">

                            <div className="flex-1">
                                <label className="text-white" >Brand Name</label>
                            <input defaultValue={BrandName} name="BrandName" className="w-full bg-base-100 rounded-md border-green-700  text-black px-2 py-1" id="state" type="text" />
                            </div>
                      </div>



                       <div className="mt-4">
                           <label className="text-white">Photo URL</label>
                            <textarea defaultValue={Image} placeholder="Enter your product photo" name="Image" className="w-full bg-base-100 rounded-md border-green-700 text-black px-2 py-1" id="address" />
                        </div>
                        <button className="bg-base-100 text-black rounded-md px-4 py-1 hover:bg-green-800 hover:text-white transition-all duration-200" type="submit">Submit</button>
                    </form>
                    <div className="modal-action">
                        <form  method="dialog">
                       
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                         
                        </form>
                    </div>
                </div>
            </dialog>
        </>
        // <div>
         


        //     <dialog id="my_modal_3" className="modal">
        //         <div className="modal-box ">
        //             <form >
        //                

        //               
        //                
        //                 <div className="mt-4 flex justify-end">
        //                     
        //                 </div>
        //             </form>


        //         </div>
        //     </dialog>
        // </div>
    );
};

export default UpdateModal;