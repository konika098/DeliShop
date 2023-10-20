// import { useLoaderData } from "react-router-dom";

import Slider from "../Silder/Silder";
import Swal from 'sweetalert2'

const AddProduct = () => {




    const handleAddFood = event => {
        event.preventDefault()
        const form = event.target;

        const name = form.name.value;
        const description = form.description.value;
        const price = form.price.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const photo = form.photo.value;
        const code = form.code.value;

        const newFood = { name, description, price, category, quantity, photo, code }
        console.log(newFood)


        fetch("http://localhost:5000/food", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
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
            <Slider />
            <div className="flex flex-1 gap-5 mt-20">
                {/* {
                    products.map(productData => <Product key={productData._id} ProductData={productData}></Product>)
                } */}
            </div>
            <div className="w-full min-h-screen bg-[url('https://i.ibb.co/8Dnjv5P/pexels-photo-3338497.jpg')] bg-cover bg-center ">
                <div className="w-full min-h-screen h-full  flex flex-col  justify-center items-center  md:backdrop-brightness-50">
                    <div className="mt-4 flex flex-col bg-green-800 rounded-lg p-4 shadow-sm">
                        <h2 className="text-white text-center font-bold text-xl">Add To Cart</h2>
                       
                       <form onSubmit={handleAddFood} className='flex  flex-col justify-center mx-auto' >
                                        <div className="lg:flex items-center  gap-3 ">
                                            <div className="flex text-white flex-col gap-2  mb-5">
                                                <label htmlFor="name">Name</label>
                                                <input type="text" className="px-3 py-2 " name="name" placeholder="Product name" />
                                            </div>
                                            <div className="flex text-white flex-col gap-2 mb-5 lg:w-[205px]">
                                                <label htmlFor="Brand">Brand</label>
                                                <select id="Brand" name="brandName" className="px-3 py-2 text-green-800" >
                                                    <option value="Coca-Cola"  >Coca-Cola</option>
                                                    <option value="McDonald's">McDonald's</option>
                                                    <option value="Starbucks">Starbucks</option>
                                                    <option value="PepsiCo">PepsiCo</option>
                                                    <option value="Nestlé">Nestlé</option>
                                                    <option value="Kellogg's">Kellogg's</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="lg:flex items-center text-white gap-3 ">
                                            <div className="flex flex-col gap-2  mb-5">
                                                <label htmlFor="Price">Price</label>
                                                <input type="text" className="px-3 py-2 " name="price" placeholder="Product Price" />
                                            </div>
                                            <div className="flex flex-col gap-2 text-white  mb-5">
                                                <label htmlFor="Type">Type</label>
                                                <input type="text" className="px-3 py-2 " name="type" placeholder="Product Type" />
                                            </div>
                                        </div>
                                        <div className="lg:flex items-center text-white  gap-3 ">
                                            <div className="flex flex-col gap-2 lg:w-[420px]  mb-5">
                                                <label htmlFor="Rating">Rating</label>
                                                <input type="text" className="px-3 py-2" name="Extrarating" placeholder="Rating" />

                                            </div>

                                        </div>
                                        <div>
                                            <div className='flex flex-col text-white gap-2 lg:w-[420px] mb-5'>
                                                <label htmlFor="Photo">PhotoUrl</label>
                                                <input name="image" className="px-3 py-2" placeholder="Enter photo URL" />

                                            </div>
                                            <div className='flex flex-col text-white gap-2 lg:w-[420px] mb-5'>
                                                <label htmlFor="description">Description</label>
                                                <input name="description" className="px-3 py-2" placeholder="Describe about the product" />

                                            </div>
                                        </div>


                                        <button type='submit' className="py-2 btn bg-base-100   text-green-700  hover:bg-green-800 hover:text-white ">Add Product</button>

                                    </form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default AddProduct;
