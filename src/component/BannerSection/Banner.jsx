

const Banner = () => {
    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/1mX2cwT/pexels-photo-1813505.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl text-white font-bold">Welcome to <span className="text-5xl italic">DeliShop</span></h1>
                        <p className="mb-5 text-white text-2xl">Tasty and Delicious food</p>
                        <button className="btn bg-green-700 text-white border-none hover:bg-green-800">Show Offer</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;