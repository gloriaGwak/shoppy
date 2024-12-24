import React from 'react';
import { Navigate } from 'react-router-dom';
import { UseAuthContext } from '../context/AuthContext';

export default function ProtectedRoute({children, requiredAdmin}) {
    const { user } = UseAuthContext();
    
    if(!user || (requiredAdmin && !user.isAdmin)){
        return <Navigate to='/' replace />;
    }
    console.log(user)
    return children;
}

