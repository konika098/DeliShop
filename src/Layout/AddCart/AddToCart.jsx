import Swal from 'sweetalert2'
const AddToCart = () => {
    const handleAddFood =event=>{
        event.preventDefault()
        const form = event.target;

        const name = form.name.value;
        const description = form.description.value;
        const price = form.price.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const photo = form.photo.value;
        const code = form.code.value;

        const newFood ={name,description,price,category,quantity,photo,code}
        console.log(newFood)


        fetch("http://localhost:5000/food",{
            method : 'POST',
            headers :{
                'content-type' : 'application/json'
            },
            body : JSON.stringify(newFood)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'User Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                
            }
        })
        

    }
    return (
        <>
            <div className="w-full min-h-screen bg-[url('https://i.ibb.co/8Dnjv5P/pexels-photo-3338497.jpg')] bg-cover bg-center ">
                <div className="w-full min-h-screen h-full  flex flex-col  justify-center items-center  md:backdrop-brightness-50">
                    <div className="mt-4 flex flex-col bg-green-800 rounded-lg p-4 shadow-sm">
                        <h2 className="text-white text-center font-bold text-xl">Add To Cart</h2>
                     <form onSubmit={handleAddFood}>
                     <div className="mt-4">
                            <label className="text-white" >Name</label>
                            <input placeholder="Product name" name="name" className="w-full bg-base-100 rounded-md border-green-700 text-black px-2 py-1" type="text" />
                        </div>
                        <div className="mt-4">
                            <label className="text-white">Short Description</label>
                            <textarea placeholder="Enter your product description" name="description" className="w-full bg-base-100 rounded-md border-green-700 text-black px-2 py-1" id="address" defaultValue={""} />
                        </div>
                        <div className="mt-4 flex flex-row space-x-2">
                            <div className="flex-1">
                                <label className="text-white" >Price</label>
                                <input placeholder="price" name="price" className="w-full bg-base-100 rounded-md border-green-700 text-black px-2 py-1" id="city" type="text" />
                            </div>
                            <div className="flex-1">
                                <label className="text-white" >Category</label>
                                <input placeholder="product category" name="category" className="w-full bg-base-100 rounded-md border-green-700  text-black px-2 py-1" id="state" type="text" />
                            </div>
                        </div>
                        <div className="mt-4 flex flex-row space-x-2">
                            <div className="flex-1">
                                <label className="text-white" >Quantity</label>
                                <input placeholder=" quantity " name="quantity" className="w-full bg-base-100 rounded-md border-green-700 text-black px-2 py-1" type="text" />
                            </div>
                           <div>
                           <label className="text-white" >Code</label>
                           <input placeholder=" code "  name="code" className="w-full bg-base-100 rounded-md border-green-700 text-black px-2 py-1" type="text" />
                           </div>
                        </div>
                        <div className="mt-4">
                            <label className="text-white">Photo URL</label>
                            <textarea placeholder="Enter your product photo" name="photo" className="w-full bg-base-100 rounded-md border-green-700 text-black px-2 py-1" id="address"  />
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button className="bg-base-100 text-black rounded-md px-4 py-1 hover:bg-green-800 hover:text-white transition-all duration-200" type="submit">Submit</button>
                        </div>
                     </form>
                    </div>
                </div>
            </div>



        </>
    );
};

export default AddToCart;