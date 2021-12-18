import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import {useAuth} from "../contexts/AuthContext";
import Loading from "../components/Loading";
import RootNavigator from "./RootNavigator";


const AppNavigator = () => {

    const {authData, loading} = useAuth();

    if(loading) {
        return <Loading />;
    }

    return (
        <NavigationContainer>
            { Object.keys(authData).length !== 0 ? <RootNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
}

export default AppNavigator;
