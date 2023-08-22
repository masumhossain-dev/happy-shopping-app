import React, { useContext } from 'react';
import { UserContext } from '../../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRout = ({ children }) => {
    const { user, loading } = useContext(UserContext);
    const location = useLocation();

    if (loading) {
        return <div className='absolute'>
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }

    else if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default PrivateRout;