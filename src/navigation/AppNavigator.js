import React, {useEffect} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import RootNavigator from "./HomeNavigator";
import AuthNavigator from "./AuthNavigator";
import {useAuth} from "../contexts/AuthContext";
import Loading from "../components/Loading";


const AppNavigator = () => {

    const {authData, loading} = useAuth();

    if(loading) {
        return <Loading />;
    }

    console.log('authData:' + typeof authData);

    /*useEffect(() => {
        console.log('authData: ' + authData);
    },[]);*/

    return (
        <NavigationContainer>
            { Object.keys(authData).length !== 0 ? <RootNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
}

export default AppNavigator;
