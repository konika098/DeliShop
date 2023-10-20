

const ViewData = ({Data}) => {
    const { name, brandName, image, shortDescription,longDescription,price,rating,category } = Data

    return (
       <>
       <div>
            <div>
                <img src={image} alt="" />
                <h1>{name}</h1>
                <p>{shortDescription}</p>

            </div>

            <div>
                <h1>{longDescription}</h1>
                <p>Brand Name:{brandName}</p>
                <p>Price:{price}</p>
                <p>Category:{category}</p>
                <p>Product Rating:{rating}</p>
               
            </div>
        </div>
       </>
    );
};

export default ViewData;