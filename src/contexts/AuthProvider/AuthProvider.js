
import React, { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';

export const AuthContexts = createContext(null);

const AuthProvider = ({ children }) => {

    const allContexts = useFirebase();
    return (
        <AuthContexts.Provider value={allContexts}>
            {children}
        </AuthContexts.Provider>
    );
};

export default AuthProvider;
