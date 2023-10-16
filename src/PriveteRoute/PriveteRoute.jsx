import { useContext } from "react";
import { ContextApi } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PriveteRoute = ({children}) => {
    let {user,loading} = useContext(ContextApi)

    if(loading){
        return <div className="h-screen w-screen flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    if(!user){
        return <Navigate to={'/login'}></Navigate>
    }
    return children
};

export default PriveteRoute;


PriveteRoute.propTypes ={
    children:PropTypes.object
}