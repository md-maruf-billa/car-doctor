import React, { useContext } from 'react';
import { UserContext } from '../ContextProvider/ContextProvider';
import Login from '../Login/Login';


const PrivetRoute = ({children}) => {
    const {currentUser,loading} = useContext(UserContext);
   
    if(!currentUser.email){
        return <Login/>
    }
    else{
        return children;
    }
};

export default PrivetRoute;