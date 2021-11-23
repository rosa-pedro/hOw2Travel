import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import RootNavigator from "./HomeNavigator";
import AuthNavigator from "./AuthNavigator";


const AppNavigator = () => {
    return (
        <NavigationContainer>
            <AuthNavigator />
        </NavigationContainer>
    );
}

export default AppNavigator;
