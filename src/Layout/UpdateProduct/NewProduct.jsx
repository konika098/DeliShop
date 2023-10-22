// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllNewProduct from "./AllNewProduct";

const NewProduct = () => {
    const food = useLoaderData()
    // const [newProduct,setNewProduct] =useState([])

    // const fetchNewProduct = () => {
    //     fetch("https://delishop-rho.vercel.app/food")
    //       .then(response => {
    //         return response.json()
    //       })
    //       .then(newProduct => {
    //         setNewProduct(newProduct)
    //       })
    //   }
    // useEffect(()=>{
    //     fetchNewProduct()
    //   })
    return (
     <>

     {
       food?.map(newData =><AllNewProduct key={newData._id} newDatas={newData}></AllNewProduct>)
     }
     </>
    );
};

export default NewProduct;