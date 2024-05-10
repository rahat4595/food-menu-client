import { useContext } from "react";

import { AuthContext } from "../providers/Context";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    console.log(location)
    
    if(loading){
        return <h1 className="w-16 h-16 border-4 max-w-7xl mx-auto my-56  border-dashed rounded-full animate-spin border-violet-600"></h1>
       }
    
        if(user){
            return children;
        }
    
        return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PrivateRoute;