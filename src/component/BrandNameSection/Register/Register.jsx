import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../ProviderFile/AuthProvider";



const Register = () => {
    const { createUser, loginGoogle,updateUserDetails} = useContext(AuthContext)
    
    const resgisterNav = useNavigate()
    const [error, setError] = useState()
    const [successfullyLogin, setSuccessfullyLogin] = useState()

   

 




    const handleRegister = e => {
        e.preventDefault()
        const email = e.target.email.value
        const name = e.target.name.value
        const password = e.target.password.value
        const number = e.target.phone.value
        const address = e.target.address.value
        console.log(email, password, number, address, name)

        setError(" ")
        setSuccessfullyLogin(" ")
    
        if (password.length < 6) {
            setError(" Password should be at least 6 characters ")
            return;
        } else if (!/[A-Z]/.test(password)) {
            setError('you should use one uppercase character.')
            return;
        } else if (!/[!@#$%^&*]/.test(password))
            setError('you should a special character')

        createUser(email, password)
            .then(result => {
                console.log(result)
                updateUserDetails(result.user,name,email)
                e.target.reset()
                // resgisterNav("/")
                Swal.fire({
                    icon: "success",
                    title: "Sign In Successful",
                    text: "You have successfully signed in!",
                });
                location.reload()
            })
            .catch(error => {
                console.error(error)
                Swal.fire({
                    icon: "success",
                    title: "Sign In Successful",
                    text: "You have successfully signed in!",
                });
            })
    }
    const handleGoogle = () => {
        loginGoogle()
            .then(result => {
                console.log(result.user)

                resgisterNav("/")
                Swal.fire({
                    icon: "success",
                    title: "Sign In Successful",
                    text: "You have successfully signed in!",
                });
                location.reload()


            })
            .catch(error => {
                console.error(error)
                Swal.fire({
                    icon: "success",
                    title: "Sign In Successful",
                    text: "You have successfully signed in!",
                });
            })


    }

    return (
      <>
      <div className="text-white body-font bg-green-900  relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Register Here</h1>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto ">
                        <div className="flex flex-wrap -m-2 ">
                            <form onSubmit={handleRegister} className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="name" className="leading-7 text-sm text-white">Name</label>
                                        <input type="text" id="name" name="name" className="w-full bg-white  rounded border  focus:border-purple-500  text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="email" className="leading-7 text-sm text-white">Email</label>
                                        <input type="email" id="email" name="email" className="w-full bg-white  rounded border  focus:border-purple-500  text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                             
                             
                              
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="password" className="leading-7 text-sm text-white"> Password</label>
                                        <input type="password" id="password" name="password" className="w-full bg-white  rounded border  focus:border-purple-500  text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>

                                <div className="p-2 w-full">
                                    <Link to="/login" className="hover:underline text-lg"><span>Login Here</span></Link>
                                    <button className="flex mx-auto   text-green-700 bg-white border-0 py-2 px-8 focus:outline-none rounded text-lg">Register</button>

                                </div>
                                <div className="p-2 w-full">
                                    <button onClick={handleGoogle} className="flex mx-auto text-green-700 bg-white border-0 py-2 px-8 focus:outline-none rounded text-lg"> Google</button>

                                </div>
                            </form>

                            {
                                error && <p className="mx-8 text-white bg-red-700 p-3">{error}</p>
                            }
                            {
                                successfullyLogin && <p className="mx-8 text-green-600">{successfullyLogin}</p>
                            }





                            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                                <a className="text-white">overworld@gmail.com</a>
                                <br />
                                <span className="inline-flex mt-4">
                                    <a className="text-white">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                        </svg>
                                    </a>
                                    <a className="ml-4 text-white">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                        </svg>
                                    </a>
                                    <a className="ml-4 text-white">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                                        </svg>
                                    </a>
                                    <a className="ml-4 text-white">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                        </svg>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

      
      </>
    );
};

export default Register;