import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import TransportNavigator from "./TransportNavigator";
import HomeNavigator from "./HomeNavigator";


const AppNavigator = () => {
    return (
        <NavigationContainer>
            <HomeNavigator />
        </NavigationContainer>
    );
}

export default AppNavigator;
