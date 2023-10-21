import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {  GoogleAuthProvider, createUserWithEmailAndPassword,updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase.config";



export const AuthContext =createContext(null)
const google = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loader,setLoader]=useState(false)
    const [loading, setLoading] = useState(true);
    const [homeData, setHomeData] = useState([])


    const createUser =(email,password)=>{
       setLoader(true);
       setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

   
    const fetchUserData = () => {
        fetch("brand.json")
          .then(response => {
            return response.json()
          })
          .then(data => {
            setHomeData(data)
          })
      }
      useEffect(() => {
        fetchUserData()
      },[])
    const updateUserDetails = (user, name, photo) => {
        setLoading(true);
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser();
          })
          .catch((err) => {
            console.log(err.message);
          });
      };
    const loginUser =(email,password)=>{
        setLoader(true);
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut =()=>{
        setLoader(true);
        setLoading(true);
        return signOut(auth)
    }
    const loginGoogle =()=>{
        setLoader(true);
        setLoading(true);
        return signInWithPopup(auth,google)
    }
    
    
    useEffect(()=>{
        const unsub =onAuthStateChanged(auth , (userInfo)=>{
            setUser(userInfo)
            // console.log('data ache' ,userInfo)
            setLoading(false);
        })
        return ()=>{
            unsub();
        }
    },[])



    const AuthInfo ={user,createUser,loginUser,logOut,loginGoogle,loader,loading,updateUserDetails,homeData}
    return (
        <>
         <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider >
        </>
    );
};

export default AuthProvider;
AuthProvider.propTypes ={
    children: PropTypes.node
}