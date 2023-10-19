import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Layout/Home/Home';
import Root from './Layout/Root/Root';
import AddToCart from './Layout/AddCart/AddToCart';
import MyCart from './Layout/MyCart/MyCart';
import NewProduct from './Layout/AddCart/NewProduct';


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
      path:"addCart",
      element:<AddToCart/>
     },
     {
      path:"myCart",
      element:<MyCart/>
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
