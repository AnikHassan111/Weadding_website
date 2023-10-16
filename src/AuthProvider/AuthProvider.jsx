import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../FireBase/FireBase.confige";
import PropTypes from 'prop-types'
import { GoogleAuthProvider } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export let ContextApi = createContext(null)

const AuthProvider = ({ children }) => {

    let [user, setUser] = useState(null)
    let [loading,setLoading] = useState(true)


    const handleUserCreate = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleUserLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const googleProvider = new GoogleAuthProvider()
    const handleGoogleLogin = () => { 
        setLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(() => {
                toast.success("Google Login SuccessFully", {
                    position: toast.POSITION.TOP_CENTER
                })
            })
            .catch(() => {
                toast.error("Google Login not SuccessFully", {
                    position: toast.POSITION.TOP_CENTER
                })
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser,"authprovider");
            setLoading(false)
        })

        
    }, [])

    const logOut = () => {
        signOut(auth)
    }

    console.log(user);
    let obj = {
        handleUserCreate,
        handleUserLogin,
        handleGoogleLogin,
        user,
        logOut,
        loading
    }
    return (
        <ContextApi.Provider value={obj}>
            {children}
        </ContextApi.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}