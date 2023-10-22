
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
import AuthProvider from './component/ProviderFile/AuthProvider';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Login from './Login';
import UpdateModal from './Layout/UpdateProduct/UpdateModal';
import Register from './component/BrandNameSection/Register/Register';



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
      path:"/BrandProduct/:name",
      element:<BrandProduct/>,
      loader:({params})=>fetch(`http://localhost:5000/BrandProduct/${params.name}`)
      
     },
     {
     path:'/brand',
     element:<Brand/>,
    //  loader:()=>fetch('http://localhost:5000/food')
     },
     {
      path:"addProduct",
      element:<PrivateRoute><AddProduct/></PrivateRoute>,
      loader:()=>fetch('http://localhost:5000/food')
     },
     {
      path:'/update/:id',
      element:<UpdateModal/>,
      loader:({params})=>fetch(`http://localhost:5000/food${params._id}`)

     },
  
     {
      path:"/myCart",
      element:<PrivateRoute><MyCart/></PrivateRoute>,
      loader:()=>fetch(`http://localhost:5000/cart`)
     },
     {
      path:'/viewDetails/:id',
      element:<ViewDetails/>,
      loader:({params})=>fetch(`http://localhost:5000/viewDetails/${params.id}`)
      
     },
     {
      path:"/login",
      element:<Login/>

     },
     {
      path:'/register',
      element:<Register/>
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
  <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>,
)
