import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/addCart">Add To Cart</NavLink>
                        <NavLink to="/myCart">My Cart</NavLink>
                        </ul>
                    </div>
                    <a className=" normal-case text-2xl font-semibold ">DeliShop</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal flex gap-4 text-2xl font-semibold px-1">
                       
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/addCart">Add To Cart</NavLink>
                        <NavLink to="/myCart">My Cart</NavLink>
                        
                        
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">
                    <a className="btn bg-green-700 hover:bg-green-800 text-white">Login</a>
                    <a className="btn bg-green-700 hover:bg-green-800 text-white">Register</a>
                </div>
            </div>
        </>
    );
};

export default Header;