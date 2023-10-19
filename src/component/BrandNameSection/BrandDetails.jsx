const BrandDetails = ({showData}) => {
    const { image, Brand_Name } = showData
    return (
        <>
           
       
                
       <div className="mx-auto">
           <img className="h-[200px] w-80" src={image} alt="" />
           {/* <p className="text-center font-semibold text-3xl">{ Brand_Name}</p> */}
       </div>

        </>
    );
};

export default BrandDetails;