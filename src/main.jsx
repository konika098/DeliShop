import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Layout/Home/Home';
import Root from './Layout/Root/Root';

import MyCart from './Layout/MyCart/MyCart';
import NewProduct from './Layout/UpdateProduct/NewProduct';
import AddProduct from './component/AddProduct/AddProduct';

import ViewDetails from './component/ViewDetailsSection/ViewDetails';
import BrandProduct from './component/BrandNameSection/BrandProduct';
import Brand from './component/BrandNameSection/Brand';



const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    children:[
     {
      path:"/",
      element:<Home/>
     },
     {
      path:"/BrandProduct",
      element:<BrandProduct/>,
      
     },
     {
     path:'/brand',
     element:<Brand/>,
    //  loader:()=>fetch('http://localhost:5000/food')
     },
     {
      path:"addProduct",
      element:<AddProduct/>,
      loader:()=>fetch('http://localhost:5000/food')
     },
    //  {
    //   path:'/update/:id',
    //   element:<Update/>,
    //   loader:({params})=>fetch(`http://localhost:5000/food${params._id}`)

    //  },
  
     {
      path:"myCart",
      element:<MyCart/>
     },
     {
      path:'/viewDetails/:id',
      element:<ViewDetails/>,
      loader:({params})=>fetch(`http://localhost:5000/food${params._id}`)
      
     },
     {
      path:"/newProduct",
      element:<NewProduct></NewProduct>,
      loader:()=>fetch('http://localhost:5000/food')
     }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
