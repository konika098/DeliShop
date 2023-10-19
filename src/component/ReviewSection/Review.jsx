

const Review = () => {
    return (
       <>
        <h1 className="text-5xl font-semibold text-center text-green-800 mt-20">What our food lover said:</h1>
       <div className="mt-10 flex flex-col items-center mx-auto">
       
       <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 " >
  <div className="h-full text-center   ">
    <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://i.ibb.co/N30DxRJ/Rectangle-14.png" />
    <p className="leading-relaxed  mb-10 font-semibold text-lg">I had a great time eating delicious food at your DeliShop.Fast delivery ,response time overall  service was good as well.I would buy here again.</p>
    
  </div>
</div>

       </div>
       </>
    );
};

export default Review;