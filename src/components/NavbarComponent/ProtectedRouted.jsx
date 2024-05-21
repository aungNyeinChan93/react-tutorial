import React from 'react';
import myproductData from '../../Context/productContext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRouted = ({children}) => {
    const {user} = useContext(myproductData);

    if(!user){
        return <Navigate to="/"/>
    }
    return children;

 
}

export default ProtectedRouted
