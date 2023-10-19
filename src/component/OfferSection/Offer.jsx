

const Offer = () => {
    return (
        <>
            <div className="mt-16 relative rounded-lg w-3/5 mx-auto h-[300px] bg-[url('https://i.ibb.co/dQVzGtX/ec061e1f265e2d7579498d8a2fa36272.jpg')] bg-cover bg-center ">
                <div >
                   
                    <img className="absolute bottom-0 right-3 w-80 h-96" src="https://i.ibb.co/g9WkH5L/0f468d2470c535b267c33e785bc14705-prev-ui.png" alt="" />
                    
                </div>
                <div className=" ml-20 pt-16">
                <h1 className="text-white text-4xl italic font-semibold ">Food Delivery helps you <br />bring food to your front door</h1>
                <button className="btn bg-white text-green-700 mt-5 hover:bg-white ">Buy Now</button>
                </div>
            </div>

        </>
    );
};

export default Offer;