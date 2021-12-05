import React, {createContext, useContext, useEffect, useState} from 'react';
import {authService} from "../services/AuthService";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthToken = '@AuthData';
const AuthContext = createContext({});

const AuthProvider = ({children}) => {

    const [authData, setAuthData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadStorageData();
    }, []);

    const loadStorageData = async () => {

        try {

            const authDataSerialized = await AsyncStorage.getItem(AuthToken);

            if(authDataSerialized) {

                const _authData = JSON.parse(authDataSerialized);
                setAuthData(_authData);
            }

        } catch (error) {
            console.warn(error);
        } finally {
            setLoading(false);
        }
    };

    const signIn = async (email, password) => {
        const _authData = await authService.signIn(email, password);

        console.log('_authData: ' + _authData );
        setAuthData(_authData);
        AsyncStorage.setItem(AuthToken, JSON.stringify(_authData));

        return Object.keys(_authData).length === 0;
    };

    const signOut = async () => {
        setAuthData({});

        await AsyncStorage.removeItem(AuthToken);
    };

    const signUp = async (username, email, password) => {
        await authService.signUp(username, email, password);
    };

    return(
        <AuthContext.Provider value={{authData, loading, signIn, signOut, signUp}}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {

    const context = useContext(AuthContext);

    if(!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export {AuthContext, AuthProvider, useAuth}
