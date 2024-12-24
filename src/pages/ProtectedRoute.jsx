import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

export default function ProtectedRoute({children, requiredAdmin}) {
    const { user } = useAuthContext();
    // const [showAlert, setShowAlert] = useState(false);

    if(!user || (requiredAdmin && !user.isAdmin)){
        // if(!showAlert){
            // alert('The approach is invalid.');
            // setShowAlert(true);
        // }
        return <Navigate to='/' replace />;
    }
    
    return children;
}

