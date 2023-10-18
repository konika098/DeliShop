
const AddToCart = () => {
    return (
        <>
            <div className="w-full min-h-screen bg-[url('https://ibb.co/pPWrt6V')] bg-cover bg-center ">
                <div className="w-full min-h-screen h-full  flex flex-col  justify-center items-center  md:backdrop-brightness-50">
                    <div className="mt-4 flex flex-col bg-gray-900 rounded-lg p-4 shadow-sm">
                        <h2 className="text-white font-bold text-lg">Shipping Label Address Form</h2>
                        <div className="mt-4">
                            <label className="text-white" name="name">Name</label>
                            <input placeholder="Product name" className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" type="text" />
                        </div>
                        <div className="mt-4">
                            <label className="text-white" name="description">Short Description</label>
                            <textarea placeholder="Enter your product description" className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" id="address" defaultValue={""} />
                        </div>
                        <div className="mt-4 flex flex-row space-x-2">
                            <div className="flex-1">
                                <label className="text-white" name="price">Price</label>
                                <input placeholder="price" className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" id="city" type="text" />
                            </div>
                            <div className="flex-1">
                                <label className="text-white" name="category">Category</label>
                                <input placeholder="product category" className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" id="state" type="text" />
                            </div>
                        </div>
                        <div className="mt-4 flex flex-row space-x-2">
                            <div className="flex-1">
                                <label className="text-white" name="quantity">Quantity</label>
                                <input placeholder=" quantity " className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" id="zip" type="text" />
                            </div>
                           <div>
                           <label className="text-white" name="photo">Photo</label>
                           </div>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button className="bg-white text-black rounded-md px-4 py-1 hover:bg-blue-500 hover:text-white transition-all duration-200" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
};

export default AddToCart;