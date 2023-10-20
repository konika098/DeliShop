import { useEffect, useState } from "react";
import BrandDetails from "./BrandDetails";

const BrandProduct = () => {
    const [data, setData] = useState([])
    const fetchUserData = () => {
        fetch(`http://localhost:5000/BrandProduct/:name`)
          .then(response => {
            return response.json()
          })
          .then(data => {
            setData(data)
          })
      }
    useEffect(() => {
        fetchUserData()
      })

    return (
       <>
       {
            
            data.map(Data =><BrandDetails key={Data._id} Data={Data}></BrandDetails>)
          }
       </>
    );
};

export default BrandProduct;