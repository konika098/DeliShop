const About = () => {
    return (
       <>
       <div className="grid grid-cols-2 w-3/5 mt-40 mx-auto">
        <div>
            <img className="w-full h-[400px]" src="https://i.ibb.co/DprbC5T/pexels-photo-1640772.jpg" alt="" />
        </div>
        <div className="text-center">
            <h1 className="text-green-800 font-semibold text-2xl">ABOUT US</h1>
            <hr className="w-[50%] mx-auto  bg-green-800 h-1" />
            <h2 className="text-xl mt-2 mb-2 text-red-600 font-bold">HOURS</h2>
            <div className="font-semibold">
                <p>Monday- 10am-9pm</p>
                <p>Tuesday- 10am-9pm</p>
                <p>Wednesday- 10am-10pm</p>
                <p>Thursday- 12pm-10pm</p>
                <p>Friday- 12pm-10pm</p>
                <p>Saturday- 12pm-10pm</p>
                <p>Sunday- 12pm-10pm</p>
            </div>
            <div>
                <h1 className="text-xl mt-2 mb-1 text-red-600 font-bold">PHONE</h1>
                <div className="font-semibold">
                <p>+09457668</p>
                <p>01772727922</p>
                </div>
            </div>
            <button className="btn mt-2 bg-green-700 hover:bg-green-800 text-white">More</button>

        </div>
        <div className="text-center mt-10">
            <h1 className="text-green-800 font-semibold text-2xl">ORDER</h1>
            <h3 className="text-green-800 font-semibold text-xl">pick-up & delivery</h3>
            <hr className="w-[50%] mx-auto mt-2 bg-green-800 h-1" />
            <div className="mt-5">
                <h1 className="text-xl mt-2 mb-1 text-red-600 font-bold">CONTACTLESS TAKE-OUT</h1>
                <p className="font-semibold text-lg">To place an order for pickup without contact</p>
                <button className="btn mt-4 bg-green-700 hover:bg-green-800 text-white">Order</button>
            </div>
            <div className="mt-7">
                <h1 className="text-xl mt-2 mb-4 text-red-600 font-bold">DELIVERY EXPANDED</h1>
                <p className="font-semibold text-lg">To place an order for delivery,please choose from on of our them:</p>
                <div className="flex list-none underline mt-4 ml-20 font-semibold gap-10">
                    <li>Cash on delivery</li>
                    <li>Bkash</li>
                    <li>Visa</li>
                </div>
            </div>
        </div>
        <div>
            <img className="w-full h-[400px]" src="https://i.ibb.co/SNcP0zC/pexels-photo-1860208.jpg" alt="" />
        </div>
       </div>
       
       
       </>
    );
};

export default About;